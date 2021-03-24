import { ICommand } from './command.interface';
import { PingCommand } from './ping.command';

let commands: ICommand[] = [
    new PingCommand()
];

export {
    commands,
    PingCommand
}
