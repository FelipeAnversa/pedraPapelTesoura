import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Jogada({ nome, icon, corBorda, setEscolha, visivelEscolha, setVisivelEscolha, habilitado, ganhou }) {
    const [showWaves, setShowWaves] = useState(false);

    const handleClick = () => {
        if (typeof setEscolha === 'function') setEscolha(nome);
        if (visivelEscolha === 'visible' && typeof setVisivelEscolha === 'function') setVisivelEscolha('hidden');
    };

    useEffect(() => {
        if (ganhou === 1) {
            const timer = setTimeout(() => setShowWaves(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowWaves(false);
        }
    }, [ganhou]);

    const waveStyle = (size, opacity, delay) => ({
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        width: size,
        height: size,
        zIndex: -1, 
        transition: 'all 0.5s ease-out',
        transform: showWaves ? 'scale(1)' : 'scale(0)',
        opacity: showWaves ? 1 : 0,
        transitionDelay: delay
    });

    return (
        <Box sx={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: { xs: '150px', md: '280px' }, 
            height: { xs: '150px', md: '280px' }
        }}>
            <Box sx={waveStyle('140%', 0.2, '300ms')} />
            <Box sx={waveStyle('125%', 0.4, '200ms')} />
            <Box sx={waveStyle('110%', 0.6, '100ms')} />

            <Button
                onClick={handleClick}
                disabled={!habilitado}
                sx={{
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    "&.Mui-disabled": { opacity: 1 }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: { xs: '110px', md: '200px' },
                        width: { xs: '110px', md: '200px' },
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: { 
                            xs: `12px solid ${corBorda || 'grey'}`, 
                            md: `22px solid ${corBorda || 'grey'}` 
                        },
                        boxShadow: `
                            inset 0px 6px 0px rgba(0,0,0,0.15), 
                            0px 8px 0px rgba(0,0,0,0.2)
                        `,
                        transition: 'transform 0.2s ease',
                        '&:hover': habilitado ? { transform: 'scale(1.05)' } : {}
                    }}
                >
                    <Box 
                        component='img' 
                        src={icon || ''} 
                        alt={nome || 'ícone'} 
                        sx={{ 
                            height: { xs: '45px', md: '80px' }, 
                            width: { xs: '45px', md: '80px' }, 
                            objectFit: 'contain' 
                        }}
                    />
                </Box>
            </Button>
        </Box>
    );
}