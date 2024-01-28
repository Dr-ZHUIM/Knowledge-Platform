import React, { useState, useEffect, useRef, useId } from 'react';
import { GITHUB_CONST } from '../../constants/const';
import { XMindEmbedViewer } from 'xmind-embed-viewer';

const prevent = (e: MouseEvent) => e.preventDefault();

export default function KnowledgeCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const viewer = useRef<XMindEmbedViewer | null>(null);

  useEffect(() => {
    document.addEventListener('contextmenu', prevent);
    return () => {
      document.removeEventListener('contextmenu', prevent);
    };
  }, []);

  useEffect(() => {
    viewer.current = new XMindEmbedViewer({
      el: containerRef.current as HTMLDivElement,
      region: 'cn',
      styles: {
        width: '100%',
        height: '600px',
      },
    });
    fetch(
      `https://api.github.com/repos/${GITHUB_CONST.GITHUB_AUTHOR}/${GITHUB_CONST.GITHUB_REPO}/contents/${GITHUB_CONST.GITHUB_XMIND}`,
      {
        headers: {
          Authorization: GITHUB_CONST.GITHUB_AUTH,
        },
      },
    );
    // .then((res) => res.arrayBuffer())
    // .then((file) => {
    //   console.log('file', file);
    //   viewer.current!.load(file);
    // });
    fetch(`/KnowledgeChart.xmind`, {
      headers: {
        Authorization: GITHUB_CONST.GITHUB_AUTH,
      },
    })
      .then((res) => res.arrayBuffer())
      .then((file) => {
        viewer.current!.load(file);
      });
  }, []);

  return <div ref={containerRef}></div>;
}
