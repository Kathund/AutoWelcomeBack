import * as helperFunction from "../helperFunctions.js";

register("step", () => {
  try {
    if (!helperFunction.data.firstTimeMsg) return;
    helperFunction.ShowFirstLoginMessage();
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&6AutoWB &d> &c${error}`)
  }
}).setFps(5)
