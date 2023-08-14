import { MouseEvent, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface ScrollTopButtonProps {
    children: ReactElement;
}

export default function ScrollTopButton({ children }: ScrollTopButtonProps) {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#appbar');
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 64.03 });

    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} role={'presentation'} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Fade>
    );
}
