import { Box, Button, Stack, Typography } from "@mui/material";
import Jogada from "./Jogada";
import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg'
import { useEffect, useState } from "react";

export default function Jogo({ setEscolha, escolha }) {
    const icons = {
        papel: iconPaper,
        pedra: iconRock,
        tesoura: iconScissors
    };
    const cores = {
        papel: 'hsl(230, 89%, 62%)',
        pedra: 'hsl(349, 71%, 52%)',
        tesoura: 'hsl(39, 89%, 49%)'
    }

    let visivelADV = 'hidden'
    const [selecionado, setSelecionado] = useState('');
    const aleatorizador = (event) => {
        const nomes = ['papel', 'pedra', 'tesoura'];
        const timer = setTimeout(() => {
            const indiceAleatorio = Math.floor(Math.random() * nomes.length);
            setSelecionado(nomes[indiceAleatorio]);
            visivelADV = 'visible'
        }, 1000);
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        if (escolha && selecionado) {
            if (escolha === selecionado) console.log('empate');    
            else if (
                (escolha === 'papel' && selecionado === 'pedra') ||
                (escolha === 'pedra' && selecionado === 'tesoura') ||
                (escolha === 'tesoura' && selecionado === 'papel')
            ) {
                console.log('vitoria');
            } else {
                console.log('derrota');
            }
        }
    }, [escolha, selecionado]);

    return (
        <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={25}
            mt={10}
        >
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={12}
            >
                <Typography
                    component="h3"
                    color="white"
                    sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 0.85,
                        textTransform: 'uppercase',
                    }}
                >YOU PICKED</Typography>
                <Box
                    sx={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        background: 'black',
                        opacity: 0.2
                    }}
                >
                    <Jogada 
                        nome={escolha} 
                        icon={icons[escolha]} 
                        corBorda={cores[escolha]} 
                        setEscolha={setEscolha} 
                        habilitado={0}
                    />
                </Box>
            </Stack>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={12}
            >
                <Typography
                    component="h3"
                    color="white"
                    sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 0.85,
                        textTransform: 'uppercase',
                    }}
                >THE HOUSE PICKED</Typography>
                <Box
                    sx={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        background: 'black',
                        opacity: 0.2
                    }}
                >
                    <Button
                        onClick={aleatorizador}
                    >
                        <Box
                            sx={{
                                visibility: visivelADV
                            }}
                        >
                            {selecionado &&
                                <Jogada 
                                    nome={selecionado} 
                                    icon={icons[selecionado]} 
                                    corBorda={cores[selecionado]} 
                                    setEscolha={setEscolha} 
                                    habilitado={0}
                                />
                            }
                        </Box>
                    </Button>
                </Box>
            </Stack>
        </Stack>
    );
}