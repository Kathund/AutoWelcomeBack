import { Promise } from '../../../PromiseV2';
import Settings from "../../settings.js";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

register("chat", function (message, event) {
  try {
    var name = message.substring(2);
    if (!config.friendToggle) return;
    if (config.friendBoopToggle) { delay(config.messageDelay + 200).then(() => ChatLib.command(`boop ${name}`)); }
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}).setChatCriteria("&aFriend > &r${message} &r&ejoined.&r");
