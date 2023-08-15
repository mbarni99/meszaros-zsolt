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
        primary: { light: 'daf569', main: '#b9df47', dark: '#96cc29' },
        secondary: { light: '#b3f2e7', main: '#73e6d3', dark: '#6cb' },
    },
});

export default theme;
