import Window from './Window'
import { useEffect } from 'react'
import { playClick } from '../sounds'

const MESSAGES = [
  '¡Ganaste un iPod Nano! Haz clic para reclamar.',
  'Descarga tonos para tu Nokia 3310 ahora',
  'Eres el visitante 1,000,000. ¡Reclama tu premio!',
  'Mejora tu conexión: 1024 Kbps UltraSpeed',
]

export default function PopupAd({ onClose, zIndex, onFocus }:{ onClose: () => void, zIndex: number, onFocus?: () => void }) {
  useEffect(() => { playClick() }, [])
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  return (
    <Window title="Advertencia del sistema" width={280} height={160} onClose={onClose} zIndex={zIndex} onFocus={onFocus}>
      <div className="text-sm">
        <p className="mb-2">{message}</p>
        <div className="flex gap-2 justify-end">
          <button className="retro-btn" onClick={onClose}>OK</button>
          <button className="retro-btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </Window>
  )
}


