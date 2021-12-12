const prefix = "/";

function onMessage(message) {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (args.length === 0 && command === "msg") {
    message.cancel();
    message.reply("No arguments supplied!");
    return;
  }

  if (command === "msg") {
    message.cancel();

    const to = args.shift().toLowerCase();

    if (!to) {
      message.reply("To argument invalid!");
    } else if (to === message.author.username.toLowerCase()) {
      message.reply("You can't send messages to yourself!");
    } else {
      message
        .to(to)
        .send(`**From ${message.author.username}:** ${args.join(" ")}`)
        .then(() => {
          message.reply(`**To ${to}:** ${args.join(" ")}`);
        })
        .catch(err => {
          if (err.message === "user not found")
            message.reply("User not found!");
        });
    }
  }
}

module.exports = { onMessage };
