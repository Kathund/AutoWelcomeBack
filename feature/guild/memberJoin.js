import * as helperFunctions from "../../helperFunctions.js";
import { Promise } from '../../../PromiseV2';
import Settings from "../../settings.js";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

register("chat", function (event) {
  try {
    var message = helperFunctions.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!config.guildMemberJoinToggle) return;
    if (!message.includes(" joined the guild!")) return;
    var pattern = /\[[^\]]*\]/;
    var match = message.match(pattern)
    if (match) message = message.replace(`${match[0]} `, '')
    var username = message.replace(' joined the guild!', '');
    delay(config.messageDelay).then(() => ChatLib.command(`gc ${helperFunctions.emojis(config.guildMemberJoinMessage, username)}`));
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> ${error}`)
  }
})