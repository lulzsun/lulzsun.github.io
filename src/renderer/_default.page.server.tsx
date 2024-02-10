import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import PageShell from '../components/PageShell'
import type { PageContextServer } from '../types'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  let { metaData } = pageContext.exports;
  // @ts-ignore // blog posts carry metaData differently. this is probably not a good idea, but it works ¯\_(ツ)_/¯
  if (pageContext.metaData) { metaData = pageContext.metaData;}
  const title = (metaData && metaData.title) || "Jimmy forgot to put a title"
  const description = (metaData && metaData.description) || "Jimmy forgot to put a description"
  const redirectUrl = (metaData && metaData.redirectUrl) || ""

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  )

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta name="description" content="${description}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Refresh" content="${redirectUrl !== "" ? "0" : "-1"}; url='${redirectUrl}'" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}