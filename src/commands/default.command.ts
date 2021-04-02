import { ConcreteTrigger, Command, TriggerCriteria } from '@/commands/command';
import { PermissionsLevel } from '@/services/permissions.service';
import { defaultCommand } from '@/commands/index';

export class DefaultCommand extends Command {
    name = 'default';
    description = 'The default "command" executed when no commands are matched.';
    syntax = ''; // No Syntax - since default behaviour
    requiredPerms = PermissionsLevel.EVERYONE;
    triggerCriteria: TriggerCriteria[] = [];

    validate = () => true;
    execute(): void {
        return;
    }

}

export const NullTrigger: ConcreteTrigger = {
    type: 'string',
    command: defaultCommand,
    args: [],
    criteria: 'null',
    args: [],
    activations: []
}
