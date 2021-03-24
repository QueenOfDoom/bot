import { Client, Message } from "discord.js";
import { ICommand, Trigger } from './command.interface';

export class PingCommand implements ICommand {
    public name: string = "ping";
    public description: string = "A simple Debug Command!";
    public validate = () => true;
    
    public triggers: Trigger[] = [
        this.name
    ];

    public execute(message: Message, args: string[]) {
        message.reply("Pong!");
    }

}
