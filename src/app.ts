import * as dotenv from 'dotenv';
import * as Discord from 'discord.js';
import {handlers} from '@/event-handlers';
import { ConfigService, discordClientOptions } from './services/config.service';

const config = new ConfigService();
const client = new Discord.Client(discordClientOptions);

handlers.forEach(handler => {
    client.on(handler.EVENT_NAME, (...args) => handler.onEvent(...args));
});

client.login(config.botConfig.token);