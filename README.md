# DevBot - Development Dashboard
DevBot (name - W.I.P.) is a [Discord Bot](https://discord.com/developers/docs/intro#bots-and-apps), which will help in
moderation, entertainment and serve as a general purpose utility for the [Programmers Palace Discord Server](http://www.programmerspalace.com).
This bot is in active development! Stay tuned!

## Documentation
At the moment the bot contains out of 3 main parts - `commands`, `event-handlers` and `services`. Commands are versatile
message hooks, which when triggered will execute a custom action. Event-Handlers are used to fetch and work with Discord
Events and Services are code snippets frequently used inside the bot, responsible for a part of it's functionality or
additional utility, which is either needed for function or convenience!

### Commands
All commands, which should be registered by the bot are added to a `commands` array inside of `commands/index.ts`!
A command consists out of:
- `name` - name of the command
- `description` - short command description
- `triggerCriteria` - criteria for the given command to trigger
- `requiredPerms` - Permissions required to execute the command
- `validate` - a function, which validates the parameters given to the command
- `execute` - a function, which describes the command action

An example - template command is the ping command - it has very limited functionality and was intended to serve as a
template for other more complex commands. Looking at it - you can grasp how a command is implemented and then add your
own custom command, by creating a corresponding file and adding it to the command-index.

### Event Handlers
The event-handlers we got - are also registered by the bot through a corresponding `index` file! Those handlers are
designated for the fitting discord events - e.g. the `message.handler.ts` is responsible for Discord's `message` event!
An Event is quite simply structured - it has only a name and an onEvent method, which takes a varargs input and reacts
on that event. A more or less simple example for such an event-handler, would be the `ready.handler`! It reacts on the
simple `ready` event - sent by the Discord API and reacts with a `logger.info` call! For a more complex example one can
regard the `message.handler` handler!

### Services
These are code snippets or simply 'globally' utilized code parts, which for that reason got extracted into their own
service files - for example the Config Service handles all the Bot Configuration, starting from initial setup with
prefix and token, ending with the Discord Rich Presence Setup. A Service, doesn't have a clear structure - but a clear
topic and purpose. The name describes the topic and the purpose is to serve global utility methods across the application!

## Collaborators
For completeness sake I decided to include a small list of collaborators, to give them proper credit for their
work for this epic project!
- [D. Kanter](https://github.com/dkantereivin) - the founder and lead dev of both - server and this project
- [Wesam Jabali](https://github.com/wesamjabali) - a great software developer and founder and admin of another CompSci Discord Server
- [Doomer](https://github.com/QueenOfDoom/) - another contributor to the project
