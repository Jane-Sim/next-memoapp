'use client';

import { StyledLayout } from './styles';

const Layout = (props: React.PropsWithChildren) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;
