// Add your script here. You can use the available API properties and methods.
// find infos here: https://stackoverflow.com/questions/66357558/back-to-line-in-api-calls-with-fetch-for-telegram-bot

var lBotID = "<enter-your-botID>";
var lChatID = "<enter-your-chatID>";

var lPkgName = package.getName();
var lTxt = "myJD2: YEHAAA - '" + lPkgName + "' has been completed."

lTxt = lTxt.split('\n').join('%0A');
lTxt = encodeURIComponent(lTxt);

var lURL = "https://api.telegram.org/bot" + lBotID + "/sendMessage?chat_id=" + lChatID + "&text=" + lTxt;

var lBrowser = getBrowser();
lBrowser.getPage(lURL);
