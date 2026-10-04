import logging
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Ganti dengan API Token dari BotFather
TOKEN = "8506811469:AAH3ufnuh8avrwQiK94MBk-vr7BSjn5jhKo"

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Mengambil parameter dari link t.me/BotKamu?start=PARAMETER
    args = context.args

    if args:
        payload = args[0]  # Parameter setelah ?start=
        
        # Contoh 1: Jika link menyertakan parameter 'foto1'
        if payload == "foto1":
            await update.message.reply_photo(
                photo="https://picsum.photos/600/400",  # URL foto atau path file lokal
                caption="Berikut adalah foto yang Anda minta!"
            )
        
        # Contoh 2: Jika link menyertakan parameter 'file_modul'
        elif payload == "file_modul":
            # Ganti dengan path file lokal kamu atau URL file
            await update.message.reply_document(
                document="https://www.w3.org/W3C/DesignIssues/diagrams/sw-horiz-banner.pdf",
                filename="Modul_Pembelajaran.pdf",
                caption="Berikut adalah file dokumen Anda."
            )
        
        else:
            await update.message.reply_text("Kode file tidak ditemukan atau tidak valid.")
    else:
        # Balasan default jika user hanya mengetik /start tanpa link khusus
        await update.message.reply_text(
            "Halo! Selamat datang di Bot Automatic File Sender.\n"
            "Klik link khusus untuk mendapatkan foto atau file."
        )

if __name__ == "__main__":
    app = ApplicationBuilder().token(TOKEN).build()

    # Mendaftarkan handler untuk command /start
    app.add_handler(CommandHandler("start", start))

    print("Bot sedang berjalan...")
    app.run_polling()