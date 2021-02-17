import * as Cache from 'node-cache';
import {User} from 'discord.js';

export class RateLimitService {
    private cache = new Cache();
    private readonly TTL = 3;
    private readonly MAX_MESSAGES = 3;

    public shouldReject({id}: User): boolean {
        const count = this.cache.get<number>(id) || 0;
        if (count > this.MAX_MESSAGES)
            return true;
        
        this.cache.set(id, count + 1, this.TTL);
        return false;
    }
}