import Article from '@/components/Article/Article';
import Demo from '@/components/Article/public/Demo/Demo';
import { useCallback, useState } from 'react';
import MdxResolver from '../../../../../components/Article/public/MdxResolver/MdxResolver';
import mdx from './index.mdx';

export { label, summary } from './index.mdx';

const items = [
  { id: '00001', todo: '00001' },
  { id: '00002', todo: '00002' },
  { id: '00003', todo: '00003' },
];

function KeyExample() {
  const [todos, setTodos] = useState(items);
  const [mode, setMode] = useState<'IndexMode' | 'IdMode'>('IndexMode');

  const handleReverse = useCallback(() => {
    setTodos((v) => [...v.reverse()]);
  }, [todos]);

  return (
    <Demo>
      <h4>{mode}</h4>
      <div className="flex gap-5 mt-5 mb-5">
        <button
          className="btn btn-primary"
          onClick={() =>
            setMode((v) => (v === 'IndexMode' ? 'IdMode' : 'IndexMode'))
          }
        >
          切换至{mode === 'IndexMode' ? 'IdMode' : 'IndexMode'}
        </button>
        <button className="btn btn-primary" onClick={handleReverse}>
          反转数组
        </button>
      </div>
      {todos.map((todo, index) => (
        <div
          className="flex gap-5 mt-5 mb-5"
          key={mode === 'IdMode' ? todo.id : index}
        >
          todo: {todo.todo}
          <input
            className="pl-5 pr-5 border-solid border-[1px] border-black"
            type="text"
          />
        </div>
      ))}
    </Demo>
  );
}

function ParentItem({ children }: any) {
  const [counter, setCounter] = useState(0);
  console.log('父组件渲染');
  return (
    <Demo>
      <h3>我是父组件,渲染次数：{counter}</h3>
      <button
        className="btn btn-primary"
        onClick={() => setCounter((v) => v + 1)}
      >
        counter:{counter}
      </button>
      {children}
    </Demo>
  );
}

function ChildItem() {
  console.log('子组件渲染');
  return <div>我是子组件</div>;
}

function ParentAndChildDemo() {
  return (
    <ParentItem>
      <ChildItem />
    </ParentItem>
  );
}

export default function ReactRenderBehavior() {
  return (
    <Article>
      <MdxResolver TC={mdx} components={{ KeyExample, ParentAndChildDemo }} />
    </Article>
  );
}
