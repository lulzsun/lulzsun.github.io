import { useEffect } from 'react';

interface Props {
  post: string
} 

export const Comments: React.FC<Props> = ({post}) => {
  function componentDidMount() {
    let script = document.createElement('script');
    let anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'lulzsun/lulzsun.github.io');
    script.setAttribute('issue-term', post);
    script.setAttribute('theme', 'github-dark');
    anchor?.appendChild(script);
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  return <div id="inject-comments-for-uterances" />;
}