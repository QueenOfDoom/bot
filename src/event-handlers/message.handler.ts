import { Message } from 'discord.js';
import { IEventHandler } from './event-handler.interface';
import {config} from '@/services/config.service';
import { commands, defaultCommand } from '@/commands';
import { RateLimitService } from '@/services/rate-limit.service';
import { ICommand, Trigger } from '@/commands/command.interface';

export class MessageHandler implements IEventHandler<MessageHandler['EVENT_NAME']> {
    public readonly EVENT_NAME = 'message';

    private readonly commandRateLimiter = new RateLimitService();

    public onEvent(message: Message): void {
        if (message.author.bot) return;
        if (message.content.indexOf(config.botConfig.prefix)) return;

        const args = message.content.slice(config.botConfig.prefix.length).split(/ +/g);
        const command: string = args.shift()?.toLowerCase() || 'default';

        // TODO: add check for moderation commands -- should bypass rate limit
        if (this.commandRateLimiter.shouldReject(message.author))
            return void message.channel.send('You are sending too many messages!');

        const toExecute: ICommand = commands.find((cmd: ICommand) => {
            cmd.triggers.some((t: Trigger) => {
                if (typeof t === 'function')
                    return t(message, command, args);
                if (t instanceof RegExp)
                    return t.test(message.content);
                return command === t;
            });
        }) || defaultCommand;

        toExecute.execute(message, command, args);
    }
}
