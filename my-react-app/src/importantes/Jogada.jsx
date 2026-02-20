import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Jogada({ nome, icon, corBorda, setEscolha, visivelEscolha, setVisivelEscolha, habilitado, ganhou }) {
    const handleClick = () => {
        if (typeof setEscolha === 'function') setEscolha(nome);
        if (visivelEscolha === 'visible' && typeof setVisivelEscolha === 'function') setVisivelEscolha('hidden');
    };

    const [camadaUm, setCamadaUm] = useState('hidden');
    const [camadaDois, setCamadaDois] = useState('hidden');
    const [camadaTres, setCamadaTres] = useState('hidden');

    useEffect(() => {
        if (ganhou === 1) {
            setTimeout(() => {
                setCamadaUm('visible');
            }, 100);
            setTimeout(() => {
                setCamadaDois('visible');
            }, 200);
            setTimeout(() => {
                setCamadaTres('visible');
            }, 300);
        }
    }, [ganhou]);

    const waveStyle = (size, opacity, visibility) => ({
        position: 'absolute',
        borderRadius: '50%',
        width: size,
        height: size,
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        zIndex: 0, 
        visibility: visibility,
        transition: 'all 0.4s ease-in-out',
        transform: visibility === 'visible' ? 'scale(1)' : 'scale(0.8)',
        opacity: visibility === 'visible' ? opacity : 0,
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
            <Box 
                sx={waveStyle('140%', 0.2, camadaTres)} 
            />
            <Box 
                sx={waveStyle('115%', 0.4, camadaDois)}
            />
            <Box 
                sx={waveStyle('95%', 0.6, camadaUm)}
            />
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