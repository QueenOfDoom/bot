import * as dayjs from 'dayjs';

type LogType = 'log' | 'trace' | 'info' | 'warn' | 'error' | string;

class LoggerService {
    async log(type: LogType, message: unknown): Promise<void> {
        console.log(this.prefix(type) + message);
    }

    info(message: string): void {
        this.log('info', message);
    }

    warn(message: string): void {
        this.log('warn', message);
    }

    error(message: string | Error): void {
        this.log('error', message);
    }

    private prefix(type: LogType): string {
        return `[${type.toUpperCase()} @ ${dayjs().format('HH:mm:ss')}] `;
    }
}

export const Logger = new LoggerService();