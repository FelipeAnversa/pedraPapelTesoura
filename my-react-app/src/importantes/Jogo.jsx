import { Box, Button, Stack, Typography } from "@mui/material";
import Jogada from "./Jogada";
import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg';
import { useEffect, useState, useMemo } from "react";

export default function Jogo({ escolha, setVisivelEscolha, setScore, cores }) {
    const icons = useMemo(() => ({ 
        papel: iconPaper, 
        pedra: iconRock, 
        tesoura: iconScissors 
    }), []);

    const cor = useMemo(() => ({
        papel: cores.blue.main,
        pedra: cores.red.main,
        tesoura: cores.gold.main
    }), []);

    const [selecionado, setSelecionado] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        if (escolha && !selecionado) {
            const nomes = ['papel', 'pedra', 'tesoura'];
            const timer = setTimeout(() => {
                const indiceAleatorio = Math.floor(Math.random() * nomes.length);
                setSelecionado(nomes[indiceAleatorio]);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [escolha, selecionado]);

    useEffect(() => {
        if (escolha && selecionado && !resultado) {
            if (escolha === selecionado) {
                setResultado('DRAW');
            } else if (
                (escolha === 'papel' && selecionado === 'pedra') ||
                (escolha === 'pedra' && selecionado === 'tesoura') ||
                (escolha === 'tesoura' && selecionado === 'papel')
            ) {
                setResultado('YOU WIN');
                setScore((prev) => prev + 1); 
            } else {
                setResultado('YOU LOSE');
                setScore((prev) => prev - 1); 
            }
        }
    }, [escolha, selecionado, resultado, setScore]);

    const reiniciar = () => setVisivelEscolha('visible');

return (
        <Stack 
            direction="column" 
            alignItems='center' 
            justifyContent='center'
            mt={{ xs: 4, md: 10 }}
            sx={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}
        >
            <Stack 
                direction="row" 
                spacing={{ xs: 3, md: 10 }} 
                alignItems="center"
                justifyContent="center"
                sx={{ width: '100%' }}
            >
                <Stack alignItems='center' spacing={{ xs: 3, md: 5 }}>
                    <Typography 
                        color="white" 
                        sx={{ fontWeight: 600, letterSpacing: 2, fontSize: { xs: '0.8rem', md: '1.2rem' } }}
                    >YOU PICKED</Typography>
                    <Jogada 
                        nome={escolha || 'papel'} 
                        icon={icons[escolha] || ''} 
                        corBorda={cor[escolha] || 'white'} 
                        habilitado={0} 
                    />
                </Stack>
                {resultado && (
                    <Stack 
                        display={{ xs: 'none', md: 'flex' }}
                        alignItems='center' 
                        spacing={2}
                        sx={{ minWidth: '200px', mx: 4 }}
                    >
                        <Typography 
                            color="white" 
                            variant="h3"
                            sx={{ fontSize: '4rem', fontWeight: 700 }}
                        >{resultado}</Typography>
                        <Button
                            variant="contained"
                            onClick={reiniciar}
                            fullWidth
                            sx={{
                                p: '12px 24px',
                                color: cores.darkText.main,
                                background: 'white',
                                '&:hover': { background: 'white', opacity: 0.9, color: cores.red.main },
                                fontWeight: 600,
                                letterSpacing: 2
                            }}
                        >
                            PLAY AGAIN
                        </Button>
                    </Stack>
                )}
                <Stack alignItems='center' spacing={{ xs: 3, md: 5 }}>
                    <Typography 
                        color="white" 
                        sx={{ fontWeight: 600, letterSpacing: 2, fontSize: { xs: '0.8rem', md: '1.2rem' } }}
                    >THE HOUSE PICKED</Typography>
                    <Box sx={{
                        borderRadius: '50%',
                        width: { xs: '130px', md: '225px' }, 
                        height: { xs: '130px', md: '225px' },
                        background: 'rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {selecionado ? (
                            <Jogada 
                                nome={selecionado} 
                                icon={icons[selecionado]} 
                                corBorda={cor[selecionado]} 
                                habilitado={0} 
                            />
                        ) : (
                            <Box sx={{ 
                                width: '80%', 
                                height: '80%', 
                                borderRadius: '50%', 
                                background: 'rgba(0,0,0,0.3)' 
                            }} />
                        )}
                    </Box>
                </Stack>
            </Stack>
            {resultado && (
                <Stack 
                    display={{ xs: 'flex', md: 'none' }}
                    alignItems='center' 
                    spacing={2}
                    mt={8} 
                >
                    <Typography 
                        color="white" 
                        variant="h3"
                        sx={{ fontSize: '3.5rem', fontWeight: 700 }}
                    >{resultado}</Typography>
                    <Button
                        variant="contained"
                        onClick={reiniciar}
                        sx={{
                            p: '12px 60px',
                            color: cores.darkText.main,
                            background: 'white',
                            fontWeight: 600,
                            letterSpacing: 2,
                        }}
                    >
                        PLAY AGAIN
                    </Button>
                </Stack>
            )}
        </Stack>
    );
}