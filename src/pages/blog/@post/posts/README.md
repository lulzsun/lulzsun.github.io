this is where all my blog post pages are stored and created

they need to be in here in order to be prerendered later

make sure they are not appended with `.page` or else it will be considered as a route of vite-plugin-ssr routing filesystem

there is potential for xss injection, so take defensive action when creating a new blog post. obviously this is **really** bad, but for the sake of a personal blog, i did things in ways that benefit my blog post creation experience.