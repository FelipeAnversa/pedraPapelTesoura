import { 
    Stack, 
    Typography, 
    Box
} from '@mui/material';
import { useState } from 'react';

import Jogada from './importantes/Jogada.jsx';
import Regras from './importantes/Regras.jsx';

import iconPaper from '../images/icon-paper.svg';
import iconRock from '../images/icon-rock.svg';
import iconScissors from '../images/icon-scissors.svg';
import triangulo from '../images/bg-triangle.svg'

export default function Principal() {
    const [score, setScore] = useState(0);
    
    return (
        <Stack
            pt={{ xs: 4, md: 10 }}
            px={2}
            minHeight="100vh"
            width="100%"
            sx={{
                background: `radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))`,
            }}
        >
            <Stack
                justifyContent='center'
                alignItems='center'
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        p: '18px 24px',
                        border: '3px solid hsl(217, 16%, 45%)',
                        borderRadius: '15px',
                        width: '100%',
                        maxWidth: '700px',
                    }}
                >
                    <Stack direction="column" sx={{ lineHeight: 0.8 }}>
                        <Typography 
                            color="white" 
                            sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 700, lineHeight: 0.85 }}
                        >
                            ROCK<br />PAPER<br />SCISSORS
                        </Typography>
                    </Stack>
                    <Box
                        sx={{
                            bgcolor: "white",
                            width: { xs: 80, md: 150 }, 
                            height: { xs: 80, md: 110 },
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            color="hsl(229, 64%, 46%)"
                            sx={{ 
                                letterSpacing: 2, 
                                fontSize: { xs: 10, md: 16 }, 
                                fontWeight: 600 
                            }}
                        >
                            SCORE
                        </Typography>
                        <Typography 
                            color="hsl(229, 25%, 31%)" 
                            sx={{ 
                                fontSize: { xs: 40, md: 60 }, 
                                fontWeight: 700, 
                                lineHeight: 1 
                            }}
                        >
                            {score}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
            <Stack
                justifyContent='center'
                alignItems='center'

                sx={{
                    backgroundImage: {triangulo}
                }}
            >
                <Stack
                    direction='row'
                >
                    <Jogada nome={'papel'} icon={iconPaper} />
                    <Jogada nome={'tesoura'} icon={iconScissors} />
                </Stack>
                <Jogada nome={'pedra'} icon={iconRock} />
            </Stack>
            <Stack
                justifyContent="flex-end" 
                alignItems="flex-end" 
                sx={{
                    height: '15vh',
                    width: '98%'
                }}
            >
                <Regras />
            </Stack>
        </Stack>
    );
}