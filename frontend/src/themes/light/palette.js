import {
    blue,
    green,
    orange,
    red,
    grey
} from '@material-ui/core/colors';

const white = '#FFFFFF';

export default {
    primary: {
        contrastText: white,
        dark: blue[900],
        main: blue[600],
        light: blue[400]
    },
    secondary: {
        contrastText: white,
        dark: '#bd521c',
        main: '#f26c25',
        light: '#d45d20'
    },
    success: {
        contrastText: white,
        dark: green[900],
        main: green[600],
        light: green[400]
    },
    info: {
        contrastText: white,
        dark: blue[900],
        main: blue[600],
        light: blue[400]
    },
    warning: {
        contrastText: white,
        dark: orange[900],
        main: orange[600],
        light: orange[400]
    },
    error: {
        contrastText: white,
        dark: red[900],
        main: red['A200'],
        light: red[400]
    },
    delete: {
        contrastText: white,
        dark: red[900],
        main: red[600],
        light: red[400]
    },
    text: {
        primary: '#436B93',
        secondary: white,
        disable: grey[600]
    },
    background: {

    }
};
