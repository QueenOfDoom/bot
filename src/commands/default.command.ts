import { Message } from 'discord.js';
import { ConcreteTrigger, Command, TriggerCriteria } from '@/commands/command';
import { PermissionsLevel } from '@/services/permissions.service';
import { defaultCommand } from '@/commands/index';

export class DefaultCommand extends Command {
    name = 'default';
    description = 'The default "command" executed when no commands are matched.';
    requiredPerms = PermissionsLevel.EVERYONE;
    triggerCriteria: TriggerCriteria[] = [];

    validate = () => true;
    execute(message: Message, trigger: ConcreteTrigger, args: string[]): void {
        return;
    }

}

export const NullTrigger: ConcreteTrigger = {
    type: 'string',
    command: defaultCommand,
    criteria: 'null',
    activations: []
}
