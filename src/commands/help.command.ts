import { Message, MessageEmbed } from 'discord.js';
import { commands } from '@/commands';
import { ConcreteTrigger, Command, TriggerCriteria } from './command';
import { PermissionsLevel } from '@/services/permissions.service';

export class HelpCommand extends Command {
    name = 'help';
    description = 'The help command!';
    syntax = '`help`';
    requiredPerms = PermissionsLevel.EVERYONE;
    triggerCriteria: TriggerCriteria[] = [ this.name ];
    validate = () => true;
    helpEmbed = new MessageEmbed();

    constructor() {
        super();
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
            // Default Command
            if(trigger.args.length < 1) {
                this.helpEmbed.setTimestamp();
                message.channel.send(this.helpEmbed);
            } else if(trigger.args[0] === 'reload') { // Reload Sub-Command
                // Elevated User required? Maybe not
                this.reload();
                message.channel.send('Help Message reloaded!');
            } else if(trigger.args[0] === '?' || trigger.args[0] === 'help') { // Help Sub-Command
                message.channel.send("**Syntax (" + this.name + "):**\n" +
                    "`help [args]`\n" +
                    "**List of Args:**\n" +
                    "`reload` - *Reloads the Help Message*\n" +
                    "`help` / `?` - *Shows this Message*"
                );
            }
        }
    }
}
