let currentVersion = JSON.parse(FileLib.read("AutoWelcomeBack", "metadata.json")).version
import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, Color} from 'Vigilance';
@Vigilant('Auto Welcome Back', 'Auto Welcome Back', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Settings', 'Emojis', 'Extra Info'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
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

    @TextProperty({
        name: 'Welcome Back message',
        description: 'Set the message that will be sent in chat when the user joins hypixel',
        category: 'Settings',
        subcategory: 'General',
        placeholder: '( ﾟ◡ﾟ)/ Welcome Back Udderly_cool! ❤',
    })
    welcomeBackMessage = '{wave} Welcome Back {username}! {heart}';

    // ! Emojis

    @ButtonProperty({
        name: "&b&l{username}",
        description: "Will return the username of the player that joined",
        category: "Emojis",
        placeholder: "Udderly_cool"
    })
    emojisUsername() { };

    @ButtonProperty({
        name: "&b&l{heart}",
        description: "Will replace the emoji with a heart",
        category: "Emojis",
        placeholder: "❤"
    })
    emojisHeart() { };

    @ButtonProperty({
        name: "&b&l{arrow}",
        description: "Will replace the emoji with a arrow",
        category: "Emojis",
        placeholder: "➜"
    })
    emojisArrow() { };

    @ButtonProperty({
        name: "&b&l{peace}",
        description: "Will replace the emoji with a peace sign",
        category: "Emojis",
        placeholder: "✌"
    })
    emojisPeace() { };

    @ButtonProperty({
        name: "&b&l{star}",
        description: "Will replace the emoji with a star",
        category: "Emojis",
        placeholder: "✯"
    })
    emojisStar() { };

    @ButtonProperty({
        name: "&b&l{yes}",
        description: "Will replace the emoji with a yes",
        category: "Emojis",
        placeholder: "✔"
    })
    emojisYes() { };

    @ButtonProperty({
        name: "&b&l{no}",
        description: "Will replace the emoji with a no",
        category: "Emojis",
        placeholder: "✗"
    })
    emojisNo() { };

    @ButtonProperty({
        name: "&b&l{star2}",
        description: "Will replace the emoji with a star",
        category: "Emojis",
        placeholder: "✪"
    })
    emojisStar2() { };

    @ButtonProperty({
        name: "&b&l{wave}",
        description: "Will replace the emoji with a wave emote",
        category: "Emojis",
        placeholder: "( ﾟ◡ﾟ)/"
    })
    emojisWave() { };

    @ButtonProperty({
        name: "&b&l{boop}",
        description: "Will replace the emoji with a boop",
        category: "Emojis",
        placeholder: "Boop!"
    })
    emojisBoop() { };

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

export default new Settings;