import React, { useEffect, useState } from 'react'
import { theme } from '../constants/theme'

const useThemeColors = (_theme) => {
    const [themeColor, setThemeColor] = useState(theme.light);

    useEffect(() => {
       if(theme == 'light' || theme == 'dark')
        setThemeColor(prev => theme[_theme]);
    }, [_theme])

    return themeColor;

}

export default useThemeColors;