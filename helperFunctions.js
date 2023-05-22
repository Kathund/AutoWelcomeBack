import PogObject from "../PogData/index"
import Settings from "./settings";
const config = Settings

export const emojis = function (text, username) {
  try {
    if (config.mvpPLUSPLUS) {
      text = text.replaceAll('{star}', ':star:')
        .replaceAll('{yes}', ':yes:')
        .replaceAll('{no}', ':no:')
        .replaceAll('{java}', ':java:')
        .replaceAll('{arrow}', ':arrow:')
        .replaceAll('{shrug}', ':shrug:')
        .replaceAll('{tableflip}', ':tableflip:')
        .replaceAll('{123}', ':123:')
        .replaceAll('{totem}', ':totem:')
        .replaceAll('{typing}', ':typing:')
        .replaceAll('{maths}', ':maths:')
        .replaceAll('{snail}', ':snail:')
        .replaceAll('{thinking}', ':thinking:')
        .replaceAll('{gimme}', ':gimme:')
        .replaceAll('{wizard}', ':wizard:')
        .replaceAll('{pvp}', ':pvp:')
        .replaceAll('{peace}', ':peace:')
        .replaceAll('{oof}', ':oof:')
        .replaceAll('{puffer}', ':puffer:')
        .replaceAll('{heart}', '<3')
    }

    if (config.rankGifting) {
      text = text.replaceAll('{sloth}', ':sloth:')
        .replaceAll('{yey}', ':yey:')
        .replaceAll('{^-^}', '^-^')
        .replaceAll('{cute}', ':cute:')
        .replaceAll('{^_^}', '^_^')
        .replaceAll('{cat}', ':cat:')
        .replaceAll('{h/}', 'h/')
        .replaceAll('{dog}', ':dog:')
        .replaceAll('{snow}', ':snow:')
        .replaceAll('{dab}', ':dab:')
        .replaceAll('{dj}', ':dj:')
    }

    text = text.replaceAll('{username}', username)
      .replaceAll('{heart}', '❤')
      .replaceAll('{arrow}', '➜')
      .replaceAll('{peace}', '✌')
      .replaceAll('{star}', '✯')
      .replaceAll('{yes}', '✔')
      .replaceAll('{no}', '✖')
      .replaceAll('{star2}', '✪')
      .replaceAll('{wave}', '( ﾟ◡ﾟ)/')
      .replaceAll('{boop}', 'Boop!')
      .replaceAll('{poob}', '!pooB')

      // MVP++ emojis
      .replaceAll('{java}', '☕')
      .replaceAll('{shrug}', '¯\_(ツ)_/¯')
      .replaceAll('{tableflip}', '(╯°□°）╯︵ ┻━┻')
      .replaceAll('{123}', '123')
      .replaceAll('{totem}', '☉_☉')
      .replaceAll('{typing}', '✎...')
      .replaceAll('{maths}', '√(π+x)=L')
      .replaceAll('{snail}', "@'-'")
      .replaceAll('{thinking}', '(0.o?)')
      .replaceAll('{gimme}', '༼つ◕_◕༽つ')
      .replaceAll('{wizard}', "('-')⊃━☆ﾟ.*･｡ﾟ")
      .replaceAll('{pvp}', '⚔')
      .replaceAll('{oof}', 'OOF')
      .replaceAll('{puffer}', "<('O')>")

      // Rank gifting emojis
      .replaceAll('{sloth}', '(・⊝・)')
      .replaceAll('{yey}', 'ヽ (◕◡◕) ﾉ')
      .replaceAll('{^-^}', '^-^')
      .replaceAll('{cute}', '(✿◠‿◠)')
      .replaceAll('{^_^}', '^_^')
      .replaceAll('{cat}', '= ＾● ⋏ ●＾ =')
      .replaceAll('{h/}', 'ヽ(^◇^*)/')
      .replaceAll('{dog}', '(ᵔᴥᵔ)')
      .replaceAll('{snow}', '☃')
      .replaceAll('{dab}', '<o/')
      .replaceAll('{dj}', 'ヽ(⌐■_■)ノ♬')
    return text;
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8";

export const data = new PogObject("AutoWelcomeBack", {
  "firstTimeMsg": false,
  "updateMessage1_3_0": false
}, "data/data.json")

export const ShowFirstLoginMessage = () => {
  try {
    data.firstTimeMsg = true;
    data.save();

    let stringArray = [
      `${divider}`,
      ChatLib.getCenteredText(`&dAuto Welcome Back`) + "\n",
      ChatLib.getCenteredText(`&8Looks like this is your first using &dAuto Welcome Backs&8!`) + "\n",
      ChatLib.getCenteredText(`&8GUI command is &e/autowb`) + "\n",
      `\n${divider}`
    ]

    let finalText = ""
    stringArray.forEach((line) => {
      if (line == "-/*") return
      finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
    })

    ChatLib.chat(finalText)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_3_0 = () => {
  try {
    const customUsers = new Message(
      new TextComponent("&7Added the option to have update 3 different users there own custom message")
    );
    const boop = new Message(
      new TextComponent("&7Added the option to boop the user")
    );
    const backEnd = new Message(
      new TextComponent("&7Moved everything to its own file for better backend")
    );
    const firstInstallMessage = new Message(
      new TextComponent("&7Added first install message")
    );
    const changeLog = new Message(
      new TextComponent("&7Added Change log button in the GUI")
    );
    const spelling = new Message(
      new TextComponent("&7Changed spelling in most files")
    );
    const username = new Message(
      new TextComponent("&7Changed the way usernames were gotten to improve performance")
    );
    const memberJoin = new Message(
      new TextComponent("&7Welcomes a user when the join the guild using a custom message")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.3.0`)
    ChatLib.chat(customUsers)
    ChatLib.chat(boop)
    ChatLib.chat(backEnd)
    ChatLib.chat(firstInstallMessage)
    ChatLib.chat(changeLog)
    ChatLib.chat(spelling)
    ChatLib.chat(username)
    ChatLib.chat(memberJoin)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_2_3 = () => {
  try {
    const bug = new Message(
      new TextComponent("&7Fixed a bug with the GUI causing the module not to work")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.2.3`)
    ChatLib.chat(bug)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_2_2 = () => {
  try {
    const delay = new Message(
      new TextComponent("&7Added Customizable delay")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.2.2`)
    ChatLib.chat(delay)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_2_1 = () => {
  try {
    const bug = new Message(
      new TextComponent("&7Fixed a bug where the module was not able to be turned off")
    );
    const delay = new Message(
      new TextComponent("&7Added more delay to the messages so the person jointing the server will be more likely to view the message")
    );
    const moreDelay = new Message(
      new TextComponent("&7Updated the way the delay system works so it will actually run and not just error out some times (was causing the game to crash)")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.2.1`)
    ChatLib.chat(bug)
    ChatLib.chat(delay)
    ChatLib.chat(moreDelay)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_2_0 = () => {
  try {
    const users = new Message(
      new TextComponent("&7Added Support for one custom user. More Slots will come soon")
    );
    const preview = new Message(
      new TextComponent("&7Added a Preview of the welcome message in the GUI")
    );
    const reorganized = new Message(
      new TextComponent("&7Reorganized some GUI elements")
    );
    const otherProjects = new Message(
      new TextComponent("&7Added my other projects to the GUI under the extra info section")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.2.0 &d- Custom Users`)
    ChatLib.chat(users)
    ChatLib.chat(preview)
    ChatLib.chat(reorganized)
    ChatLib.chat(otherProjects)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_1_1 = () => {
  try {
    const plusPlusEmojis = new Message(
      new TextComponent("&7AAdded MVP++ Emojis")
    );
    const rankGiftingEmojis = new Message(
      new TextComponent("&7Added Rank Gifting Emojis")
    );
    const bug = new Message(
      new TextComponent("&7Fixed a bug where the config wouldn't save")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.1.1`)
    ChatLib.chat(plusPlusEmojis)
    ChatLib.chat(rankGiftingEmojis)
    ChatLib.chat(bug)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}


export const viewChangeLog1_1_0 = () => {
  try {
    const welcomeBackToggle = new Message(
      new TextComponent("&7Removed &l/autowb toggle&r command")
    );
    const welcomeBackStatus = new Message(
      new TextComponent("&7Removed &l/autowb status&r command")
    );
    const gui = new Message(
      new TextComponent("&7Added GUI &8(hover)").setHover("show_text", `/autowb command will open the GUI\nSetting\nToggle - Toggles the guild auto welcome back on or off\nWelcome Message - The message that will be sent when a guild member joins\nEmojis\nNot much to explain here, just the emojis that can be used in the welcome message and how to use them\nExtra Info\nNot much to explain here, just some extra info about the module`)
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.1.0 -&d GUI update`)
    ChatLib.chat(welcomeBackToggle)
    ChatLib.chat(welcomeBackStatus)
    ChatLib.chat(gui)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}

export const viewChangeLog1_0_0 = () => {
  try {
    const welcomeBackToggle = new Message(
      new TextComponent("&7Added &l/autowb toggle&r command &8(hover)").setHover("show_text", "will toggle the state of the auto wb")
    );
    const welcomeBackStatus = new Message(
      new TextComponent("&7Added &l/autowb status&r command &8(hover)").setHover("show_text", "will show the current status of auto wb")
    );

    ChatLib.chat(divider)
    ChatLib.chat("")
    ChatLib.chat(`&dAutoWelcomeBack - &ev1.0.0`)
    ChatLib.chat(welcomeBackToggle)
    ChatLib.chat(welcomeBackStatus)
    ChatLib.chat("")
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}
