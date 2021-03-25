import { Command } from './command';
import { PingCommand } from './ping.command';
import { DefaultCommand } from '@/commands/default.command';

const defaultCommand = new DefaultCommand();

const commands: Command[] = [
    defaultCommand,
    new PingCommand()
];

export {
    commands,
    defaultCommand,
    PingCommand,
    DefaultCommand
}
