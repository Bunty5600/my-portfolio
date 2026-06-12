import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Github, Linkedin, Twitter } from '@/components/brand-icons'

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: '/contact', label: 'Email' },
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Terminal', href: '/terminal' },
  { label: 'Chat', href: '/chat' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Bunty<span className="text-purple">.dev</span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-purple">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-lg border border-purple/30 bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-purple hover:text-purple"
            >
              <s.icon className="size-4" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Built by Bunty Bhainsa with Next.js, TypeScript &amp; Three.js · ©{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
