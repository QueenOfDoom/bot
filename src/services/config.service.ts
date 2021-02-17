import { ClientOptions } from 'discord.js';
import * as dotenv from 'dotenv';

export class ConfigService {
    constructor() {
        dotenv.config();
    }

    get botConfig(): BotConfig {
        return {
            token: <string>process.env.BOT_TOKEN,
            prefix: <string>process.env.BOT_PREFIX
        }
    }

}

export const discordClientOptions: ClientOptions = {
    presence: {
        status: 'online',
        activity: {
            name: 'Programmers Palace',
            type: 'WATCHING',
            url: 'http://www.programmerspalace.com'
        }
    }
};

interface BotConfig {
    token: string;
    prefix: string;
}

export const config = new ConfigService();