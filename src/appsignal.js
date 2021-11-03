const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: !!process.env.APPSIGNAL_KEY,
  name: "express-socketio-appsignal-test",
  apiKey: process.env.APPSIGNAL_KEY,
  workingDirectoryPath: ".appsignal",
});

module.exports = appsignal;
