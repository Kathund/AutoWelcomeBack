import * as helperFunctions from "../../helperFunctions.js";
import { Promise } from '../../PromiseV2';
import Settings from "../../settings.js";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

register("chat", function (message, event) {
  var name = message.substring(2);
  if (!config.guildToggle) return;
  if (name.toLowerCase() === config.customUser1Name.toLowerCase()) return;
  delay(config.messageDelay).then(() => ChatLib.command(`gc ${helperFunctions.emojis(config.customUser1Message, name)}`));
}).setChatCriteria("&2Guild > &r${message} &r&ejoined.&r");
