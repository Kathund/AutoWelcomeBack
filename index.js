// Made by Kathund#2004
var toggled = FileLib.read("AutoWelcomeBack/settings", "toggle.txt");

if (toggled !== "true" && toggled !== "false") {
  FileLib.write("AutoWelcomeBack/settings", "toggle.txt", "true");
  ChatLib.chat(`&d[&6&lAutoWelcomeBack&d] &cError detecting toggle state. Toggle state set to &fON`);
  toggled = "true";
}

register("command", main => {
  if (main.toLowerCase() === "toggle") {
    if (toggled.toLowerCase() === "false") {
      toggled = "true";
      ChatLib.chat(`&d[&6&lAutoWelcomeBack&d] &aWelcome Back &a&nactivated&r&a`);
    }
    else {
      toggled = "false";
      ChatLib.chat(`&d[&6&lAutoWelcomeBack&d] &aWelcome Back &c&nde-activated&r&c`);
    }
    FileLib.write("AutoWelcomeBack/settings", "toggle.txt", toggled);
    return;
  }
  if (main.toLowerCase() === "status") {
    if (toggled.toLowerCase() === "false") {
      ChatLib.chat("&d[&6&lAutoWelcomeBack&d] &bThe current toggle state is &n&cOFF");
    } else if (toggled.toLowerCase() === "true") {
      ChatLib.chat("&d[&6&lAutoWelcomeBack&d] &bThe current toggle state is &aON");
    } else {
      ChatLib.chat("&d[&6&lAutoWelcomeBack&d] &cError detecting toggle state. Toggle state set to &fON");
      toggled = "true";
      FileLib.write("AutoWelcomeBack/settings", "toggle.txt", toggled);
    }
  }
  if (main.toLowerCase() === "info") {
    ChatLib.chat("&d&m" + ChatLib.getChatBreak("-"));
    ChatLib.chat(ChatLib.getCenteredText(`&6&lAutoWelcomeBack &fby &dKathund#2004&7`));
    ChatLib.chat("");
    ChatLib.chat("Credits:");
    ChatLib.chat("— &b&lKathund#2004 (Udderly_cool) &ffor making the module");
    ChatLib.chat("— &3&lStepGh0st &ffor being usefull and helping me with ideas");
    ChatLib.chat("— &c&lFor Support add me on discord Kathund#2004");
    ChatLib.chat("");
    ChatLib.chat("&d&m" + ChatLib.getChatBreak("-"));
  }
  else {
    ChatLib.chat("&d[&6&lAutoWelcomeBack&d] &cInvalid command. &eAvailable commands are &a/autowb toggle&e & &a/autowb status&e & &a/autowb info&e");
  }
}).setTabCompletions(["toggle", "status", "info"]).setName("autowb");

register("chat", function (message, event) {
  const name = message.substring(2);
  if (toggled === "true") { ChatLib.command(`gc Welcome back ${name} <3`); }
  else return;
}).setChatCriteria("&2Guild > &r${message} &r&ejoined.&r");