import { useMediaQuery } from 'react-responsive';
import Typography from '@mui/material/Typography';

type RouteTitleProps = {
    title: string;
};

export default function RouteTitle({ title }: RouteTitleProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <Typography align={'center'} variant={isMobile ? 'h5' : 'h4'}>
            {title}
        </Typography>
    );
}
