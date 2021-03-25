import { Message } from 'discord.js';
import { IEventHandler } from './event-handler.interface';
import { config } from '@/services/config.service';
import { commands } from '@/commands';
import { RateLimitService } from '@/services/rate-limit.service';
import { ICommand, Trigger } from '@/commands/command.interface';

export class MessageHandler implements IEventHandler<MessageHandler['EVENT_NAME']> {
    public readonly EVENT_NAME = 'message';

    private readonly commandRateLimiter = new RateLimitService();

    public onEvent(message: Message): void {
        if (message.author.bot) return;
        if (message.content.indexOf(config.botConfig.prefix)) return;

        const args = message.content
            .slice(config.botConfig.prefix.length)
            .split(/ +/g);
        const cmd: string = args.shift()?.toLowerCase() || 'default';

        // TODO: add check for moderation commands -- should bypass rate limit
        if (this.commandRateLimiter.shouldReject(message.author))
            return void message.channel.send(
                'You are sending too many messages!'
            );

        const commandToExecute: ICommand | undefined = commands.find((c: ICommand) => {
                return c.triggers.some((t: Trigger) => {
                    if (typeof t === 'function') return t(message, cmd, args);
                    if (t instanceof RegExp) return t.test(message.content);
                    return cmd === t;
                });
            }
        );

        if (commandToExecute) commandToExecute.execute(message, cmd, args);
        // else default behavior
    }
}
