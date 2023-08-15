import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Grid container p={2} xs={12}>
            <Typography color={'text.secondary'} variant={'body2'}>
                Icon by <a href="https://freeicons.io/profile/823">Muhammad Haq</a> on <a href="https://freeicons.io">freeicons.io</a>
            </Typography>
        </Grid>
    );
}
