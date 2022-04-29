import { colors } from "./colors";
import {Dimensions} from'react-native';

const screen = Dimensions.get("screen");

export const theme = {
    dark: {
        text: colors.lightgrey,
        accent: colors.deepblue,
        background: colors.darkgrey
    },

    light: {
            background: colors.icewhite,
            accent: colors.deepblue,
            text: colors.darkgrey
        }
};

const {width, height} = screen;

export const frame = {width, height};