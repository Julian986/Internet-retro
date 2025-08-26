import { useEffect, useState } from 'react'
import Browser from './Browser'
import PopupAd from './PopupAd'
import { playClick, startDialupIfNeeded } from '../sounds'

type Icon = {
  id: string
  title: string
  page: 'yahoo' | 'blockbuster' | 'geocities'
  emoji: string
}

const ICONS: Icon[] = [
  { id: 'comp', title: 'My Computer', page: 'yahoo', emoji: '💻' },
  { id: 'net', title: 'My Network Places', page: 'yahoo', emoji: '🧭' },
  { id: 'outlook', title: 'Outlook Express', page: 'yahoo', emoji: '📧' },
  { id: 'yahoo', title: 'Yahoo!', page: 'yahoo', emoji: '🟣' },
  { id: 'block', title: 'Blockbuster', page: 'blockbuster', emoji: '🎬' },
  { id: 'napster', title: 'MP3 Napster', page: 'geocities', emoji: '🎵' },
  { id: 'poke', title: 'Pokemon Fanpage', page: 'geocities', emoji: '🔴' },
]

type WindowItem = { id: string; z: number; kind: 'browser' | 'popup'; page?: Icon['page'] }

export default function Desktop() {
  const [windows, setWindows] = useState<WindowItem[]>([])
  const [zTop, setZTop] = useState(10)

  useEffect(() => { startDialupIfNeeded() }, [])

  function bringToFront(id: string) {
    setZTop(zTop + 1)
    setWindows(ws => ws.map(w => w.id === id ? { ...w, z: zTop + 1 } : w))
  }

  function openBrowser(page: Icon['page']) {
    playClick()
    const id = 'win-' + Math.random().toString(36).slice(2)
    setWindows(ws => ws.concat({ id, z: zTop + 1, kind: 'browser', page }))
    setZTop(zTop + 1)
    // chance to spawn a popup
    if (Math.random() < 0.4) {
      const pid = 'pop-' + Math.random().toString(36).slice(2)
      setWindows(ws => ws.concat({ id: pid, z: zTop + 2, kind: 'popup' }))
      setZTop(zTop + 2)
    }
  }

  function closeWindow(id: string) {
    setWindows(ws => ws.filter(w => w.id !== id))
  }

  return (
    <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(45deg,#2a74a4,#1b5e91)', backgroundSize: 'cover', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: 16,
          width: 96,
        }}
      >
        {ICONS.map(icon => (
          <button key={icon.id} className="desktop-icon" onDoubleClick={() => openBrowser(icon.page)} onClick={playClick}>
            <div style={{ fontSize: 28, lineHeight: '28px' }}>{icon.emoji}</div>
            <div className="text-center text-xs">{icon.title}</div>
          </button>
        ))}
      </div>

      {windows.map(w => w.kind === 'browser' ? (
        <Browser key={w.id} page={w.page!} zIndex={w.z} onClose={() => closeWindow(w.id)} onFocus={() => bringToFront(w.id)} />
      ) : (
        <PopupAd key={w.id} zIndex={w.z} onClose={() => closeWindow(w.id)} onFocus={() => bringToFront(w.id)} />
      ))}
    </div>
  )
}


