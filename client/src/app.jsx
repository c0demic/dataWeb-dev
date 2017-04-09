import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createBrowserHistory, router} from 'react-router';
import BasicExample from './components/RouteTemplate.js';
ReactDom.render(
        (<MuiThemeProvider muiTheme={getMuiTheme()}>
        {/*<HomePage />*/}
        <BasicExample />
        </MuiThemeProvider>),
        document.getElementById('react-app')
);