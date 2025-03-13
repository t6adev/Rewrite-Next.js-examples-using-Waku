import type { ReactNode } from 'react';

import StyledComponentsRegistry from '../components/AntdRegistry';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <main>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </main>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: '',
    description: '',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
