import { Client, Message } from "discord.js";
import { ICommand } from './command.interface';

export class PingCommand implements ICommand {
    public name: string = "ping";
    public description: string = "A simple Debug Command!";
    
    public async run(client: Client, message: Message, args: string[]): Promise<void> {
        message.reply("Pong!");
    }
}
