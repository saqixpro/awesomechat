import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'

const MainNav = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default MainNav;