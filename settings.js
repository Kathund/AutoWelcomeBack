import { @Vigilant, @TextProperty, @ButtonProperty, @SwitchProperty, @SliderProperty @SliderProperty } from 'Vigilance';
let currentVersion = JSON.parse(FileLib.read("AutoWelcomeBack", "metadata.json")).version
import * as helperFunctions from "./helperFunctions.js"
import { Promise } from '../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
@Vigilant('AutoWelcomeBack', 'Auto Welcome Back', {
  getCategoryComparator: () => (a, b) => {
    const categories = ['Settings', 'Guild', 'Friends', 'Emojis', 'Custom Users', 'Extra Info'];
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  getSubcategoryComparator: () => (a, b) => {
    const subcategories = ["General", "MVP++", "Rank Gifting", "Info", "Other Projects", "Credits", "Change Log"];
    return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
      subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
  },
})

class Settings {

  // ! Settings

  @SwitchProperty({
    name: "MVP++",
    description: "If you have mvp++ turn this on and it will replace the emojis with the mvp++ emojis",
    category: "Settings",
    subcategory: "General"
  })
  mvpPLUSPLUS = false;

  @SwitchProperty({
    name: "Rank Gifting",
    description: "If you have all the rank gifting emojis turn this on and it will replace the emojis with the rank gifting emojis",
    category: "Settings",
    subcategory: "General"
  })
  rankGifting = false;

  @SliderProperty({
    name: "Message Delay",
    description: "Change how long the delay is before sending the message (in milliseconds - 1000ms = 1 second) - if you don't know what this is don't change it",
    category: "Settings",
    subcategory: "General",
    min: 0,
    max: 5000
  })
  messageDelay = 2000;

  @SwitchProperty({
    name: "Change Long",
    description: "Shows the change log in chat when the module gets an update",
    category: "Settings",
    subcategory: "General"
  })
  changeLog = false;

  // ! Guild
  @SwitchProperty({
    name: "Toggle",
    description: "Overall Toggle",
    category: "Guild",
    subcategory: "General"
  })
  guildToggle = true;

  @TextProperty({
    name: 'Welcome Back message',
    description: 'Set the message that will be sent in chat when the user joins hypixel',
    category: 'Guild',
    subcategory: 'General',
    placeholder: '{wave} Welcome Back {username}! {heart}',
  })
  guildWelcomeBackMessage = '{wave} Welcome Back {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message",
    category: "Guild",
    subcategory: "General",
    placeholder: `Show Example In Chat`
  })
  previewGuildMessage() {
    try {
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &r&4Udderly_cool &ejoined.&r`);
      delay(this.messageDelay).then(() => ChatLib.chat(`&6AutoWB &d> &r &2Guild > &2[MVP&2-+&4] ${Player.getName()}&r: ${helperFunctions.emojis(this.guildWelcomeBackMessage, "Udderly_cool")}&r`));
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ? Member joining

  @SwitchProperty({
    name: "Guild Member Join Toggle",
    description: "Toggles a message for when someone joins the guild",
    category: "Guild",
    subcategory: "Member Join"
  })
  guildMemberJoinToggle = true;

  @TextProperty({
    name: 'Welcome Message',
    description: 'Set the message that will be sent in chat when the user joins the guild',
    category: 'Guild',
    subcategory: 'Member Join',
    placeholder: '{wave} Welcome to the guild {username}! {heart}',
  })
  guildMemberJoinMessage = '{wave} Welcome to the guild {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message for when someone joins the guild",
    category: "Guild",
    subcategory: "Member Join",
    placeholder: `Show Example In Chat`
  })
  previewGuildMemberJoinMessage() {
    try {
      ChatLib.chat(`&6AutoWB &d>&r &2[MVP&2-+&4] Udderly_Cool &r&ejoined the guild!`);
      delay(this.messageDelay).then(() => ChatLib.chat(`&6AutoWB &d> &r &2Guild > &2[MVP&2-+&4] ${Player.getName()}&r: ${helperFunctions.emojis(this.guildMemberJoinMessage, "Udderly_cool")}`));
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ! Friends
  @SwitchProperty({
    name: "Toggle",
    description: "Overall Toggle",
    category: "Friends",
    subcategory: "General"
  })
  friendToggle = true;

  @SwitchProperty({
    name: "Boop",
    description: "Will boop them when they join (will send after the welcome back message if its on)",
    category: "Friends",
    subcategory: "General"
  })
  friendBoopToggle = true;

  @SwitchProperty({
    name: "Message",
    description: "Will send them a message when they join (will send before the boop message if its on)",
    category: "Friends",
    subcategory: "General"
  })
  friendWelcomeBackMessageToggle = true;

  @TextProperty({
    name: 'Welcome Back message',
    description: 'Set the message that will be sent in chat when the user joins hypixel',
    category: "Friends",
    subcategory: 'General',
    placeholder: '{wave} Welcome Back {username}! {heart}',
  })
  friendWelcomeBackMessage = '{wave} Welcome Back {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message",
    category: "Friends",
    subcategory: "General",
    placeholder: `Show Example In Chat`
  })
  previewFriendsMessage() {
    try {
      ChatLib.chat(`&6AutoWB &d> &r &dFriend > &r&4Udderly_cool &ejoined.&r`);
      if (this.friendWelcomeBackMessageToggle) { delay(this.messageDelay).then(() => ChatLib.chat(`&6AutoWB &d> &r &dTo &2[MVP&2-+&4] Udderly_cool&7: &r${helperFunctions.emojis(this.friendWelcomeBackMessage, "Udderly_cool")}&r`)); }
      if (this.friendBoopToggle) { delay(this.messageDelay + 20).then(() => ChatLib.chat(`&6AutoWB &d> &r &dTo &2[MVP&2-+&4] Udderly_cool&7: &r&r&d&lBoop!&r `)); }
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ! Emojis

  @ButtonProperty({
    name: "&b&l{username}",
    description: "Will return the username of the player that joined",
    category: "Emojis",
    placeholder: Player.getName(),
    subcategory: "General"
  })
  emojisUsername() { };

  @ButtonProperty({
    name: "&b&l{heart}",
    description: "Will replace the emoji with a heart",
    category: "Emojis",
    placeholder: "❤",
    subcategory: "General"
  })
  emojisHeart() { };

  @ButtonProperty({
    name: "&b&l{arrow}",
    description: "Will replace the emoji with a arrow",
    category: "Emojis",
    placeholder: "➜",
    subcategory: "General"
  })
  emojisArrow() { };

  @ButtonProperty({
    name: "&b&l{peace}",
    description: "Will replace the emoji with a peace sign",
    category: "Emojis",
    placeholder: "✌",
    subcategory: "General"
  })
  emojisPeace() { };

  @ButtonProperty({
    name: "&b&l{star}",
    description: "Will replace the emoji with a star",
    category: "Emojis",
    placeholder: "✯",
    subcategory: "General"
  })
  emojisStar() { };

  @ButtonProperty({
    name: "&b&l{yes}",
    description: "Will replace the emoji with a yes",
    category: "Emojis",
    placeholder: "✔",
    subcategory: "General"
  })
  emojisYes() { };

  @ButtonProperty({
    name: "&b&l{no}",
    description: "Will replace the emoji with a no",
    category: "Emojis",
    placeholder: "✗",
    subcategory: "General"
  })
  emojisNo() { };

  @ButtonProperty({
    name: "&b&l{star2}",
    description: "Will replace the emoji with a star",
    category: "Emojis",
    placeholder: "✪",
    subcategory: "General"
  })
  emojisStar2() { };

  @ButtonProperty({
    name: "&b&l{wave}",
    description: "Will replace the emoji with a wave emote",
    category: "Emojis",
    placeholder: "( ﾟ◡ﾟ)/",
    subcategory: "General"
  })
  emojisWave() { };

  @ButtonProperty({
    name: "&b&l{boop}",
    description: "Will replace the emoji with a boop",
    category: "Emojis",
    placeholder: "Boop!",
    subcategory: "General"
  })
  emojisBoop() { };

  // ? MVP++

  @ButtonProperty({
    name: "&b&l{java}",
    description: "Will replace the emoji with a coffee cup",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "☕"
  })
  emojisJava() { };

  @ButtonProperty({
    name: "&b&l{shrug}",
    description: "Will replace the emoji with a shrug emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: '¯\_(ツ)_/¯'
  })
  emojisShrug() { };

  @ButtonProperty({
    name: "&b&l{tableflip}",
    description: "Will replace the emoji with a tableflip emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "(╯°□°）╯︵ ┻━┻"
  })
  emojiTableFlip() { };

  @ButtonProperty({
    name: "&b&l{123}",
    description: "Will replace the emoji with the text 123",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "123"
  })
  emojiTableFlip() { };

  @ButtonProperty({
    name: "&b&l{totem}",
    description: "Will replace the emoji with a totem emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "☉_☉"
  })
  emojiTotem() { };

  @ButtonProperty({
    name: "&b&l{typing}",
    description: "Will replace the emoji with a typing emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "✎..."
  })
  emojiTyping() { };

  @ButtonProperty({
    name: "&b&l{maths}",
    description: "Will replace the emoji with a maths emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "√(π+x)=L"
  })
  emojiMaths() { };

  @ButtonProperty({
    name: "&b&l{snail}",
    description: "Will replace the emoji with a snail emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "@'-'"
  })
  emojiSnail() { };

  @ButtonProperty({
    name: "&b&l{thinking}",
    description: "Will replace the emoji with a thinking emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "(0.o?)"
  })
  emojiThinking() { };

  @ButtonProperty({
    name: "&b&l{gimme}",
    description: "Will replace the emoji with a gimme emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "༼つ◕_◕༽つ"
  })
  emojiGimme() { };

  @ButtonProperty({
    name: "&b&l{wizard}",
    description: "Will replace the emoji with a wizard emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "('-')⊃━☆ﾟ.*･｡ﾟ"
  })
  emojiWizard() { };

  @ButtonProperty({
    name: "&b&l{pvp}",
    description: "Will replace the emoji with a pvp emoji",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "⚔"
  })
  emojiPvp() { };

  @ButtonProperty({
    name: "&b&l{oof}",
    description: "Will replace the emoji with the text OOF",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "OOF"
  })
  emojiOof() { };

  @ButtonProperty({
    name: "&b&l{puffer}",
    description: "Will replace the emoji with a puffer emoticon",
    category: "Emojis",
    subcategory: "MVP++",
    placeholder: "<('O')>"
  })
  emojipuffer() { };

  // ? Rank Gifting

  @ButtonProperty({
    name: "&b&l{sloth}",
    description: "Will replace the emoji with a sloth emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "(・⊝・)"
  })
  emojiSloth() { };

  @ButtonProperty({
    name: "&b&l{yey}",
    description: "Will replace the emoji with the yey emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "ヽ (◕◡◕) ﾉ"
  })
  emojiYey() { };

  @ButtonProperty({
    name: "&b&l{^-^}",
    description: "Will replace the emoji with the slime emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "^-^"
  })
  emojiSlime() { };

  @ButtonProperty({
    name: "&b&l{cute}",
    description: "Will replace the emoji with the cute emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "(✿◠‿◠)"
  })
  emojiCute() { };

  @ButtonProperty({
    name: "&b&l{^_^}",
    description: "Will replace the emoji with the other slime emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "^_^"
  })
  emojiSlimeTwo() { };

  @ButtonProperty({
    name: "&b&l{cat}",
    description: "Will replace the emoji with the cat emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "= ＾● ⋏ ●＾ ="
  })
  emojiCat() { };

  @ButtonProperty({
    name: "&b&l{h/}",
    description: "Will replace the emoji with the Wave emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "ヽ(^◇^*)/"
  })
  emojiWave() { };

  @ButtonProperty({
    name: "&b&l{dog}",
    description: "Will replace the emoji with the dog emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "(ᵔᴥᵔ)"
  })
  emojiDog() { };

  @ButtonProperty({
    name: "&b&l{snow}",
    description: "Will replace the emoji with the snow emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "☃"
  })
  emojiSnow() { };

  @ButtonProperty({
    name: "&b&l{dab}",
    description: "Will replace the emoji with the dab emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "<o/"
  })
  emojiDab() { };

  @ButtonProperty({
    name: "&b&l{dj}",
    description: "Will replace the emoji with the dj emoticon",
    category: "Emojis",
    subcategory: "Rank Gifting",
    placeholder: "ヽ(⌐■_■)ノ♬"
  })
  emojiDj() { };

  // ! Custom Users

  @ButtonProperty({
    name: "WARNING",
    description: "Custom users only works for guild chat ",
    category: "Custom Users",
    placeholder: ""
  })
  warning() { };

  // ? user 1

  @TextProperty({
    name: "Username",
    description: "Custom message for set user - enter the person's username (case doesn't matter)",
    category: "Custom Users",
    subcategory: "User 1",
    placeholder: Player.getName(),
  })
  customUser1Name = Player.getName();

  @TextProperty({
    name: 'Welcome Back message',
    description: 'Set the message that will be sent in chat when the user joins hypixel',
    category: 'Custom Users',
    subcategory: "User 1",
    placeholder: '{h/} Welcome Back {username}! {heart}',
  })
  customUser1Message = '{h/} Welcome Back {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message",
    category: "Custom Users",
    subcategory: "User 1",
    placeholder: `Show Example In Chat`
  })
  previewMessageUser1() {
    try {
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &r&d${this.customUser1Name} &ejoined.&r`);
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &d[MVP&2-+&d] ${Player.getName()}&r: ${helperFunctions.emojis(this.customUser1Message, this.customUser1Name)}&r`);
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ? user 2

  @TextProperty({
    name: "Username",
    description: "Custom message for set user - enter the person's username (case doesn't matter)",
    category: "Custom Users",
    subcategory: "User 2",
    placeholder: Player.getName(),
  })
  customUser2Name = Player.getName();

  @TextProperty({
    name: 'Welcome Back message',
    description: 'Set the message that will be sent in chat when the user joins hypixel',
    category: 'Custom Users',
    subcategory: "User 2",
    placeholder: '{h/} Welcome Back {username}! {heart}',
  })
  customUser2Message = '{h/} Welcome Back {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message",
    category: "Custom Users",
    subcategory: "User 2",
    placeholder: `Show Example In Chat`
  })
  previewMessageUser2() {
    try {
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &r&d${this.customUser2Name} &ejoined.&r`);
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &d[MVP&2-+&d] ${Player.getName()}&r: ${helperFunctions.emojis(this.customUser2Message, this.customUser2Name)}&r`);
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ? user 3

  @TextProperty({
    name: "Username",
    description: "Custom message for set user - enter the person's username (case doesn't matter)",
    category: "Custom Users",
    subcategory: "User 3",
    placeholder: Player.getName(),
  })
  customUser3Name = Player.getName();

  @TextProperty({
    name: 'Welcome Back message',
    description: 'Set the message that will be sent in chat when the user joins hypixel',
    category: 'Custom Users',
    subcategory: "User 3",
    placeholder: '{h/} Welcome Back {username}! {heart}',
  })
  customUser3Message = '{h/} Welcome Back {username}! {heart}';

  @ButtonProperty({
    name: "Preview",
    description: "Shows a preview of your custom message",
    category: "Custom Users",
    subcategory: "User 3",
    placeholder: `Show Example In Chat`
  })
  previewMessageUser3() {
    try {
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &r&d${this.customUser3Name} &ejoined.&r`);
      ChatLib.chat(`&6AutoWB &d> &r &2Guild > &d[MVP&2-+&d] ${Player.getName()}&r: ${helperFunctions.emojis(this.customUser3Message, this.customUser3Name)}&r`);
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  // ! Extra Info

  @ButtonProperty({
    name: "&6&lVersion",
    description: `Current Module Version ${currentVersion}`,
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  creditsVersion() { };

  @ButtonProperty({
    name: "&1&lKath",
    description: `A ChatTriggers module that is designed for hypixel skyblock. It has QOL features read the features list for more info.`,
    category: "Extra Info",
    subcategory: "Other Projects",
    placeholder: "IMPORT"
  })
  importKathAddons() {
    try {
      ChatLib.command(`ct import kath`);
    } catch (error) {
      console.log(error)
      ChatLib.chat(`&6AutoWB &d> ${error}`)
    }
  };

  @ButtonProperty({
    name: "&d&lUdderly_cool (Kathund#2004)",
    description: "for making the module",
    category: "Extra Info",
    subcategory: "Credits",
    placeholder: " "
  })
  creditsDev() { };

  @ButtonProperty({
    name: "&6&lDuckySoHot",
    description: "for letting me steal his code for the gui",
    category: "Extra Info",
    subcategory: "Credits",
    placeholder: " "
  })
  creditsDucky() { };

  @ButtonProperty({
    name: "&3&lStepGh0st",
    description: "for support and helping me with ideas for the module",
    category: "Extra Info",
    subcategory: "Credits",
    placeholder: " "
  })
  creditsGh0st() { };

  @ButtonProperty({
    name: "1.3.0",
    description: "Shows change log for version 1.3.0",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_3_0() {
    helperFunctions.viewChangeLog1_3_0();
  };

  @ButtonProperty({
    name: "1.2.3",
    description: "Shows change log for version 1.2.3",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_2_3() {
    helperFunctions.viewChangeLog1_2_3();
  };

  @ButtonProperty({
    name: "1.2.2",
    description: "Shows change log for version 1.2.2",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_2_2() {
    helperFunctions.viewChangeLog1_2_2();
  };

  @ButtonProperty({
    name: "1.2.1",
    description: "Shows change log for version 1.2.1",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_2_1() {
    helperFunctions.viewChangeLog1_2_1();
  };

  @ButtonProperty({
    name: "1.2.0",
    description: "Shows change log for version 1.2.0",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_2_0() {
    helperFunctions.viewChangeLog1_2_0();
  };

  @ButtonProperty({
    name: "1.1.1",
    description: "Shows change log for version 1.1.1",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_1_1() {
    helperFunctions.viewChangeLog1_1_1();
  };

  @ButtonProperty({
    name: "1.1.0",
    description: "Shows change log for version 1.1.0",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_1_0() {
    helperFunctions.viewChangeLog1_1_0();
  };

  @ButtonProperty({
    name: "1.0.0",
    description: "Shows change log for version 1.0.0",
    category: "Extra Info",
    subcategory: "Change Log",
    placeholder: "Show In Chat"
  })
  changeLog1_0_0() {
    helperFunctions.viewChangeLog1_0_0();
  };

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
