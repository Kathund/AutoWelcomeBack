import * as helperFunctions from "../../helperFunctions.js"
import { Promise } from '../../PromiseV2';
import Settings from "../../settings.js";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

register("chat", function (message, event) {
  var name = message.substring(2);
  if (!config.friendToggle) return;
  if (config.friendWelcomeBackMessageToggle) { delay(config.messageDelay).then(() => ChatLib.command(`w ${name} ${helperFunctions.emojis(config.friendWelcomeBackMessage, name)}`)); }
}).setChatCriteria("&aFriend > &r${message} &r&ejoined.&r");
