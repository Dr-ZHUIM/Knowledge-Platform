import $Mdx from './home.mdx';
import FadeIN from '@/components/FadeIn/FadeIn';
import { useState } from 'react';

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
    <section>
      <FadeIN
        children={
          <$Mdx
            components={{
              CountDemo,
            }}
          />
        }
      />
    </section>
  );
}
