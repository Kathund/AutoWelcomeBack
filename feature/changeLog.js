import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings.js";
const config = Settings

register("step", () => {
  try {
    if (!config.changeLog) return;
    if (helperFunction.data.updateMessage1_3_0) return;
    helperFunction.data.updateMessage1_3_0 = true
    helperFunction.data.save();
    helperFunction.viewChangeLog1_3_0();
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> ${error}`)
  }
}).setFps(5)
