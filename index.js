// Made by Kathund#2004
import * as helperFunctions from "./helperFunctions.js"
import { Promise } from '../PromiseV2';
import Settings from "./settings";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

if (config.welcomeBackToggle !== true && config.welcomeBackToggle !== false) {
  ChatLib.chat(`&d[&6&lAutoWelcomeBack&d] &cError detecting toggle state`);
}

register("command", () => config.openGUI()).setName("autowb");

register("chat", function (message, event) {
  var name = message.substring(2);
  if (config.welcomeBackToggle === false) return;
  if (name.toLowerCase() === config.customUser1Name.toLowerCase()) {
    delay(2000).then(() => ChatLib.command(`gc ${helperFunctions.emojis(config.customUser1Message, name)}`));
  } else {
    delay(2000).then(() => ChatLib.command(`gc ${helperFunctions.emojis(config.welcomeBackMessage, name)}`));
  }
}).setChatCriteria("&2Guild > &r${message} &r&ejoined.&r");

register("chat", function (message, event) {
  var name = message.substring(2);
  if (config.friendWelcomeBackToggle === false) return;
    if (name.toLowerCase() === config.customUser1Name.toLowerCase()) {
      ChatLib.command(`gc ${helperFunctions.emojis(config.customUser1Message, name)}`);
    } else {
      ChatLib.command(`gc ${helperFunctions.emojis(config.welcomeBackMessage, name)}`);
    }
}).setChatCriteria("&aFriend > &r${message} &r&ejoined.&r");
