'use client';

import { Body } from '@/layouts/Body';

import { Footer, FormGroup, Header } from './components';
import { Root } from './style';

export default function ChatNew() {
  return (
    <Body>
      <Root>
        <Header />
        <FormGroup />
        <Footer />
      </Root>
    </Body>
  );
}
