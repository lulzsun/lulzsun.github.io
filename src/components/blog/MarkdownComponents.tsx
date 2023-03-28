import { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeProps } from "react-markdown/lib/ast-to-react";

export const MarkdownComponents: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-lg font-bold">{children}</h4>,
  ul: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
  ol: ({ children }) => <ul className="list-decimal ml-4">{children}</ul>,
  code({node, inline, className, children, style, ...props} : CodeProps) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={a11yDark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
};