import { Message } from 'discord.js';
import { ICommand, Trigger } from '@/commands/command.interface';
import { PermissionsLevel } from '@/services/permissions.service';

export class DefaultCommand implements ICommand {
    public name = 'default';
    public description = 'The default "command" executed when no commands are matched.';
    public requiredPerms = PermissionsLevel.EVERYONE;
    public validate = () => true;

    public triggers: Trigger[] = [];

    public execute(message: Message, command: string, args: string[]): void {
        return;
    }

}
