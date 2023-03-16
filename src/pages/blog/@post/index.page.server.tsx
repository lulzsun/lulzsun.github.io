import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { RenderErrorPage } from 'vite-plugin-ssr'

import path from 'path';
import url from 'url';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { onBeforeRender }
export { prerender }

const postIds = fs.readdirSync(path.join(__dirname, '/posts')).map(file => file.replace(/\.[^/.]+$/, ''));

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { post } = pageContext.routeParams
  if (postIds.length == 0 || !postIds.includes(post)) {
    const is404 = false;
    throw RenderErrorPage({ pageContext: { pageProps: { is404, postIds } } })
  }
  const { Page, metaData } = await import(`./posts/${post}.tsx`);
  const pageHtml = ReactDOMServer.renderToString(<Page/>);
  const pageProps = { post, pageHtml };
  return {
    pageContext: {
      pageProps,
      metaData
    }
  }
}

function prerender(): string[] {
  return ['/blog', ...postIds.map((post) => `/blog/${post}`)]
}