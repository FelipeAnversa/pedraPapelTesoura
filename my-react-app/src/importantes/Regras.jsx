import { Card, Button, Dialog, CardContent, Typography, Stack, Box } from '@mui/material';
import imageRules from '../../images/image-rules.svg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

export default function Regras() {
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Stack>
            <Button
                variant='outlined'
                onClick={handleClickOpen}
                sx={{
                    padding: '0.5rem 4rem',
                    width: '3rem',
                    borderRadius: '10px',
                    color: 'white',
                    border: '2px white solid',
                    letterSpacing: 2
                }}
            > RULES
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    height: '100vh',
                    width: '100%'
                }}
            >
                <Card>
                    <CardContent>
                        <Stack
                            spacing={5}
                            justifyContent="space-between"
                            sx={{
                                padding: '10px 20px 10px 20px',
                                background: 'white',
                            }}
                        >
                            <Stack
                                justifyContent='space-between'
                                textAlign='center'
                                direction='row'
                            >
                                <Typography color='grey' sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 400 }}
                                >RULES</Typography>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        color: 'grey',
                                    }}
                                >
                                
                                    <b>X</b>
                                </IconButton>
                            </Stack>
                            <Box component='img' src={imageRules} alt='Imagem Regras' sx={{ height: 'auto', width: 'auto'}} />
                        </Stack>
                    </CardContent>
                </Card>
            </Dialog>
        </Stack>
    );
}