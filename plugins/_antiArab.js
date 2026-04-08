let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner} ) {
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  
  if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
    let forbidPrefixes = ["27", "1"]

    for (let prefix of forbidPrefixes) {
      if (m.sender.startsWith(prefix)) {
        m.reply('🚩 tlaaaaaaaaaaa7 nta maxi m4ribi.', m.sender)
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        return false
      }
    }
  }
  
  return true
}

export default handler