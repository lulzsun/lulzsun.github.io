import path from 'path';
import url from 'url';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { onBeforeRender }
export { prerender }

async function onBeforeRender() {
  const posts = await getAllBlogPosts();

  return {
    pageContext: {
      pageProps: {
        posts
      }
    }
  }
}

async function prerender() {
  const posts = await getAllBlogPosts();

  return [{
    url: '/blog',
    pageContext: {
      pageProps: {
        posts
      }
    }
  }]
}

async function getAllBlogPosts() {
  const posts = fs.readdirSync(path.join(__dirname, '/blog/@post/posts'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let postsWithMetadata: { metaData: any; }[] = [];
  for (const post of posts) {
    const { metaData } = await import(`./blog/@post/posts/${post}/index.tsx`);
    metaData.id = post;
    postsWithMetadata.push({metaData});
  }
  return postsWithMetadata;
}