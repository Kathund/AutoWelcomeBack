// Made by Kathund#2004
import Settings from "./settings";
const config = Settings

register("command", () => config.openGUI()).setName("autowb");

// ! Guild

import './feture/guild/join.js';
import './feture/guild/joinUser1.js';

// ! Friends

import './feture/friends/boop.js';
import './feture/friends/joinMessage.js';

// ! Other

import './feture/firstInstall.js';
