import {ClientEvents} from 'discord.js';

export interface IEventHandler<EventName extends keyof ClientEvents> {
    readonly EVENT_NAME: EventName;

    onEvent(...args: ClientEvents[EventName]): void;
}