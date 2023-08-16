const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: process.env.token,
  prefix: "{ Bot Prefixi Gelcek Buraya }",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})
//Etkinlikler
bot.onMessage()

//Main Kısmı Örnek Kod (ping)
bot.command({
  name: "ping",
  code: `
  Pong! $pingms 🏓
  `
});

//Aktif Tetikleyici
bot.readyCommand({
  channel: "",
  code: `
  $log[Giriş Yapıldı: $userTag[$clientID]]
  `
});

// Komut Yükleyici
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './Commands/', false)
