import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import { RenderErrorPage } from 'vite-plugin-ssr';
import ReactDOMServer from 'react-dom/server';

import path from 'path';
import url from 'url';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { onBeforeRender }
export { prerender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const postIds = fs.readdirSync(path.join(__dirname, '/posts'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  const { post } = pageContext.routeParams
  if (postIds.length == 0 || !postIds.includes(post)) {
    const is404 = false;
    throw RenderErrorPage({ pageContext: { pageProps: { is404, postIds } } })
  }
  const { Page, metaData } = await import(`./posts/${post}/index.tsx`);
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
  const postIds = fs.readdirSync(path.join(__dirname, '/posts'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  return [...postIds.map((post) => `/blog/${post}`)]
}