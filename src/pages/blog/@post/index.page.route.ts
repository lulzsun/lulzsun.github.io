import { resolveRoute } from 'vite-plugin-ssr/routing'

// We use a Route Function to implement advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === '/blog' || pageContext.urlPathname === '/blog/') {
    const post = 'anonymous'
    return { routeParams: { post } }
  }
  return resolveRoute('/blog/@post', pageContext.urlPathname)
}