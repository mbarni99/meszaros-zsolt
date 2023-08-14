import { MouseEvent, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface ScrollTopButtonProps {
    children: ReactElement;
}

export default function ScrollTopButton({ children }: ScrollTopButtonProps) {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) anchor.scrollIntoView({ block: 'center' });
    };

    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} role={'presentation'} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Fade>
    );
}
