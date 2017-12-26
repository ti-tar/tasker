import spacing from 'material-ui/styles/spacing';
import {
    cyan500, cyan700, grey400,
    pinkA200, grey100, grey300, grey500,
    darkBlack, white,
    fullBlack
} from 'material-ui/styles/colors';

import typography from 'material-ui/styles/typography';

import { darken, fade } from 'material-ui/utils/colorManipulator';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

/// -------

export const currentTimeStyles = {
    fontSize: `27px`,
    fontStyle: 'normal',
    color: '#3C40C6',
    paddingTop: '110px'
};

export const paperStyles = {
    display: 'block',
    height: 250,
    width: 250,
    margin: `1em auto`,
    textAlign: 'center',
    zDepth: 1
};

export const taskNameStyles = {
    color: '#7E7E7E'
};

export const taskInputStyles = {
    color: '#3C40C6',
};

// -------


// Общая тема
//
// http://www.material-ui.com/#/customization/themes

const palette = {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: '#3C40C6',
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
};

const more = {
    spacing: spacing,
    //fontFamily: 'Roboto, sans-serif',
    fontFamily: 'Verdana, sans-serif',
    borderRadius: 2,
    palette: palette,
    raisedButton : {
        color: palette.alternateTextColor,
        textColor: palette.textColor,
        primaryColor: palette.primary1Color,
        primaryTextColor: palette.alternateTextColor,
        secondaryColor: palette.accent1Color,
        secondaryTextColor: palette.alternateTextColor,
        disabledColor: darken(palette.alternateTextColor, 0.1),
        disabledTextColor: fade(palette.textColor, 0.3),
        fontSize: 12,
        fontWeight: 'bold'
    },
};

const bro3Theme = getMuiTheme(more);

export default bro3Theme;