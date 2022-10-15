
var admin = require("firebase-admin");

var serviceAccount = require("./project1-382f0-firebase-adminsdk-86u87-f28182538e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project1-382f0-default-rtdb.asia-southeast1.firebasedatabase.app"
});
