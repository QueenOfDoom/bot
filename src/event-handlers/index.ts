import { ClientEvents } from "discord.js";
import { IEventHandler } from "./event-handler.interface";
import { ReadyHandler } from "./ready.handler";
import { MessageHandler } from "./message.handler";

const handlers: IEventHandler<keyof ClientEvents>[] = [
    new ReadyHandler(),
    new MessageHandler()
]

export {
    handlers,
    ReadyHandler
}
