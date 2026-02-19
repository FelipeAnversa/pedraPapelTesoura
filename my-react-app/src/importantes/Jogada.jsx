import { Box, Button } from '@mui/material';

export default function Jogada({ nome, icon, corBorda, setEscolha, visivelEscolha, setVisivelEscolha, habilitado }) {
    const handleClick = () => {
        if (typeof setEscolha === 'function') setEscolha(nome);
        if (visivelEscolha === 'visible' && typeof setVisivelEscolha === 'function') setVisivelEscolha('hidden');
    };

    return (
        <Button
            onClick={handleClick}
            disabled={!habilitado}
            sx={{
                borderRadius: '50%',
                padding: 0, 
                minWidth: 0, 
                width: 'fit-content',
                display: 'inline-flex', 
                border: 'none',
                alignSelf: 'center',
                "&.Mui-disabled": {
                    border: 'none',
                    opacity: 1 
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: { xs: '130px', md: '225px' },
                    width: { xs: '130px', md: '225px' },
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    border: { 
                        xs: `15px solid ${corBorda || 'grey'}`, 
                        md: `22px solid ${corBorda || 'grey'}` 
                    },
                    boxShadow: `
                        inset 0px 6px 0px rgba(0,0,0,0.15), 
                        inset 0px -6px 0px rgba(0,0,0,0.05),
                        0px 8px 0px rgba(0,0,0,0.2)
                    `,
                    position: 'relative',
                    transition: 'transform 0.2s ease',
                    '&:hover': habilitado ? { transform: 'scale(1.1)' } : {}
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box 
                        component='img' 
                        src={icon || ''} 
                        alt={nome || 'ícone'} 
                        sx={{ 
                            height: { xs: '50px', md: '100px' }, 
                            width: { xs: '50px', md: '100px' }, 
                            objectFit: 'contain' 
                        }}
                    />
                </Box>
            </Box>
        </Button>
    );
}