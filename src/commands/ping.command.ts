import { Message } from 'discord.js';
import { ConcreteTrigger, Command, TriggerCriteria } from './command';
import { PermissionsLevel } from '@/services/permissions.service';

export class PingCommand extends Command {
    name = 'ping';
    description = 'A simple debug command!';
    syntax = '`ping`';
    requiredPerms = PermissionsLevel.EVERYONE;

    triggerCriteria: TriggerCriteria[] = [
        this.name
    ];

    validate = () => true;
    public execute(message: Message, trigger: ConcreteTrigger) {
        if(trigger.activations[0].text === 'ping') {
            message.channel.send('Pong!');
        } else if(trigger.activations[0].text === 'sudo>ping') {
            message.channel.send('Super Pong! (sudo demo)');
        }
    }
}
