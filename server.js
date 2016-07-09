var express = require("express")
var fetch = require("isomorphic-fetch")

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./'));

var data

var countryImageMap = {
	"Yemen": "http://www.yemenembassy.ca/eng/PressCoverage/images/Yemen.jpg",
	"Pakistan": "http://www.worldbank.org/content/dam/photos/780x439/2016/feb-5/JYK-IBA-PAKISTAN-2-10-2016--feature-story-3.jpg",
	"Somalia": "https://www.kirkensnodhjelp.no/globalassets/bilder---ovrig-nettsted/om-oss/somalia700.jpg",
	"Shabwah Province": "https://tangentcode.files.wordpress.com/2015/05/shabwafear30ap.jpg",
	"Marib Province": "http://pix.avaxnews.com/avaxnews/5a/5a/00035a5a_medium.jpeg",
	"North Waziristan": "https://outofcentralasianow.files.wordpress.com/2009/12/drones-and-suicide-attacks-see-dawn-story-dawn-file-photo.jpg",
	"Hadhramaut Province": "http://english.aawsat.com/wp-content/uploads/2014/08/AQAP-in-Hadhramaut.jpg",
}

app.get('/incidents', function(req, res, next) {
  if (data)
    return res.json({incidents: data})
  // Handle the get for this route
  fetch("http://api.dronestre.am/data")
    .then(function(_res) {
      return _res.json()
    })
    .then(function(json) {
      data = json.strike.splice(
        json.strike.length - 101,
        json.strike.length - 1
      )

			data = data.map(function(d) {
				d.imgUrl = countryImageMap[d.location] || countryImageMap[d.country] || countryImageMap["Somalia"]
				return d
			})

      return res.json({incidents: data})
    })
});


app.listen(3005, function() {console.log("don")})
