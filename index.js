import {Telegraf, session} from "telegraf";
import config from "./data/config.js";

const bot = new Telegraf(config.token);

bot.use(session());
import startComposer from "./listeners/users/start.js";
import usersComposer from "./listeners/users/users.js";
import adminsComposer from "./listeners/users/admins.js";

bot.use(startComposer, usersComposer, adminsComposer);

bot.launch().then().catch(console.log);
process.on("unhandledRejection", console.log);
