import { ClientEvents } from "discord.js";
import { IEventHandler } from "./event-handler.interface";
import { ReadyHandler } from "./ready.handler";

const handlers: IEventHandler<keyof ClientEvents>[] = [
    new ReadyHandler()
]

export {
    handlers,
    ReadyHandler
}