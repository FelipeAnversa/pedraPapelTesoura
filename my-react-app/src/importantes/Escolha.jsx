import { Stack, Box } from '@mui/material'
import Jogada from './Jogada.jsx';

import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg'
import triangulo from '../../images/bg-triangle.svg'

export default function Escolha({ setEscolha, visivelEscolha, setVisivelEscolha, cores }) {
    const containerSize = { xs: '300px', sm: '400px', md: '500px' };

    return (
        <Stack
            sx={{
                display: visivelEscolha === 'visible' ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 20, md: 0 },
                position: 'relative',
                backgroundImage: `url("${triangulo}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: { xs: '70%', md: '75%' }, 
                width: '100%',
                maxWidth: containerSize,
                height: containerSize, 
                margin: '0 auto',
            }}
        >
            <Box sx={{ 
                position: 'absolute', 
                top: { xs: '-20px', md: '0' }, 
                left: { xs: '-20px', md: '0' } 
            }}>
                <Jogada 
                    nome={'papel'} 
                    icon={iconPaper} 
                    corBorda={cores.blue.main} 
                    setEscolha={setEscolha} 
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1}
                />
            </Box>
            <Box sx={{ 
                position: 'absolute', 
                top: { xs: '-20px', md: '0' }, 
                right: { xs: '-20px', md: '0' } 
            }}>
                <Jogada 
                    nome={'tesoura'} 
                    icon={iconScissors} 
                    corBorda={cores.gold.main} 
                    setEscolha={setEscolha} 
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1}
                />
            </Box>
            <Box sx={{ 
                position: 'absolute', 
                bottom: { xs: '20px', md: '40px' }, 
                left: '50%', 
                transform: 'translateX(-50%)' 
            }}>
                <Jogada 
                    nome={'pedra'} 
                    icon={iconRock} 
                    corBorda={cores.red.main} 
                    setEscolha={setEscolha} 
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1}
                />
            </Box>
        </Stack>
    );
}