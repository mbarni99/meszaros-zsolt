import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

export default function Index() {
    return (
        <Grow in={true}>
            <Grid p={2} xs={12}>
                <Typography variant={'h4'}>Győrben és Győr vonzáskörzetében</Typography>
                <Grid paddingY={2} xs={12} />
                <Typography color={'text.secondary'} variant={'h6'}>
                    Napelem rendszerek kivitelezése (akkumulátor/autótöltő/hőszivattyú csatlakoztatása igény szerint)
                </Typography>
                <Typography color={'text.secondary'} variant={'h6'}>
                    Régi és új házak, lakások teljes körű villanyszerelése
                </Typography>
                <Typography color={'text.secondary'} variant={'h6'}>
                    Elektromos autótöltők üzembehelyezése
                </Typography>
                <Typography variant={'h6'}>Keressen minket bizalommal!</Typography>
            </Grid>
        </Grow>
    );
}
