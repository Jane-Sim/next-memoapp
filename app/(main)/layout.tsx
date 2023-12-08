'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@/styles/globalStyle';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout(props: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <StyledComponentsRegistry>
          <>
            <GlobalStyle />
            {props.children}
          </>
        </StyledComponentsRegistry>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
