import { Rnd } from 'react-rnd'
import type { ReactNode } from 'react'
import { useMemo } from 'react'

export type WindowProps = {
  title: string
  width?: number
  height?: number
  x?: number
  y?: number
  zIndex?: number
  onClose?: () => void
  children: ReactNode
  onFocus?: () => void
  resizable?: boolean
}

export default function Window({
  title,
  width = 520,
  height = 360,
  x,
  y,
  zIndex,
  onClose,
  children,
  onFocus,
  resizable = true,
}: WindowProps) {
  const defaultPos = useMemo(() => ({
    x: x ?? Math.floor(60 + Math.random() * 180),
    y: y ?? Math.floor(60 + Math.random() * 120),
  }), [x, y])

  return (
    <Rnd
      default={{ x: defaultPos.x, y: defaultPos.y, width, height }}
      bounds="window"
      onMouseDown={onFocus}
      style={{ zIndex }}
      enableResizing={resizable}
      className="retro-window"
    >
      <div className="retro-titlebar select-none">
        <div className="flex-1 font-bold text-sm">{title}</div>
        <div className="controls flex gap-1">
          <button aria-label="Minimize">_</button>
          <button aria-label="Maximize">▢</button>
          <button aria-label="Close" onClick={onClose}>×</button>
        </div>
      </div>
      <div className="h-full w-full overflow-auto p-2">
        {children}
      </div>
    </Rnd>
  )
}


