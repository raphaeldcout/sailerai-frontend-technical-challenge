import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Initialization from '@/layouts/Initialization';
import { NavBar } from '@/layouts/NavBar';
import { SideBar } from '@/layouts/SideBar';
import GlobalStyles from '@/styles/GlobalStyles';

import { Wrapper } from './style';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sailer AI - Chat',
  description: 'Created by: Raphael Melo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Initialization>
          <GlobalStyles />
          <SideBar />
          <Wrapper>
            <NavBar />
            {children}
          </Wrapper>
        </Initialization>
      </body>
    </html>
  );
}