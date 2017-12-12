import React from 'react';
import {cyan500,cyan700,grey400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// http://www.material-ui.com/#/customization/themes

const bro3Theme = getMuiTheme({
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
    },
    appBar: {
        height: 50,
    },
});


export default bro3Theme;