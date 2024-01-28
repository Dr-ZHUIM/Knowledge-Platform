import $Mdx from './home.mdx';
import { useState } from 'react';
import Article from '@/components/Article/Article';
import { Button } from 'antd';

import { addArticle } from './read';

function CountDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>count++</button>
      <span style={{ marginLeft: '25px' }}>{count}</span>
    </div>
  );
}

export default function Home() {
  return (
    <Article>
      <Button onClick={() => addArticle()} type="primary">
        Fly
      </Button>
      <$Mdx
        components={{
          CountDemo,
        }}
      />
    </Article>
  );
}
