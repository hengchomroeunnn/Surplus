const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = '8142205986:AAF-k1wZouK5OB8nTgR74YAi-NWIWdv0QPA';

// Create a bot using polling
const bot = new TelegramBot(token, { polling: true });


// Handle '/start' command to send the welcome message with a Web App button
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Inline keyboard with a Web App button
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Order Food', // Button text
                        web_app: {
                            url: 'https://surplus-two.vercel.app', // Replace with your mini app URL
                        },      
                    },
                ],
            ],
        },
    };

    // Send the welcome message with the Web App button
    bot.sendMessage(
        chatId,
        "Let's get started 🥯\n\nTap the button below to order your perfect breads!",
        options
    );
});

// Handle callback queries when a button is clicked
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'order_food') {
        // Handle 'Order Food' button click
        bot.sendMessage(chatId, 'Great! Please let me know what you want to order. 🥖🍞');
    }
});