/* chatsurf-mod@1.0.1 */

const config = require("./chatsurf-fs").loadConfig(__filename);
const prefix = "/";

if (!config.get("roles")) {
  config.set("roles", {});
}

function onConnect(socket) {
  const role = config.get("roles")[socket.sessionID];
  socket.role = role;

  if (role === "admin") {
    socket.badge = "workspace_premium";
  } else if (role === "mod") {
    socket.badge = "shield";
  }
}

async function onMessage(message) {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (args.length === 0 && command === "mod") {
    message.cancel();
    message.reply("No arguments supplied!");
    return;
  }

  if (command === "mod") {
    message.cancel();

    if (message.author.role === "admin") {
      var target;
      try {
        target = await message.to(args[0]).socket();
      } catch (err) {
        if (err.message === "user not found") {
          message.reply("User not found!");
          return;
        }
      }

      if (message.author.username === target.username) {
        message.reply("Can't give yourself mod!");
      } else if (target.role === "admin") {
        message.reply("User has admin!");
      } else {
        config.set(`roles.${target.sessionID}`, "mod");
        message.reply(`${target.username} now has mod`);
      }
    } else {
      message.reply("You can't do that!");
    }
  } else if (command == "unmod") {
    message.cancel();

    if (message.author.role === "admin") {
      var target;
      try {
        target = await message.to(args[0]).socket();
      } catch (err) {
        if (err.message === "user not found") {
          message.reply("User not found!");
          return;
        }
      }

      if (message.author.username === target.username) {
        message.reply("Can't remove mod from yourself!");
      } else if (target.role === "admin") {
        message.reply("User has admin!");
      } else {
        config.set(`roles.${target.sessionID}`, undefined);
        message.reply(`${target.username} now does not have mod`);
      }
    } else {
      message.reply("You can't do that!");
    }
  }
}

module.exports = { onConnect, onMessage };
