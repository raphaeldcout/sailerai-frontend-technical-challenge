'use client';

import { FC } from 'react';

import {
    FiAlertTriangle
} from 'react-icons/fi';

import { Typography } from '@/components/Typography';
import theme from '@/styles/theme';

import { Root } from './style';

export const AlertResponsive: FC = () => (
  <Root>
    <FiAlertTriangle size={50} color={theme.colors.warning} />
    <Typography>
      A versão atual da plataforma é compatível apenas com dispositivos de tela
      grande.
    </Typography>
  </Root>
);
