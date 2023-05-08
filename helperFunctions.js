import PogObject from "../PogData/index"
import Settings from "./settings";
import axios from "../axios";
const config = Settings

export const emojis = function checkEmojies(text, username) {
  if (config.mvpPLUSPLUS === true) {
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

  if (config.rankGifting === true) {
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

    // Rank gifitng emojis
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
}

export const removeColors = function removeColors(text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const getUsername = (uuid) => axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`).then(a => a.data.name).catch(e => { console.log(e) })

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("AutoWelcomeBack", {
  "firstTimeMsg": false
}, "data/data.json")

export const ShowFirstLoginMessage = () => {
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
}
