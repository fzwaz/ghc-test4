import React from 'react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { BlogBlock } from '../data/blogs'

interface SanityPortableTextProps {
  content: any
}

export const SanityPortableText: React.FC<SanityPortableTextProps> = ({ content }) => {
  const navigate = useNavigate()

  // If content is legacy BlogBlock[] (from seed blogs or local storage)
  if (Array.isArray(content) && content.length > 0 && typeof content[0] === 'object' && 'type' in content[0] && !('_type' in content[0])) {
    const legacyBlocks = content as BlogBlock[]
    return (
      <div>
        {legacyBlocks.map((block, i) => {
          if (block.type === 'intro') {
            return (
              <p key={i} style={{ fontSize: '18px', color: '#334155', lineHeight: 1.75, marginBottom: '30px', fontWeight: 500 }}>
                {block.text}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h2 key={i} style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', margin: '38px 0 14px 0' }}>
                {block.text}
              </h2>
            )
          }
          if (block.type === 'paragraph') {
            return (
              <p key={i} style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '18px' }}>
                {block.text}
              </p>
            )
          }
          if (block.type === 'example') {
            return (
              <div key={i} style={{ borderLeft: '4px solid #1a7b74', backgroundColor: '#f0fdfa', borderRadius: '0 12px 12px 0', padding: '16px 20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#1a7b74', marginBottom: '6px' }}>
                  EXAMPLE
                </div>
                <p style={{ fontSize: '15.5px', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.6 }}>
                  “{block.text}”
                </p>
              </div>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '15.5px', color: '#334155', lineHeight: 1.6 }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={i} style={{ borderRadius: '16px', backgroundColor: '#0f2a3c', color: '#ffffff', padding: '28px 30px', margin: '32px 0', fontSize: '17px', lineHeight: 1.7, fontStyle: 'italic' }}>
                “{block.text}”
              </blockquote>
            )
          }
          return (
            <div key={i} style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #071a15 0%, #0d3a34 100%)', padding: '36px', margin: '36px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{block.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#a7c4c0', lineHeight: 1.6 }}>{block.text}</p>
              </div>
              <button
                onClick={() => navigate('/')}
                style={{ backgroundColor: '#2dd4bf', color: '#052e22', border: 'none', borderRadius: '9999px', padding: '13px 28px', fontWeight: 800, fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
              >
                <span>{block.buttonLabel}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )
        })}
      </div>
    )
  }

  // Portable Text Components mapping
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '18px' }}>
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', margin: '38px 0 14px 0' }}>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', margin: '28px 0 12px 0' }}>
          {children}
        </h3>
      ),
      intro: ({ children }) => (
        <p style={{ fontSize: '18px', color: '#334155', lineHeight: 1.75, marginBottom: '30px', fontWeight: 500 }}>
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote style={{ borderRadius: '16px', backgroundColor: '#0f2a3c', color: '#ffffff', padding: '28px 30px', margin: '32px 0', fontSize: '17px', lineHeight: 1.7, fontStyle: 'italic' }}>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol style={{ paddingLeft: '20px', margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px', color: '#334155', fontSize: '15.5px' }}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li style={{ display: 'flex', gap: '10px', fontSize: '15.5px', color: '#334155', lineHeight: 1.6 }}>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>
            ✓
          </span>
          <span>{children}</span>
        </li>
      ),
      number: ({ children }) => (
        <li style={{ lineHeight: 1.6 }}>
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#0f172a' }}>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      code: ({ children }) => (
        <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em', color: '#0f172a' }}>
          {children}
        </code>
      ),
      link: ({ children, value }) => {
        const href = value?.href || '#'
        const isExternal = href.startsWith('http')
        return (
          <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            style={{ color: '#1a7b74', textDecoration: 'underline', fontWeight: 600 }}
          >
            {children}
          </a>
        )
      },
    },
    types: {
      quote: ({ value }) => (
        <blockquote style={{ borderRadius: '16px', backgroundColor: '#0f2a3c', color: '#ffffff', padding: '28px 30px', margin: '32px 0', fontSize: '17px', lineHeight: 1.7, fontStyle: 'italic' }}>
          “{value?.text}”
        </blockquote>
      ),
      exampleCallout: ({ value }) => (
        <div style={{ borderLeft: '4px solid #1a7b74', backgroundColor: '#f0fdfa', borderRadius: '0 12px 12px 0', padding: '16px 20px', marginBottom: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#1a7b74', marginBottom: '6px' }}>
            EXAMPLE
          </div>
          <p style={{ fontSize: '15.5px', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.6 }}>
            “{value?.text}”
          </p>
        </div>
      ),
      ctaBox: ({ value }) => (
        <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #071a15 0%, #0d3a34 100%)', padding: '36px', margin: '36px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{value?.title}</h3>
            <p style={{ fontSize: '14.5px', color: '#a7c4c0', lineHeight: 1.6 }}>{value?.text}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            style={{ backgroundColor: '#2dd4bf', color: '#052e22', border: 'none', borderRadius: '9999px', padding: '13px 28px', fontWeight: 800, fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
          >
            <span>{value?.buttonLabel || 'Learn More'}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      ),
    },
  }

  if (!Array.isArray(content) || content.length === 0) {
    return null
  }

  return <PortableText value={content} components={components} />
}
