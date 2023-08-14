import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

interface ServiceCardProps {
    description: string;
    title: string;
}

export default function ServiceCard({ description, title }: ServiceCardProps) {
    return (
        <Grid md={4} sm={6} xs={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
                {/* <CardMedia alt={image.src} component={'img'} height={'256'} image={image} /> */}
                <CardContent>
                    <Typography component={'div'} gutterBottom variant={'h5'}>
                        {title}
                    </Typography>
                    <Typography color={'text.secondary'}>{description}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
