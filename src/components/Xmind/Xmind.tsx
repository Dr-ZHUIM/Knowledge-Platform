import React, { useCallback } from 'react';
import { XMindEmbedViewer } from 'xmind-embed-viewer';
import { githubRequest } from '@/config/github';
import { GITHUB_CONST } from '@/constants/const';
import { Base64 } from 'js-base64';
import { stringToArrayBuffer } from '@/utils/utils';

export type XmindType = {
  className?: string;
  style?: React.CSSProperties;
};

function Xmind({ className, style }: XmindType) {
  const initXmind = useCallback(async () => {
    const viewer = new XMindEmbedViewer({
      el: '#container-or-iframe-selector', // HTMLElement | HTMLIFrameElement | string
    });
    // fetch(
    //   'https://api.github.com/repos/Dr-ZHUIM/notes/contents/KnowledgeChart.xmind?owner=Dr-ZHUIM&repo=notes&path=KnowledgeChart.xmind',
    //   {
    //     headers: {
    //       Authorization: GITHUB_CONST.GITHUB_AUTH,
    //     },
    //   },
    // )
    //   .then((res) => {
    //     console.log('res', res);
    //     return res.arrayBuffer();
    //   })
    //   .then((file) => viewer.load(file));
    const res = (
      await githubRequest(
        `GET /repos/${GITHUB_CONST.GITHUB_AUTHOR}/${GITHUB_CONST.GITHUB_REPO}/contents/${GITHUB_CONST.GITHUB_XMIND}`,
        GITHUB_CONST.GITHUB_XMIND,
      )
    ).data.content;
    const decodeString = Base64.decode(res);
    const arrayBuffer = stringToArrayBuffer(decodeString);
    viewer.load(arrayBuffer);
  }, []);

  return (
    <section
      className={className}
      style={style}
      ref={initXmind}
      id="container-or-iframe-selector"
    />
  );
}

export default React.memo(Xmind);
