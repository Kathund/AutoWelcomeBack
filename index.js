// Made by Kathund#2004
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
    ChatLib.command(`gc ${(config.welcomeBackMessage).replaceAll('{username}', name).replaceAll('{heart}', '❤').replaceAll('{arrow}', '➜').replaceAll('{peace}', '✌').replaceAll('{star}', '✯').replaceAll('{yes}', '✔').replaceAll('{no}', '✖').replaceAll('{star2}', '✪').replaceAll('{wave}', '( ﾟ◡ﾟ)/').replaceAll('{boop}', 'Boop!')}`);
  }, 1000);
}).setChatCriteria("&2Guild > &r${message} &r&ejoined.&r");
