import React, {Component} from 'react'
import './App.css';
import {ThemeProvider} from '@material-ui/styles';
import light from './themes/light';

import Screens from "./screens";
import { Provider } from "react-redux";
import { store } from "./utils/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={light}>
                    <Screens />
                </ThemeProvider>
            </Provider>
        );
    }

}

export default App;
