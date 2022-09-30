let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;A7 Rafli⸙;;;\nFN:A7 Rafli⸙\nORG:A7 Rafli⸙\nTITLE:\nitem1.TEL;waid=6283854551575:+62 838-5455-1575\nitem1.X-ABLabel:A7 Rafli⸙\nX-WA-BIZ-DESCRIPTION:${htjava} Tidak Menerima Save Kontak!!\nX-WA-BIZ-NAME:A7 Rafli⸙\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`╳ ── ◸ *My Owner* ◹ ── ╳
⟣⟮ *${nameown1}* ⟯⟢
⟬ @${nomorown1.split`@`[0]} ⟭
┆
⟣⟮ *${nameown2}* ⟯⟢
⟬ @${nomorown2.split`@`[0]} ⟭
┆`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `┆⫹⫺ 💌 Nama : A7 RAFLI 
┆⫹⫺ ✉️ Nama Real : M.Rafli Setiawan 
┆⫹⫺ ♂️ Gender : Pria
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal Lahir : 14 - 07 - 2006
┆⫹⫺ 🎨 Umur : 16
┆⫹⫺ 🧮 Kelas : 11 SMA
┆⫹⫺ ❤️Pacar : Gak Punya🙂
┆⫹⫺ 🧩 Hobby : Recode Sc, Ngedit, Turu, Nonton Nekopoi
┆⫹⫺ 💬 Sifat : Asik, Baik, Ramah, Friendly 
┆⫹⫺ 🗺️ Tinggal : Mekarjaya, Kabandungan, Sukabumi, Jawa Barat, Indonesia 
└––––––––––––·•
`
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `┆⫹⫺ 💌 Nama : Hu Tao Bot-MD 
┆⫹⫺ ✉️ Nama Real : Bot WhatsApp 
┆⫹⫺ ♂️ Gender : Wanita
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal Lahir : 12 - 05 - 2020
┆⫹⫺ 🎨 Umur : (Private)
┆⫹⫺ 🧮 Kelas : (Private)
┆⫹⫺ ❤️ Pacar : Milik Owner 
┆⫹⫺ 🧩 Hobby : (Sama Kayak Ownernya)
┆⫹⫺ 💬 Sifat : (Sama Kayak Ownernya)
┆⫹⫺ 🗺️ Tinggal : Mekarjaya, Kabandungan, Sukabumi, Jawa Barat, Indonesia 
└––––––––––––·•
`

  let tek = `⟣⟞⟚⟝ 〨⎣ *Note* ⎤〨 ⟞⟚⟝⟢
┆
𐚀 Owner Tidak Merespon Chat Yang Aneh
𐚀 Owmer Berhak  Block Siapa Saja
𐚀 Gak Respon Kalo Toxic 
𐚀 Etika Sama Adabnya Di Pake
𐚀 Spam Bot Gua, Besok Lu Turu Di Dalem Tanah
𐚀 Chat Aneh Gak Jelas Ban/Block 
𐚀 Call Bot Block\n⫹ Ketik *.rules* Untuk Melihat Rules Selengkapnya ⫺`
const sections = 
[{
title: `⫹⫺ Other ⫹⫺`,
rows: [
{title: "⸙ Kontak", rowId: ".owner kontak"},
{title: "⸙ Nomor", rowId: ".owner nomor"},
{title: "⸙ Biodata Aldi", rowId: ".owner bio"},
{title: "⸙ Biodata Aisyah", rowId: ".owner bio2"},
{title: "⸙ Script", rowId: ".sc"},
]}, {
title: `⫹⫺ Support Me ⫹⫺`,
rows: [
{title: "〠 Donasi", rowId: ".owner nomor"},
{title: "〠 Sewa", rowId: ".sewa"},
{title: "〠 Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Cʟɪᴄᴋ",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nItu Owner Ku⫺⫰⫹\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://vt.tiktok.com/ZSeABMWuN',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, '┍┈༺ *𝙱𝚒𝚘𝙳𝚊𝚝𝚊 𝙰𝚕𝚍𝚒* ༻', teksbio, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, '┍┈༺ *𝙱𝚒𝚘𝙳𝚊𝚝𝚊 𝙰𝚒𝚜𝚢𝚊𝚑* ༻', teksbio2, ppown2, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
