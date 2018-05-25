let mongoose = require('mongoose');
//mongodb://<dbuser>:<dbpassword>@ds235850.mlab.com:35850/edukndiacrud
mongoose.connect('mongodb://edu:123@ds235850.mlab.com:35850/edukndiacrud',{useMongoClient:  true});
//mongoose.connect('mongodb://localhost:27017/crud',{useMongoClient:  true});
module.exports= mongoose;