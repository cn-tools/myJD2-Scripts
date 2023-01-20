// Add your script here. You can use the available API properties and methods.

var lBotID = "<enter-your-botID>";
var lChatID = "<enter-your-chatID>";

var lPkgName = package.getName();
var lTxt = "myJD2: YEHAAA - '" + lPkgName + "' has been completed."

lTxt = lTxt.replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss');
lTxt = lTxt.replace('Ä', 'AE').replace('Ö', 'OE').replace('Ü', 'UE');
lTxt = lTxt.replace(/ /g, '%20').split('\n').join('%0A');

var lURL = "https://api.telegram.org/bot" + lBotID + "/sendMessage?chat_id=" + lChatID + "&text=" + lTxt;

var lBrowser = getBrowser();
lBrowser.getPage(lURL);
