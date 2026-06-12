'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Check } from 'lucide-react'
import { Github, Linkedin, Twitter } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const channels = [
  { icon: Mail, label: 'Email', value: 'hello@bunty.dev', href: 'mailto:buntybhainsa0@gmail.com' },
  { icon: Github, label: 'GitHub', value: '@bunty', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Bunty Bhainsa', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', value: '@bunty', href: 'https://twitter.com' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <Reveal>
        <div className="mb-10 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s <span className="text-purple text-glow">build</span> something
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Got a project, a role, or just want to talk shop? My inbox is always open.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-purple"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_var(--glow)] disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="size-4" /> Message sent!
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>

        <div className="space-y-3 md:col-span-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 transition-all hover:-translate-y-0.5 hover:border-purple/50"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-purple/30 bg-primary/10 text-purple transition-transform group-hover:scale-110">
                  <c.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.32}>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4">
              <div className="flex size-11 items-center justify-center rounded-xl border border-purple/30 bg-primary/10 text-purple">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm font-medium">India · Remote-friendly</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple"
      />
    </div>
  )
}
