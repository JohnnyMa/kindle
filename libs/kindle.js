var mail = require('./mail');
var configFile = path.resolve(__dirname, '../config.json');
var configs = fs.readJSON(configFile);

/**
*
* Push files via SMTP mailer
* @to[Srting]
* @from[String]
* @sender[Object]
* @files[Array]
*
**/
exports.push = function(params, callback) {
  return mail.send({
    to: params.to || configs.mime,
    from: params.from || configs.sender.email,
    sender: params.sender || configs.sender,
    files: params.files
  }, callback);
}