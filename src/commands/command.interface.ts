import { Message } from 'discord.js';

export type Trigger = string | RegExp | ((message: Message, command: string, args: string[]) => boolean);

export interface ICommand {
    name: string;
    description: string;
    triggers: Trigger[];
    validate: (message: Message, command: string, args: string[]) => boolean;
    execute: (message: Message, command: string, args: string[]) => void;
}
