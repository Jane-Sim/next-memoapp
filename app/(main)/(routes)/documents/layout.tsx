'use client';

import styled from 'styled-components';

import { Navigation } from '@/components/blocks/Navigation';
import Layout from '@/components/pages/Layout';

const Main = styled.main`
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Layout>
      <Navigation />
      <Main>{props.children}</Main>
    </Layout>
  );
}
