// Add your script here. You can use the available API properties and methods.

var lBotID = "<enter-your-botID>";
var lChatID = "<enter-your-chatID>";

var lPkgName = package.getName();
var lTxt = "myJD2: YEHAAA - '" + lPkgName + "' wurde fertiggestellt."
lTxt = lTxt.split('\n').join('%0A');
lTxt = encodeURIComponent(lTxt);

var lURL = "https://api.telegram.org/bot" + lBotID + "/sendMessage?chat_id=" + lChatID + "&text=" + lTxt;

var lBrowser = getBrowser();
lBrowser.getPage(lURL);
