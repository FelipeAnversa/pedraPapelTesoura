import { Stack } from '@mui/material';
import { useState } from 'react';

import Regras from './importantes/Regras.jsx';
import Header from './importantes/Header.jsx';
import Escolha from './importantes/Escolha.jsx';
import Jogo from './importantes/Jogo.jsx';

export default function Principal() {
    const [score, setScore] = useState(0);
    
    return (
        <Stack
            pt={4}
            px={2}
            minHeight="100vh"
            sx={{
                background: `radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))`,
            }}
        >
            <Header score={score} />
            <Jogo />
            <Regras />
        </Stack>
    );
}