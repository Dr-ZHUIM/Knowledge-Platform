import { useMemo } from 'react';
import Article from '@/components/Article/Article';
import { useParams } from 'react-router-dom';
import { layers } from '@/routes/getRoutes';

export default function Articles() {
  const { layer } = useParams<Record<string, Layer>>();
  const articles = useMemo(() => {
    if (layer) {
      const _layer = layers[layer];
      return (_layer && _layer[0].children) || [];
    }
    return [];
  }, [layer]);
  return (
    <Article>
      <h1>{layer}</h1>
      {articles.map((article) => {
        return <div key={article.label}>{article.label}</div>;
      })}
    </Article>
  );
}
