'use client'

import { useEffect, useRef, useState } from 'react'
import { PageTransition } from '@/components/ui-bits'
import { runCommand, bootLines, type Line } from '@/lib/terminal-commands'

const PROMPT = 'bunty@portfolio:~$'

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Boot sequence (typewriter, line by line)
  useEffect(() => {
    let cancelled = false
    let i = 0
    const reveal = () => {
      if (cancelled) return
      if (i < bootLines.length) {
        setLines((prev) => [...prev, { type: 'output', text: bootLines[i] }])
        i += 1
        setTimeout(reveal, 550)
      } else {
        setBooted(true)
      }
    }
    const start = setTimeout(reveal, 400)
    return () => {
      cancelled = true
      clearTimeout(start)
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const submit = (value: string) => {
    setLines((prev) => [
      ...prev,
      { type: 'input', text: `${PROMPT} ${value}` },
    ])
    const { lines: out, clear } = runCommand(value)
    if (clear) {
      setLines([])
    } else if (out.length) {
      setLines((prev) => [...prev, ...out])
    }
    if (value.trim()) {
      setHistory((prev) => [...prev, value])
    }
    setHistoryIdx(-1)
    setInput('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!history.length) return
      const next = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(next)
      setInput(history[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === -1) return
      const next = historyIdx + 1
      if (next >= history.length) {
        setHistoryIdx(-1)
        setInput('')
      } else {
        setHistoryIdx(next)
        setInput(history[next])
      }
    }
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <div className="mb-6 max-w-3xl">
          <p className="mb-3 font-mono text-sm text-purple">// terminal</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            You know the way. Let&apos;s talk natively.
          </h1>
        </div>

        <div
          className="overflow-hidden rounded-2xl border border-purple/30 bg-[oklch(0.1_0.03_275)] shadow-[0_0_40px_var(--glow)]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <span className="size-3 rounded-full bg-red-500" />
            <span className="size-3 rounded-full bg-yellow-500" />
            <span className="size-3 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              {PROMPT}
            </span>
          </div>

          {/* body */}
          <div
            ref={scrollRef}
            className="h-115 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
          >
            {lines.map((line, i) => (
              <pre
                key={i}
                className={`whitespace-pre-wrap wrap-break-word ${
                  line.type === 'error'
                    ? 'text-red-400'
                    : line.type === 'input'
                      ? 'text-foreground'
                      : 'text-emerald-300/90'
                }`}
              >
                {line.text}
              </pre>
            ))}

            {booted && (
              <div className="flex items-center gap-2 text-foreground">
                <span className="shrink-0 text-purple">{PROMPT}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                  className="flex-1 border-none bg-transparent font-mono text-sm text-foreground outline-none"
                />
                <span className="cursor-blink text-purple">▋</span>
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
          tip: try <span className="text-purple">help</span>,{' '}
          <span className="text-purple">skills</span>,{' '}
          <span className="text-purple">secret</span> — use ↑ / ↓ for history
        </p>
      </div>
    </PageTransition>
  )
}
