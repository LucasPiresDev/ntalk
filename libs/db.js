const mongoose = require('mongoose');
const bluebird = require('bluebird');
const config = require('../config');
const host = config.mongodb[config.env];
mongoose.Promise = bluebird;
//module.exports = mongoose.connect(envURL[curretEnv.replace(" ","")], { useMongoClient: true });
module.exports = mongoose.connect(host, config.mongoose);