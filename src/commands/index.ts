import { ICommand } from './command.interface';
import { PingCommand } from './ping.command';
import { DefaultCommand } from '@/commands/default.command';

const defaultCommand = new DefaultCommand();

const commands: ICommand[] = [
    defaultCommand,
    new PingCommand()
];

export {
    commands,
    defaultCommand,
    PingCommand,
    DefaultCommand
}
