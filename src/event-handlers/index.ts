import { ClientEvents } from 'discord.js';
import { IEventHandler } from './event-handler.interface';
import { ReadyHandler } from './ready.handler';
import { MessageHandler } from './message.handler';
import { MessageReactionHandler } from './message.reaction.handler';

const handlers: IEventHandler<keyof ClientEvents>[] = [
    new ReadyHandler(),
    new MessageHandler(),
    new MessageReactionHandler()
];

export { handlers, ReadyHandler, MessageHandler, MessageReactionHandler };
