const theme = {
    colors: {
        primary: '#183145',
        primaryLight: '#788AA3',
        primaryDark: '#212121',
        primaryMedium: '#11283a',

        secondary: '#38b3ff',
        background: '#1f1f22',
        surface: '#f5f5f5',
        error: '#d32f2f',

        success: '#388e3c',
        successLight: '#2DD881',
        
        warning: '#fbc02d',

        border: '#e0e0e0',

        light: '#ffffff',

        neutralLowLight: '#b0d4ee',
        neutralLowMedium: '#f1f1f1',
        neutralLowDark: '#c4c4c4',

        greenLowLight: '#dcf6c6'
    },
    darkMode: {
        foregroundRgb: '255, 255, 255',
        backgroundStartRgb: '0, 0, 0',
        backgroundEndRgb: '19, 19, 22',
    },
    spacings: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '64px',
    },
    typography: {
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '24px',
            xxl: '32px',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
        },
        lineHeight: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.4rem',
            lg: '1.6rem',
            xl: '1.8rem',
        },
    },
    borders: {
        radius: {
            none: '0px',
            sm: '4px',
            md: '8px',
            lg: '12px',
            full: '999px',
        },
        width: {
            thin: '1px',
            thick: '2px',
        },
    },
    shadows: {
        sm: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        md: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        lg: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    },
    zIndex: {
        dropdown: 1000,
        modal: 1100,
        tooltip: 1200,
    },
};

export type Theme = typeof theme;

export type ColorsType = keyof Theme['colors'];

export default theme;