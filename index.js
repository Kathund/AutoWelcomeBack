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
  if (config.friendToggle === false) return;
  if (config.friendWelcomeBackMessage) { delay(2000).then(() => ChatLib.command(`w ${name} ${helperFunctions.emojis(config.friendWelcomeBackMessage, name)}`)); }
  if (config.friendBoopToggle) { delay(2000).then(() => ChatLib.command(`boop ${name}`)); }
}).setChatCriteria("&aFriend > &r${message} &r&ejoined.&r");
