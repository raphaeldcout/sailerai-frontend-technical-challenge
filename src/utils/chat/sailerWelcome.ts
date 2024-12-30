const startDate = new Date();

import { Message } from '@/layouts/Chat/components/Messages/types';

export const DELAY_TIMER = 5000;

export const sailerWelcome: Message[] = [
    {
        id: 1,
        user_id: 'admin',
        content: 'Bem-vindo! 🎉 Estamos animados por tê-lo aqui.',
        timestamp: startDate.toISOString(),
        type: 'text',
        welcome: true
    },
    {
        id: 2,
        user_id: 'admin',
        content:
            'Que tal iniciar uma conversa com seus amigos agora mesmo clicando no botão "Iniciar uma conversa" no Menu ao lado.',
        timestamp: new Date(startDate.getTime() + DELAY_TIMER).toISOString(),
        type: 'text',
        welcome: true
    },
    {
        id: 3,
        user_id: 'admin',
        content:
            'Aproveite para desfrutar tudo o que a plataforma pode te oferecer. Ah, não se esqueça que estamos aqui para te ajudar, basta chamar 😉',
        timestamp: new Date(startDate.getTime() + DELAY_TIMER * 2).toISOString(),
        type: 'text',
        welcome: true
    },
];