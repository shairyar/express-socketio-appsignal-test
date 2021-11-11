const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "express-socketio-appsignal-test",
  apiKey: process.env.APPSIGNAL_PUSH_API_KEY,
  workingDirectoryPath: ".appsignal",
  debug: true,
  logPath: "logs"
});

module.exports = appsignal;
