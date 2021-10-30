const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "disconnect",
    aliases: ["dc"],
    description: i18n.__("Diconnects from the voice channel"),
    async execute(message) {
        const channel = message.member.voice.channel;
        if (!channel)
            return message.channel.send(
                "You must Join a voice channel before using this command!"
            );

        await channel.leave();

        return message.channel.send(
            new MessageEmbed()
            .setDescription("**Left the voice channel :white_check_mark: **")
            .setColor("BLUE")
        )
    }
};