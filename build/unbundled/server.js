var express=require("express"),fetch=require("isomorphic-fetch"),app=express();app.use(function(e,a,t){a.header("Access-Control-Allow-Origin","*"),a.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),t()}),app.use(express.static("./"));var data,countryImageMap={Yemen:"http://www.yemenembassy.ca/eng/PressCoverage/images/Yemen.jpg",Pakistan:"http://www.worldbank.org/content/dam/photos/780x439/2016/feb-5/JYK-IBA-PAKISTAN-2-10-2016--feature-story-3.jpg",Somalia:"https://www.kirkensnodhjelp.no/globalassets/bilder---ovrig-nettsted/om-oss/somalia700.jpg","Shabwah Province":"https://tangentcode.files.wordpress.com/2015/05/shabwafear30ap.jpg","Marib Province":"http://pix.avaxnews.com/avaxnews/5a/5a/00035a5a_medium.jpeg","North Waziristan":"https://outofcentralasianow.files.wordpress.com/2009/12/drones-and-suicide-attacks-see-dawn-story-dawn-file-photo.jpg","Hadhramaut Province":"http://english.aawsat.com/wp-content/uploads/2014/08/AQAP-in-Hadhramaut.jpg"};app.get("/incidents",function(e,a,t){return data?a.json({incidents:data}):void fetch("http://api.dronestre.am/data").then(function(e){return e.json()}).then(function(e){return data=e.strike.splice(e.strike.length-101,e.strike.length-1),data=data.map(function(e){return e.imgUrl=countryImageMap[e.location]||countryImageMap[e.country]||countryImageMap.Somalia,e}),a.json({incidents:data})})}),app.listen(3005,function(){console.log("don")});