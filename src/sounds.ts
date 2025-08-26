import { Howl } from 'howler'

let dialPlayed = false
let click: Howl | null = null
let dialup: Howl | null = null
let midiLoop: Howl | null = null

// 200 ms de silencio válido (WAV - PCM) codificado en base64
const SILENCE_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA='

function ensureClick() {
  if (!click) {
    try { click = new Howl({ src: [SILENCE_WAV], volume: 0.2 }) } catch { click = null }
  }
}
function ensureDial() {
  if (!dialup) {
    try { dialup = new Howl({ src: [SILENCE_WAV], volume: 0.4 }) } catch { dialup = null }
  }
}
function ensureMidi() {
  if (!midiLoop) {
    try { midiLoop = new Howl({ src: [SILENCE_WAV], loop: true, volume: 0.15 }) } catch { midiLoop = null }
  }
}

export function startDialupIfNeeded() {
  if (dialPlayed) return
  dialPlayed = true
  ensureDial()
  try { dialup?.play() } catch {}
}

export function playClick() {
  ensureClick()
  try { click?.play() } catch {}
}

export function toggleMidiLoop() {
  ensureMidi()
  try { midiLoop && (midiLoop.playing() ? midiLoop.stop() : midiLoop.play()) } catch {}
}


