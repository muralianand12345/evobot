const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "connect",
    aliases: ["c"],
    description: i18n.__("Connects to the voice channel"),
    async execute(message) {
        const channel = message.member.voice.channel;
        if (!channel)
            return message.channel.send(
                "You must Join a voice channel before using this command!"
            );

        if (!channel.permissionsFor(message.client.user).has("CONNECT"))
            return error("I don't have permission to join the voice channel");

        if (!channel.permissionsFor(message.client.user).has("SPEAK"))
            return error("I don't have permission to speak in the voice channel");

        await channel.join();

        return message.channel.send(
            new MessageEmbed()
            .setDescription("**Joined the voice channel :white_check_mark: **")
            .setColor("BLUE")
        );
    }
};