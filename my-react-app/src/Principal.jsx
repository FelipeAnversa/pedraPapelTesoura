import { Stack, Typography, Box } from '@mui/material'
import { useState } from 'react';

export default function Principal() {
    const [score, setScore] = useState(0);
    return (
        <Stack
            alignItems="center"
            justifyContent="start"
            pt={10}
            minHeight="100vh"
            width="100%"
            sx={{
                background: `radial-gradient(ellipse at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))`,
            }}
        >
            <Stack
                spacing={90}
                direction="row"
                sx={{
                    p: '20px',
                    border: '3px hsl(246, 11%, 37%) solid',
                    borderRadius: '20px',
                }}
            >
                <Stack
                    direction="column"
                >
                    <Typography color='white' sx={{ fontSize: 40 }}>ROCK</Typography>
                    <Typography color='white' sx={{ fontSize: 40 }}>PAPER</Typography>
                    <Typography color='white' sx={{ fontSize: 40 }}>SCISSORS</Typography>
                </Stack>
                <Box
                    bgcolor="white"
                    sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 1,
                    }}
                >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        sx={{ pt: 4 }}
                    >
                        <Typography
                            display="block" 
                            color='cores.scoreText'
                            sx={{ letterSpacing: 2, fontSize: 30 }}
                        >SCORE</Typography>
                        <Typography color='cores.darkText' sx={{fontSize: 60}}>{score}</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}