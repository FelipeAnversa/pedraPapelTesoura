import { Box, Button, Stack, Typography } from "@mui/material";
import Jogada from "./Jogada";
import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg';
import { useEffect, useState } from "react";

export default function Jogo({ escolha, setVisivelEscolha, setScore, score }) {
    const icons = { 
        papel: iconPaper, 
        pedra: iconRock, 
        tesoura: iconScissors 
    };
    const cores = {
        papel: 'hsl(230, 89%, 62%)',
        pedra: 'hsl(349, 71%, 52%)',
        tesoura: 'hsl(39, 89%, 49%)'
    };
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
        if (escolha && selecionado) {
            if (escolha === selecionado) {
                setResultado('DRAW');
            } else if (
                (escolha === 'papel' && selecionado === 'pedra') ||
                (escolha === 'pedra' && selecionado === 'tesoura') ||
                (escolha === 'tesoura' && selecionado === 'papel')
            ) {
                setResultado('YOU WIN');
                setScore(score + 1);
            } else {
                setResultado('YOU LOSE');
                setScore(score - 1);
            }
        }
    }, [escolha, selecionado]);

    const reiniciar = () => {
        setVisivelEscolha('visible');
    }

    return (
        <Stack 
            direction='row' 
            justifyContent='center' 
            alignItems='center' 
            spacing={10} 
            mt={10}
        >
            <Stack 
                alignItems='center' 
                spacing={5}
            >
                <Typography 
                    color="white" 
                    sx={{ 
                        fontWeight: 600, 
                        letterSpacing: 2 
                    }}
                >YOU PICKED</Typography>
                <Jogada 
                    nome={escolha} 
                    icon={icons[escolha]} 
                    corBorda={cores[escolha]} 
                    habilitado={0} 
                />
            </Stack>
            {resultado && (
                <Stack 
                    alignItems='center' 
                    spacing={2}
                >
                    <Typography 
                        color="white" 
                        variant="h3"
                    >{resultado}</Typography>
                    <Button
                        variant="contained"
                        onClick={reiniciar}
                        sx={{
                            p: '20px',
                            color: 'red',
                            background: 'white'
                        }}
                    >
                        PLAY AGAIN
                    </Button>
                </Stack>
            )}
            <Stack 
                alignItems='center' 
                spacing={5}
            >
                <Typography 
                    color="white" 
                    sx={{ 
                        fontWeight: 600, 
                        letterSpacing: 2 
                    }}
                >THE HOUSE PICKED</Typography>
                <Box sx={{
                    borderRadius: '50%',
                    width: '225px',
                    height: '225px',
                    background: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {selecionado ? (
                        <Jogada 
                            nome={selecionado} 
                            icon={icons[selecionado]} 
                            corBorda={cores[selecionado]} 
                            habilitado={0} 
                        />
                    ) : (
                        <Box 
                            sx={{ 
                                width: 225, 
                                height: 225, 
                                borderRadius: '50%', 
                                background: 'rgba(0,0,0,0.2)' 
                            }} 
                        />
                    )}
                </Box>
            </Stack>
        </Stack>
    );
}