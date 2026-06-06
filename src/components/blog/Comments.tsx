import { useEffect, useState } from 'react';

interface Props {
  post: string
} 

export const Comments: React.FC<Props> = ({ post }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'lulzsun/lulzsun.github.io');
    script.setAttribute('issue-term', post);
    script.setAttribute('theme', 'github-dark');
    anchor?.appendChild(script);
  }, [mounted]);

  if (!mounted) return null;

  return <div id="inject-comments-for-uterances" />;
};