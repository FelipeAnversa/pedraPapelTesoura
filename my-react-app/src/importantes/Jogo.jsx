import { Stack, Typography } from "@mui/material";

export default function Jogo() {
    return (
        <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={10}
        >
            <Stack
                direction='column'
            >
                <Typography>YOU PICKED</Typography>
            </Stack>
            <Stack
                direction='column'
            >
                <Typography>THE HOUSE PICKED</Typography>
            </Stack>
        </Stack>
    );
}