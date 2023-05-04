import TelegramBot, { ChatId, Message } from "node-telegram-bot-api";
import { MessageText } from "./enums/massege.text.enum";
import { Keyboard, Back, Get, MainKeyboard } from "./keybords/bot_keyboard";
import { Texts } from "./enums/texts.enum";


const bot = new TelegramBot(process.env.BOT_API_TOKEN as string, {
  polling: true,
});

bot.on("message", async (message: Message) => {
  const chatId: ChatId = message.chat.id;
  const text: string | undefined = message.text;

  if (text === MessageText.Start) {
    return bot.sendMessage(chatId, Texts.StartText, {
      parse_mode: "HTML",
      reply_markup: MainKeyboard,
    });
  }

  if(text === MessageText.To_Bot){
    return bot.sendMessage(
      chatId,
      '<a href="https://t.me/+1IrFbOytnZ9mZGIy">❗️❗️❗️❗️❗️❗️❗️❗️❗️\n\n📝Qo`llanma</a> 👈👈👈bosing',
      {
        parse_mode: "HTML",
        reply_markup: Keyboard,
      }
)}

if(text === MessageText.Tg_Users){
  return bot.sendMessage(chatId, Texts.Tg_Users,{
    parse_mode: "HTML",
    reply_markup: Back,
  })
}

if(text === MessageText.Manual2){
  return bot.sendMessage(chatId, Texts.Manual2,{
    parse_mode: "HTML",
    reply_markup: Back,
  })
}


  if (text === MessageText.Get) {
    return bot.sendMessage(chatId, Texts.NumberGet, {
      parse_mode: "HTML",
      reply_markup: Get,
    });
  }

  if (text === MessageText.Back) {
    return bot.sendMessage(chatId, "⬅️Orqaga", {
      parse_mode: "HTML",
      reply_markup: MainKeyboard,
    });
  }


  if (text === MessageText.Manual) {
    return bot.sendMessage(
      chatId,
      '<a href="https://t.me/+1IrFbOytnZ9mZGIy">📝Qo`llanma</a> 👈👈👈bosing',
      {
        parse_mode: "HTML",
        reply_markup: Back,
      }
    );
  }

  if (text === MessageText.Help) {
    return bot.sendMessage(
      chatId,
      'Agar bot da muamollar bo`lsa <a href="https://t.me/frilans_sh">admin</a> ga murojat qiling❗️❗️❗️',
      {
        parse_mode: "HTML",
        reply_markup: Back,
      }
    );
  }
});
