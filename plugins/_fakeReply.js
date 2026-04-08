import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()

  const canales = [
    {
      id: "120363405848897016@newsletter",
      nombre: "✰ SENKU BOT ダーク",
    },
    {
      id: "120363405848897016@newsletter",
      nombre: "✰ SENKU BOT ダーク",
    },
  ]

  const canalSeleccionado = canales[Math.floor(Math.random() * canales.length)]

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: canalSeleccionado.id,
        serverMessageId: 100,
        newsletterName: canalSeleccionado.nombre,
      },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: "https://qu.ax/enQcW.png",
                    thumbnail: "https://qu.ax/enQcW.png",
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}