import { escapeInject } from 'vite-plugin-ssr'
import { PageContextServer } from './types'

export function render(pageContext: PageContextServer) {
  const { meta } = pageContext.exports
  const title = (meta && meta.title) || "Jimmy Quach | Portfolio"
  const description = (meta && meta.description) || "Jimmy Quach's portfolio website and blog"

  // Even though we load and render our page's components only in the browser,
  // we define our page's `<title>` and `<meta name="description">` on the server-side.
  return escapeInject`<html>
    <head>
      <title>${title}</title>
      <meta name="description" content="${description}" />
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`
}