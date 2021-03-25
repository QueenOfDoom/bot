import { Message } from 'discord.js';
import { ICommand, Trigger } from './command.interface';

export class PingCommand implements ICommand {
    public name = 'ping';
    public description = 'A simple debug command!';
    public validate = () => true;

    public triggers: Trigger[] = [this.name];

    public execute(message: Message, command: string, args: string[]) {
        message.channel.send('Pong!');
    }
}
