// Made by Kathund#2004
import * as helperFunctions from "./helperFunctions.js"
import Settings from "./settings";
const config = Settings

if (config.welcomeBackToggle !== true && config.welcomeBackToggle !== false) {
  ChatLib.chat(`&d[&6&lAutoWelcomeBack&d] &cError detecting toggle state`);
}

register("command", () => config.openGUI()).setName("autowb");

register("chat", function (message, event) {
  const name = message.substring(2);
  if (config.welcomeBackToggle === "false") return;
  setTimeout(() => {
    if (name.toLowerCase() === config.customUser1Name.toLowerCase()) {
      ChatLib.command(`gc ${helperFunctions.emojis(config.customUser1Message, name)}`);
    } else {
      ChatLib.command(`gc ${helperFunctions.emojis(config.welcomeBackMessage, name)}`);
    }
  }, 1000);
}).setChatCriteria("&2Guild > &r${message} &r&ejoined.&r");
