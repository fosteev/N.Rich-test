import React, {Component} from 'react'
import './App.css';
import {ThemeProvider} from '@material-ui/styles';
import light from './themes/light';

import Screens from "./screens";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={light}>
                    <Screens />
            </ThemeProvider>
        );
    }

}

export default App;
