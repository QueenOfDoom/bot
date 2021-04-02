import { Message } from 'discord.js';
import { Command, TriggerCriteria } from './command';
import { PermissionsLevel } from '@/services/permissions.service';
import { PingCommand } from '.';

export class SudoCommand extends Command {
    name = 'sudo';
    description = 'Execute a command with super user privileges!';
    syntax = '`sudo`';
    requiredPerms = PermissionsLevel.ADMIN;

    triggerCriteria: TriggerCriteria[] = [
        this.name
    ];

    constructor() {
        super();
        this.subCommands.push(new PingCommand());
    }

    validate = () => true;
    public execute(message: Message) {
        message.reply('Please provide a command, which requires super user privileges!');
    }
}
