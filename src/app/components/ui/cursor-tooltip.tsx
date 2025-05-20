'use client'

import { useCursorStore } from '../../store/cursorTooltipStore'
import { useEffect, useRef } from 'react'

export default function CursorTooltip() {
  const { variant, label } = useCursorStore()
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let requestId: number

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cancelAnimationFrame(requestId)
      requestId = requestAnimationFrame(() => {
        cursorRef.current!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      })
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(requestId)
    }
  }, [])

  const variantStyles = {
    default: 'w-2 h-2 text-white dark:text-black bg-black dark:bg-white',
    label: 'w-24 h-24 text-white dark:text-black bg-black dark:bg-white',
    invisible: 'w-8 h-8 bg-transparent',
    zoom: 'w-20 h-20 bg-yellow-400 text-black',
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none select-none z-[9999] rounded-full hidden lg:flex items-center justify-center text-sm font-semibold transition-all duration-150 ease-out ${
        variantStyles[variant]
      }`}
      style={{ willChange: 'transform' }}
    >
      {label}
    </div>
  )
}
