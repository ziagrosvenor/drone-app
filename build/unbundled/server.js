var express = require("express")
var fetch = require("isomorphic-fetch")
var Promise = require("bluebird")
var PORT = process.env.PORT || 3005

var app = express()

var R = require("ramda")

var strikesByCountry = (country, strikes) => (R.filter(
	(strike) => R.toLower(strike.country) === country
)(strikes))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./'));

var strikes

var countryImageMap = {
	"Yemen": "http://www.yemenembassy.ca/eng/PressCoverage/images/Yemen.jpg",
	"Pakistan": "http://www.worldbank.org/content/dam/photos/780x439/2016/feb-5/JYK-IBA-PAKISTAN-2-10-2016--feature-story-3.jpg",
	"Somalia": "https://www.kirkensnodhjelp.no/globalassets/bilder---ovrig-nettsted/om-oss/somalia700.jpg",
	"Shabwah Province": "https://tangentcode.files.wordpress.com/2015/05/shabwafear30ap.jpg",
	"Marib Province": "http://pix.avaxnews.com/avaxnews/5a/5a/00035a5a_medium.jpeg",
	"North Waziristan": "https://outofcentralasianow.files.wordpress.com/2009/12/drones-and-suicide-attacks-see-dawn-story-dawn-file-photo.jpg",
	"Hadhramaut Province": "http://english.aawsat.com/wp-content/uploads/2014/08/AQAP-in-Hadhramaut.jpg",
}

app.get("/strikes", (req, res) => {
  getStrikes()
    .then((strikes) => {
      const country = req.query.country || false
      const takeLast = req.query.takeLast || false

      var _strikes = country ?
        strikesByCountry(country, strikes) :
        strikes

      _strikes = takeLast ?
        R.takeLast(takeLast, _strikes) :
        _strikes

      return res.json({strikes: _strikes})
    })
})

app.get('/incidents', function(req, res, next) {
  getStrikes().then((strikes) => {
    var data = R.takeLast(200, strikes)
    return res.json({incidents: data})
  })
});


app.listen(PORT, () => console.log("don"))
getStrikes()

const convertStrToNum = (d) => {
  const n = Number(d)
  return typeof n === Number.NaN ? 0 : n
}

function getStrikes() {
  if (strikes)
    return Promise.resolve(strikes)

  return fetch("http://api.dronestre.am/data")
    .then(function(droneRes) {
      return droneRes.json()
    })
    .then(function(json) {
      strikes = R.map(R.compose(
        R.omit(["deaths_min"]),
        (strike) => {
          strike.deaths = strike.deaths_min
          return strike
        },
        R.evolve({
          deaths_min: convertStrToNum,
          civilians: convertStrToNum,
          injuries: convertStrToNum,
        }),
        R.pick([
          "_id",
          "deaths_min",
          "injuries",
          "country",
          "narrative",
          "civilians",
          "location",
          "town",
          "lat",
          "lon"
        ])
      ))(json.strike)

      return strikes
    })
    .catch(console.error)
}

function addImgUrl(d) {
  d.imgUrl = countryImageMap[d.location] || countryImageMap[d.country] || countryImageMap["Somalia"]
  return d
}
