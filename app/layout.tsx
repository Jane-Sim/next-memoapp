import { Metadata } from 'next';

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
      <body>{props.children}</body>
    </html>
  );
}
