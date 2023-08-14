import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

const theme = createTheme({
    components: {
        MuiLoadingButton: {
            defaultProps: { fullWidth: true, variant: 'contained' },
            styleOverrides: { root: { borderRadius: '20px' } },
        },
        MuiTextField: { defaultProps: { fullWidth: true, margin: 'dense', size: 'small' } },
    },
    palette: {
        primary: { main: '#663399' },
        secondary: { main: '#E6E6FA' },
    },
});

export default theme;
