import { Client, Message } from 'discord.js';

export type Trigger = (string | RegExp | ((message: Message, args: string[]) => boolean));

export interface ICommand {
    name: string;
    description: string;
    validate: (message: Message, args: string[]) => boolean;
    triggers: Trigger[];
    execute: (message: Message, args: string[]) => void;
}
