import { anthropic } from '@ai-sdk/anthropic'
import { convertToModelMessages, streamText, type UIMessage } from 'ai'

export const maxDuration = 30

const SYSTEM_PROMPT = `You are "Bunty's AI" — a friendly, sharp portfolio assistant embedded on the personal website of Bunty Bhainsa, a full-stack developer and AI systems engineer.

About Bunty:
- 2+ years of development experience.
- Stack: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, Docker, and the Vercel AI SDK.
- Focus areas: scalable backends, intelligent data/AI pipelines, and polished, performant front-end interfaces.
- Personality: curious, pragmatic, always learning, ships fast.
- Notable work: AI-powered chat tooling, dashboards, automation pipelines, and design-forward web apps.

Rules:
- Answer questions about Bunty's skills, experience, projects, and how to work with him.
- Be concise, warm, and confident. Use a touch of personality but stay professional.
- If asked something you don't know about Bunty, say so honestly and suggest reaching out via the Contact page.
- Keep responses focused; prefer short paragraphs and bullet points over walls of text.`

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          'ANTHROPIC_API_KEY is not set. Add it in Project Settings to enable the chat.',
      }),
      { status: 500, headers: { 'content-type': 'application/json' } },
    )
  }

  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: anthropic('claude-sonnet-4-5'),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
