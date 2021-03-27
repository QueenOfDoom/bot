import { Command } from './command';
import { PingCommand } from './ping.command';
import { HelpCommand } from './help.command';
import { DefaultCommand } from '@/commands/default.command';

const defaultCommand = new DefaultCommand();

const commands: Command[] = [
    defaultCommand,
    new PingCommand(),
];

// Needs to happen after `commands`
// initialization to register existing
// commands!
commands.push(new HelpCommand());

export {
    commands,
    defaultCommand,
    PingCommand,
    HelpCommand,
    DefaultCommand
}
