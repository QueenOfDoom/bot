import { TextChannel, MessageReaction, User, MessageEmbed, Message } from 'discord.js';
import { IEventHandler } from './event-handler.interface';
import { client } from '@/app';

const confirmation: string[] = ['🟢', '🟩', '✔️', '☑️', '✅'];
const reviewServer: string = '767475855990456360';
const reviewChannel: string = '826013970778554369';
const tags: string[] = ['justask'];

export class MessageReactionHandler implements IEventHandler<MessageReactionHandler['EVENT_NAME']> {
    public readonly EVENT_NAME = 'messageReactionAdd';

    public onEvent(reaction: MessageReaction, user: User): void {
        let msg = reaction.message;
        if(!msg.guild) return;

        if(msg.channel.id === reviewChannel) {
            if(msg.embeds.length < 1) return;
            const embed = new MessageEmbed(msg.embeds[0]);
            embed.spliceFields(7, 1, { name: 'Status', value: ((confirmation.includes(reaction.emoji.toString())) ? 'Accepted' : 'Declined') })
            msg.edit(embed);
        } else {
            if(tags.includes(reaction.emoji.name)) {
                client.guilds.fetch(reviewServer)
                    .then(guild => {
                        let chan = <TextChannel> guild.channels.cache.find(channel => channel.id === reviewChannel);
                        const embed: MessageEmbed = new MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle(`Tagged: ${reaction.emoji.name}`)
                            .setThumbnail(reaction.emoji.url || 'https://www.pngitem.com/pimgs/m/75-757027_price-tag-vector-price-tag-clip-art-hd.png')
                            .addFields(
                                { name: 'Guild', value: `${msg.guild?.name}:${msg.guild?.id}` },
                                { name: 'Channel', value: `${(<TextChannel> msg.channel).name}:${msg.channel.id}` },
                                { name: 'Message ID', value: msg.id },
                                { name: 'Content', value: msg.content },
                                { name: 'Link', value: msg.url },
                                { name: 'Author', value: msg.author.tag },
                                { name: 'Flagger', value: reaction.users.cache.first()?.tag },
                                { name: 'Status', value: 'Pending (:green_circle: / :red_circle:)' }
                            );
    
                        chan.send(embed);
                    }).catch(console.error);
            }
        }
    }
}
