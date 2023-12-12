'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

function RecoilRootWrapper(props: React.PropsWithChildren) {
  return <RecoilRoot>{props.children}</RecoilRoot>;
}

export default RecoilRootWrapper;
