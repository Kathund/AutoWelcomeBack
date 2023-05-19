// Made by Kathund#2004
import Settings from "./settings";
const config = Settings

register("command", () => config.openGUI()).setName("autowb");

// ! Guild

import './feature/guild/join.js';
import './feature/guild/memberJoin.js';
import './feature/guild/custom/1.js';
import './feature/guild/custom/2.js';
import './feature/guild/custom/3.js';

// ! Friends

import './feature/friends/boop.js';
import './feature/friends/joinMessage.js';

// ! Other

import './feature/firstInstall.js';
