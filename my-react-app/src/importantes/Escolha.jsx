import { Stack, Box } from '@mui/material'
import Jogada from './Jogada.jsx';

import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg'
import triangulo from '../../images/bg-triangle.svg'

export default function Escolha({ setEscolha, visibilidade }) {
    return (
        <Stack
            visibility={visibilidade}
            justifyContent='center'
            alignItems='center'
            sx={{
                position: 'relative',
                backgroundImage: `url("${triangulo}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '70%', 
                width: '100%',
                maxWidth: '450px',
                height: '400px',
                margin: '0 auto',
            }}
        >
            <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
                <Jogada 
                    nome={'papel'} 
                    icon={iconPaper} 
                    corBorda={'hsl(230, 89%, 62%)'} 
                    setEscolha={setEscolha} 
                    habilitado={1}
                />
            </Box>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <Jogada 
                    nome={'tesoura'} 
                    icon={iconScissors} 
                    corBorda={'hsl(39, 89%, 49%)'} 
                    setEscolha={setEscolha} 
                    habilitado={1}
                />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                <Jogada 
                    nome={'pedra'} 
                    icon={iconRock} 
                    corBorda={'hsl(349, 71%, 52%)'} 
                    setEscolha={setEscolha} 
                    habilitado={1}
                />
            </Box>
        </Stack>
    );
}