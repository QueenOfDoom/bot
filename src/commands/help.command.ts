import { Message, MessageEmbed } from 'discord.js';
import { commands } from '@/commands';
import { ConcreteTrigger, Command, TriggerCriteria } from './command';
import { PermissionsLevel } from '@/services/permissions.service';

export class HelpCommand extends Command {
    name = 'help';
    description = 'The help command!';
    syntax = '`help [args]`\n' +
    '**List of (Double Dash) Args:**\n' +
    '`reload` - *Reloads the Help Message*\n' +
    '`help` / `?` - *Shows this Message*';
    requiredPerms = PermissionsLevel.EVERYONE;
    triggerCriteria: TriggerCriteria[] = [ this.name ];
    validate = () => true;
    helpEmbed = new MessageEmbed();

    constructor() {
        super();
        this.subCommands.push({
            name: 'reload',
            description: 'SubCommand: Reload',
            syntax: '-',
            triggerCriteria: [ '--reload' ],
            subCommands: [],
            requiredPerms: PermissionsLevel.USER,
            validate: (message: Message, trigger: ConcreteTrigger) => true,
            execute: (message: Message, trigger: ConcreteTrigger) => { 
                this.reload();
                message.channel.send('Help Message reloaded!');
            },
            checkTriggers: this.checkTriggers
        });
        this.reload();
    }

    public reload() {
        this.helpEmbed = new MessageEmbed()
            .setColor('#00ff99')
            .setTitle('Help');

        let cmds: Command[] = [];
        let cmdHelp: string = "";
        let evts: Command[] = [];
        let evtHelp: string = "";

        commands.forEach(command => {
            if(command.triggerCriteria.length < 1) return;

            if(typeof command.triggerCriteria[0] === 'string') {
                cmds.push(command);
            } else if(typeof command.triggerCriteria[0] === 'function' || 
                command.triggerCriteria[0] instanceof RegExp) {
                evts.push(command);
            }
        });
        
        cmds.forEach(cmd => {
            cmdHelp += `${cmd.name}: ${cmd.description}\n`;
        });
        evts.forEach(evt => {
            evtHelp += `${evt.name}: ${evt.description}\n`;
        });
        
        if(cmds.length > 0) this.helpEmbed.addField('Commands', cmdHelp);
        if(evts.length > 0) this.helpEmbed.addField('Events', evtHelp);

    }

    public execute(message: Message, trigger: ConcreteTrigger) {        
        if(trigger.type === 'string') {
            this.helpEmbed.setTimestamp();
            message.channel.send(this.helpEmbed);
        }
    }
}
