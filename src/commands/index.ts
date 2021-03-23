import { ICommand } from './command.interface';
import { PingCommand } from './ping.command';

let commands: any = {};

function registerCommand(command: ICommand) {
    commands[command.name] = command;
    command.aliases?.forEach(alias => {
        commands[alias] = command;
    });
}

// Command Registry
registerCommand(new PingCommand());

export {
    commands,
    PingCommand
}
