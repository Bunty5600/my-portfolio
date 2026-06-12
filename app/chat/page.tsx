'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SUGGESTIONS = [
  'What does Bunty do?',
  'What is his tech stack?',
  'Tell me about his projects',
  'How can I hire him?',
]

function getText(parts: { type: string; text?: string }[] | undefined) {
  if (!parts) return ''
  return parts
    .filter((p) => p.type === 'text')
    .map((p) => p.text ?? '')
    .join('')
}

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const busy = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput('')
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col px-4 pt-28 pb-8">
      <Reveal>
        <div className="mb-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple/40 bg-primary/10 px-3 py-1 text-xs font-medium text-purple">
            <Sparkles className="size-3.5" /> Powered by Claude
          </span>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Chat with <span className="text-purple text-glow">Bunty&apos;s AI</span>
          </h1>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">
            Ask anything about my work, skills, or how we can build something together.
          </p>
        </div>
      </Reveal>

      <div className="glass flex flex-1 flex-col overflow-hidden rounded-2xl">
        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-purple/30 blur-xl" />
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-purple/40 bg-card">
                  <Bot className="size-7 text-purple" />
                </div>
              </div>
              <p className="max-w-sm text-pretty text-sm text-muted-foreground">
                Hi! I&apos;m Bunty&apos;s AI assistant. Try one of these to get started:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => submit(s)}
                    className="rounded-full border border-purple/30 bg-card/60 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-purple hover:bg-primary/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <AnimatePresence initial={false}>
            {messages.map((m) => {
              const isUser = m.role === 'user'
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                      isUser
                        ? 'border-border bg-secondary'
                        : 'border-purple/40 bg-primary/15'
                    }`}
                  >
                    {isUser ? (
                      <User className="size-4" />
                    ) : (
                      <Bot className="size-4 text-purple" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      isUser
                        ? 'rounded-tr-sm bg-primary text-primary-foreground'
                        : 'rounded-tl-sm border border-border bg-card text-card-foreground'
                    }`}
                  >
                    {getText(m.parts) || (
                      <span className="cursor-blink text-purple">▋</span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {status === 'submitted' && (
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-purple/40 bg-primary/15">
                <Bot className="size-4 text-purple" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-1.5 rounded-full bg-purple"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit(input)
          }}
          className="border-t border-border p-3"
        >
          <div className="flex items-center gap-2 rounded-xl border border-input bg-background/60 px-3 py-1.5 focus-within:border-purple">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Bunty..."
              className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:shadow-[0_0_18px_var(--glow)] disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
