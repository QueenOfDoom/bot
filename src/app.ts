import * as dotenv from 'dotenv';
import * as Discord from 'discord.js';
import {handlers} from '@/event-handlers';

dotenv.config();

const client = new Discord.Client();

handlers.forEach(handler => {
    client.on(handler.EVENT_NAME, (...args) => handler.onEvent(...args));
});

client.login(process.env.DISCORD_API_KEY);