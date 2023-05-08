// Made by Kathund#2004
import * as helperFunctions from "./helperFunctions.js"
import { Promise } from '../PromiseV2';
import Settings from "./settings";
const config = Settings
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

register("command", () => config.openGUI()).setName("autowb");

// ! Guild

import './feture/guild/join.js';
import './feture/guild/joinUser1.js';

// ! Friends

import './feture/friends/boop.js';
import './feture/friends/joinMessage.js';
