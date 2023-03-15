import ReactDOMServer from 'react-dom/server'
import { escapeInject } from 'vite-plugin-ssr'
import type { PageContextServer } from '../types'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const { metaData } = pageContext.exports;
  const title = (metaData && metaData.title) || "Jimmy forgot to put a title"
  const description = (metaData && metaData.description) || "Jimmy forgot to put a description"

  const pageHtml = ReactDOMServer.renderToString(
    <Page {...pageProps} />
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </head>
      <body>
        <div id="root">${pageHtml}</div>
      </body>
    </html>`;
}