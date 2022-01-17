const Discord = require("discord.js");
const conf = require("../../configs/sunucuayar.json");
const { Jail } = require("../../configs/emojis.json")

module.exports = {
  conf: {
    aliases: [],
    name: "cezabutton",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`${Jail} Aşağıda ki düğmelerden ceza listenizi, ceza puanını ve aktif cezanızın kalan süresini görüntüleyebilirsiniz.\n@here @everyone`,"components":[{"type":1,"components":[

        {"type":2,"style":2,"custom_id":"cezapuan","label":"Ceza Puanı","emoji": { "id": "907344820534652938"}},
        {"type":2,"style":3,"custom_id":"cezalarım","label":"Cezalarım","emoji": { "id": "907344844739997696"}},
        {"type":2,"style":4,"custom_id":"kalanzaman","label":"Kalan Zamanım?","emoji": { "id": "907344854101655632"}}

        ]}]} })
  },
};

  
