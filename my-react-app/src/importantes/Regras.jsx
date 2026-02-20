import { Card, Button, Dialog, CardContent, Typography, Stack, Box } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import imageRules from '../../images/image-rules-bonus.svg';

export default function Regras({ cores }) {
    const [open, setOpen] = useState(false);
      
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 30, md: 40 },
                right: { xs: '84%', md: 40 },
                transform: { xs: 'translateX(50%)', md: 'none' },
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 10,
                width: { xs: '100%', md: 'auto' }, 
                pointerEvents: 'none', 
            }}
        >
            <Button
                variant='outlined'
                onClick={handleClickOpen}
                sx={{
                    pointerEvents: 'auto', 
                    padding: '0.5rem 2rem', 
                    minWidth: '120px', 
                    borderRadius: '10px',
                    color: 'white',
                    border: '2px white solid',
                    letterSpacing: 2,
                    fontSize: '0.9rem'
                }}
            > 
                RULES
            </Button>
            <Dialog
                open={!!open}
                onClose={handleClose}
                fullWidth 
                maxWidth="xs" 
            >
                <Card>
                    <CardContent>
                        <Stack
                            spacing={4}
                            sx={{
                                padding: { xs: '10px', md: '20px' },
                                background: 'white',
                                alignItems: 'center' 
                            }}
                        >
                            <Stack
                                justifyContent='space-between'
                                direction='row'
                                alignItems="center"
                                sx={{ width: '100%' }} 
                            >
                                <Typography 
                                    color='grey' 
                                    sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700 }}
                                >
                                    RULES
                                </Typography>
                                <IconButton onClick={handleClose}>
                                    <span style={{ color: cores.darkText.main, fontWeight: 'bold' }}>X</span>
                                </IconButton>
                            </Stack>
                            <Box 
                                component='img' 
                                src={imageRules} 
                                alt='Regras' 
                                sx={{ 
                                    width: '100%', 
                                    maxWidth: '300px', 
                                    height: 'auto' 
                                }} 
                            />
                        </Stack>
                    </CardContent>
                </Card>
            </Dialog>
        </Box>
    );
}