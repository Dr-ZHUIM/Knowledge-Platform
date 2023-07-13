import React, { useState, useEffect } from 'react';
import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import Mdx from './index.mdx';

export const label = '使用 `as` 关键字重定义 key';

export default function KeyRemappingViaAs() {
  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
