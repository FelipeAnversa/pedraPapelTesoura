import { Box, Button } from '@mui/material'

export default function Jogada(nome, icon) {
    return (
        <Button
            sx={{
                borderRadius: '50%',
            }}
        >
            <Box
                sx={{
                    height: '50px',
                    width: '50px',
                    border: '20px red solid',
                    background: 'white',
                    borderRadius: '50%',
                    p: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box component='img' src={icon} alt={nome} sx={{ height: '40px', width: '40px'}}/>
            </Box>
        </Button>
    );
}