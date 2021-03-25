import { Logger } from '@/services/logger.service';
import { IEventHandler } from './event-handler.interface';

export class ReadyHandler implements IEventHandler<ReadyHandler['EVENT_NAME']> {
    public readonly EVENT_NAME = 'ready';

    public onEvent() {
        Logger.info('Connected.');
    }
}
