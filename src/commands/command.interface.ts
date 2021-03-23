import { Client } from 'discord.js';

export interface ICommand {
    name: string;
    description: string;
    aliases?: string[];
    run(client: Client, message: Message, args: string[]): Promise<void>;
}
