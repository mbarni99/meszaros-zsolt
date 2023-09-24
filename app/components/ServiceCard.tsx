import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

interface ServiceCardProps {
    description: string;
    image: string;
    title: string;
}

export default function ServiceCard({ description, image, title }: ServiceCardProps) {
    return (
        <Grid md={4} sm={6} p={1} xl={3} xs={12}>
            <Card sx={{ height: '100%' }}>
                <CardMedia sx={{ height: 200 }} image={image} title={title} />
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
