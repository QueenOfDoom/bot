import { Message } from "discord.js";
import { IEventHandler } from "./event-handler.interface";
import { ICommand } from '@/commands/command.interface';
import {config} from '@/services/config.service';
import {commands} from '@/commands';
import { RateLimitService } from "@/services/rate-limit.service";

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
        
        // Command Found
        if(commands[command] !== undefined) {
            commands[command].run(message.client, message, args);
        }

    }
}
