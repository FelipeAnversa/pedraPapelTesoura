import { Box, Button } from '@mui/material';

export default function Jogada({ nome, icon, corBorda, setEscolha, habilitado }) {
    const handleClick = (event) => {
        setEscolha(nome);
    }
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
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '175px',
                    width: '175px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    border: `15px solid ${corBorda}`,
                    boxShadow: `
                        inset 0px 6px 0px rgba(0,0,0,0.15), 
                        inset 0px -6px 0px rgba(255,255,255,0.3),
                        inset 0px 8px 10px rgba(0,0,0,0.2), 
                        0px 8px 0px rgba(0,0,0,0.2)
                    `,
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box 
                        component='img' 
                        src={icon} 
                        alt={nome} 
                        sx={{ height: '70px', width: '70px', objectFit: 'contain' }}
                    />
                </Box>
            </Box>
        </Button>
    );
}