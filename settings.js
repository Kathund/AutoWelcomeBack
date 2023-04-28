import * as helperFunctions from "./helperFunctions.js"
let currentVersion = JSON.parse(FileLib.read("AutoWelcomeBack", "metadata.json")).version
import { @Vigilant, @TextProperty, @ButtonProperty, @SwitchProperty, } from 'Vigilance';
@Vigilant('AutoWelcomeBack', 'Auto Welcome Back BETA', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Settings', 'Emojis', 'Custom Users', 'Extra Info'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        const subcategories = ["General", "MVP++", "Rank Gifting", "Info", "Other Projects", "Credits"];
        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
})

class Settings {

    // ! Settings
    @SwitchProperty({
        name: "Toggle",
        description: "Toggle the guild auto welcome back on or off",
        category: "Settings",
        subcategory: "General"
    })
    welcomeBackToggle = true;

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

    @TextProperty({
        name: 'Welcome Back message',
        description: 'Set the message that will be sent in chat when the user joins hypixel',
        category: 'Settings',
        subcategory: 'General',
        placeholder: '{wave} Welcome Back {username}! {heart}',
    })
    welcomeBackMessage = '{wave} Welcome Back {username}! {heart}';

    @ButtonProperty({
        name: "Preview",
        description: "Shows a preview of your custom message",
        category: "Settings",
        subcategory: "General",
        placeholder: `${helperFunctions.emojis(welcomeBackMessage, 'j')}`
    })
    previewMessage() { };

    // ! Emojis

    @ButtonProperty({
        name: "&b&l{username}",
        description: "Will return the username of the player that joined",
        category: "Emojis",
        placeholder: "Udderly_cool",
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
        description: "Will replace the emoji with a shrug emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: '¯\_(ツ)_/¯'
    })
    emojisShrug() { };

    @ButtonProperty({
        name: "&b&l{tableflip}",
        description: "Will replace the emoji with a tableflip emojicon",
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
        description: "Will replace the emoji with a totem emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "☉_☉"
    })
    emojiTotem() { };

    @ButtonProperty({
        name: "&b&l{typing}",
        description: "Will replace the emoji with a typing emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "✎..."
    })
    emojiTyping() { };

    @ButtonProperty({
        name: "&b&l{maths}",
        description: "Will replace the emoji with a maths emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "√(π+x)=L"
    })
    emojiMaths() { };

    @ButtonProperty({
        name: "&b&l{snail}",
        description: "Will replace the emoji with a snail emojicon",
        category: "Emojis",
        placeholder: "@'-'"
    })
    emojiSnail() { };

    @ButtonProperty({
        name: "&b&l{thinking}",
        description: "Will replace the emoji with a thinking emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "(0.o?)"
    })
    emojiThinking() { };

    @ButtonProperty({
        name: "&b&l{gimme}",
        description: "Will replace the emoji with a gimme emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "༼つ◕_◕༽つ"
    })
    emojiGimme() { };

    @ButtonProperty({
        name: "&b&l{wizard}",
        description: "Will replace the emoji with a wizard emojicon",
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
        description: "Will replace the emoji with a puffer emojicon",
        category: "Emojis",
        subcategory: "MVP++",
        placeholder: "<('O')>"
    })
    emojipuffer() { };

    @ButtonProperty({
        name: "&b&l{sloth}",
        description: "Will replace the emoji with a sloth emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "(・⊝・)"
    })
    emojiSloth() { };

    @ButtonProperty({
        name: "&b&l{yey}",
        description: "Will replace the emoji with the yey emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "ヽ (◕◡◕) ﾉ"
    })
    emojiYey() { };

    @ButtonProperty({
        name: "&b&l{^-^}",
        description: "Will replace the emoji with the slime emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "^-^"
    })
    emojiSlime() { };

    @ButtonProperty({
        name: "&b&l{cute}",
        description: "Will replace the emoji with the cute emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "(✿◠‿◠)"
    })
    emojiCute() { };

    @ButtonProperty({
        name: "&b&l{^_^}",
        description: "Will replace the emoji with the other sliem emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "^_^"
    })
    emojiSlimeTwo() { };

    @ButtonProperty({
        name: "&b&l{cat}",
        description: "Will replace the emoji with the cat emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "= ＾● ⋏ ●＾ ="
    })
    emojiCat() { };

    @ButtonProperty({
        name: "&b&l{h/}",
        description: "Will replace the emoji with the Wave emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "ヽ(^◇^*)/"
    })
    emojiWave() { };

    @ButtonProperty({
        name: "&b&l{dog}",
        description: "Will replace the emoji with the dog emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "(ᵔᴥᵔ)"
    })
    emojiDog() { };

    @ButtonProperty({
        name: "&b&l{snow}",
        description: "Will replace the emoji with the snow emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "☃"
    })
    emojiSnow() { };

    @ButtonProperty({
        name: "&b&l{dab}",
        description: "Will replace the emoji with the dab emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "<o/"
    })
    emojiDab() { };

    @ButtonProperty({
        name: "&b&l{dj}",
        description: "Will replace the emoji with the dj emojicon",
        category: "Emojis",
        subcategory: "Rank Gifting",
        placeholder: "ヽ(⌐■_■)ノ♬"
    })
    emojiDj() { };

    // ! Custom Users

    @TextProperty({
        name: "Username",
        description: "Custom message for set user - enter the person's username (case dosent matter)",
        category: "Custom Users",
        subcategory: "User 1",
        placeholder: 'Udderly_cool',
    })
    customUser1Name = 'coldonbottom';

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
        placeholder: `${helperFunctions.emojis(customUser1Message, customUser1Name)}`
    })
    previewMessage() { };

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
        name: "&d&lKath Addons",
        description: `A ChatTriggers module that is designed for hypixel skyblock. It has QOL fetures read the features list for more info.`,
        category: "Extra Info",
        subcategory: "Other Projects",
        placeholder: "IMPORT"
    })
    importKathAddons() {
        ChatLib.command(`ct reload`);
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

    constructor() {
        this.initialize(this);
    }
}

export default new Settings();