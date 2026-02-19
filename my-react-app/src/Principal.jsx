import { Stack } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

import Regras from './importantes/Regras.jsx';
import Header from './importantes/Header.jsx';
import Jogo from './importantes/Jogo.jsx';
import Escolha from './importantes/Escolha.jsx';

export default function Principal() {
    const [score, setScore] = useState(0);
    const [escolha, setEscolha] = useState('');
    const [visivelEscolha, setVisivelEscolha] = useState('visible');

    const theme = useTheme(); 
    const cores = theme.palette.cores; 
    
    return (
        <Stack
            pt={4}
            px={2}
            minHeight="100vh"
            sx={{
                background: `radial-gradient(circle at top, ${cores.fundo1.main}, ${cores.fundo2.main})`,
            }}
        >
            <Header 
                score={score}
                cores={cores} 
            />
            {visivelEscolha == 'visible' ? (
                <Escolha 
                    setEscolha={setEscolha} 
                    visivelEscolha={visivelEscolha} 
                    setVisivelEscolha={setVisivelEscolha}
                    cores={cores}
                />
            ) : (
                <Jogo 
                    escolha={escolha} 
                    setVisivelEscolha={setVisivelEscolha} 
                    setScore={setScore}
                    cores={cores} 
                />
            )}
            <Regras
                cores={cores}
            />
        </Stack>
    );
}