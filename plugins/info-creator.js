import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; CeliaChan\nNICKNAME: CeliaChan\nORG: CeliaChan\nTITLE:\nitem1.TEL;waid=6285771724948:+62 857 7172 4948\nitem1.X-ABLabel: 6285771724948\nitem2.URL:https://instagram.com\nitem2.EMAIL;type=INTERNET: celiaachan091@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;CELIACHAN© Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku, Jangan Macam~Macam Ya`)
}
if (command == 'creator') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; VynaChan\nNICKNAME: VynaChan\nORG: VynaChan\nTITLE:\nitem1.TEL;waid=6282389924037:+62 823 8992 4037\nitem1.X-ABLabel: 6285771724948\nitem2.URL:https://instagram.com\nitem2.EMAIL;type=INTERNET: celiaachan091@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;CELIACHAN© Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hai Kak Itu Nomor Developerku Yang Memprogram Aku, Mohon Jangan Di Spam Ya >,<`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler