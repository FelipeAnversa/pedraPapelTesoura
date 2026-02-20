import { Stack, Box } from '@mui/material'
import Jogada from './Jogada.jsx';

import iconPaper from '../../images/icon-paper.svg';
import iconRock from '../../images/icon-rock.svg';
import iconScissors from '../../images/icon-scissors.svg'
import iconLizard from '../../images/icon-lizard.svg'
import iconSpock from '../../images/icon-spock.svg'

import pentagono from '../../images/bg-pentagon.svg'

export default function Escolha({ setEscolha, visivelEscolha, setVisivelEscolha, cores }) {
    const containerSize = { xs: '270px', sm: '400px', md: '450px' };

    return (
        <Box
            sx={{
                display: visivelEscolha === 'visible' ? 'block' : 'none',
                position: 'relative',
                width: containerSize,
                height: containerSize,
                margin: '100px auto 0', 
                backgroundImage: `url("${pentagono}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
            }}
        >
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: '0%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)' 
                }}
            >
                <Jogada 
                    nome='tesoura' 
                    icon={iconScissors} 
                    corBorda={cores.gold.main} 
                    setEscolha={setEscolha}
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1} 
                />
            </Box>
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: '35%', 
                    left: '0%', 
                    transform: 'translate(-30%, -50%)' 
                }}
            >
                <Jogada 
                    nome='spock' 
                    icon={iconSpock} 
                    corBorda={cores.lightBlue.main} 
                    setEscolha={setEscolha}
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1} 
                />
            </Box>
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: '35%', 
                    right: '0%', 
                    transform: 'translate(30%, -50%)' 
                }}
            >
                <Jogada 
                    nome='papel' 
                    icon={iconPaper} 
                    corBorda={cores.blue.main} 
                    setEscolha={setEscolha}
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1} 
                />
            </Box>
            <Box 
                sx={{ 
                    position: 'absolute', 
                    bottom: '0%', 
                    left: '15%', 
                    transform: 'translate(-50%, 20%)' 
                }}
            >
                <Jogada 
                    nome='lagarto' 
                    icon={iconLizard} 
                    corBorda={cores.purple.main} 
                    setEscolha={setEscolha}
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1} 
                />
            </Box>
            <Box 
                sx={{ 
                    position: 'absolute', 
                    bottom: '0%', 
                    right: '15%', 
                    transform: 'translate(50%, 20%)' 
                }}
            >
                <Jogada 
                    nome='pedra' 
                    icon={iconRock} 
                    corBorda={cores.red.main} 
                    setEscolha={setEscolha}
                    visivelEscolha={visivelEscolha}
                    setVisivelEscolha={setVisivelEscolha}
                    habilitado={1} 
                />
            </Box>
        </Box>
    );
}