import { Metadata } from 'next';

import React from 'react';
import RecoilRootWrapper from '@/app/_components/wrappers/RecoilRootWrapper';
import StyledComponentsRegistry from '@/app/_components/wrappers/registry';
import GlobalStyle from '@/styles/globalStyle';

export const metadata: Metadata = {
  title: 'nextjs memoapp',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        href: '/favicon.ico',
      },
    ],
  },
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <RecoilRootWrapper>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {props.children}
          </StyledComponentsRegistry>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
