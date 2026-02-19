import { Stack, Typography, Box } from '@mui/material';
import logo from '../../images/logo.svg'

export default function Header({ score }) {
    return (
        <Box
            component="header"
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                p: { xs: 2, sm: 4 },
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    p: { xs: '12px 18px', sm: '18px 24px' },
                    border: '3px solid hsl(217, 16%, 45%)',
                    borderRadius: { xs: '8px', sm: '15px' },
                    width: '100%',
                    maxWidth: '700px',
                }}
            >
                <Box 
                    component='img'
                    src={logo}
                    alt={'logo'}
                    sx={{ 
                        objectFit: 'contain' 
                    }}
                />
                <Stack
                    sx={{
                        bgcolor: "white",
                        width: { xs: 80, sm: 120, md: 150 },
                        height: { xs: 72, sm: 90, md: 110 },
                        borderRadius: { xs: '4px', sm: '8px' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography
                        sx={{
                            color: "hsl(229, 64%, 46%)",
                            letterSpacing: { xs: 1, sm: 2 },
                            fontSize: { xs: 10, sm: 13, md: 16 },
                            fontWeight: 600,
                        }}
                    >
                        SCORE
                    </Typography>
                    <Typography
                        sx={{
                            color: "hsl(229, 25%, 31%)",
                            fontSize: { xs: 40, sm: 50, md: 60 },
                            fontWeight: 700,
                            lineHeight: 1,
                        }}
                    >
                        {score}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}