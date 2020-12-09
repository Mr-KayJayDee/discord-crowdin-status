# A discord bot allowing you to see the status of your crowdin translations


### You really don't like editing the status message you sent with the translations informations every day ? This bot is for you !!

# Features

- Message updating with the new informations every X times.
- Language name
- Language code
- Translated progress
- Approved progress
- Sentences count
- Sentences translated
- Sentences approved
- Words count
- Words translated
- Words approved

# Configuration

> Rename the ``config.json.example`` file to ``config.json``.

> Rename the ``.env.example`` file to ``.env``.

### Token 

Replace ``YOUR_DISCORD_BOT_TOKEN_GOES_HERE`` by your discord bot token in the .env file.

### Project Name

Replace ``YOUR_PROJECT_NAME`` by your crowdin project name in the .env file.

### Login

Replace ``YOUR_USERNAME`` by your crowdin username in the .env file.

### Account Key

Replace ``YOUR_ACCOUNT_API_KEY`` by your crowdin account key in the .env file. (know how to get this key <a href="https://support.crowdin.com/account-settings/#api">here.</a>

### Status Channel

Put your channel id in the ``channel`` key in the config.json file.

### Edit Time

Put the time you want the bot to check and update with new data. (In millisecond) in the ``editTime`` key in the config.json file.

### Purge On Restart

Wether you want the bot to purge the status channel on start or not. Put ``true`` or ``false`` in the ``purgeOnRestart`` key in config.json file.

### Purge Amount

Put the amount of messages you want the bot to purge on restart in the ``purgeAmount`` key in the config.json file.

### Display Link

Wether you want to display the crowdin project link or not. Put ``true`` or ``false`` in the ``displayLink`` key in the config.json file.

### Project Link 

Put the link of your crowdin project (if public) in the ``projectLink`` key in the config.json file.

# TO DO

- Ability to see specific language status using a command

# Bugs and glitches

Feel free to report all bugs and glitches by creating an issue in the <a href="https://github.com/Mr-KayJayDee/discord-crowdin-status/issues">issue section.</a>

A correct and understandable issue contains : 
- Steps to reproduce 
- *Code that summonned the error (optional)*
- The complete error

You can also join me on my <a href="https://discord.gg/Uqd2sQP">discord server.</a>

<a href="https://discord.gg/Uqd2sQP"><img src="https://discord.com/api/guilds/527836578912010251/widget.png" alt="Amandine support server"/></a>