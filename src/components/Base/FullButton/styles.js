import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import { width } from '../../../constants/theme'
import { colors } from '../../../constants/colors'

export const ButtonContainer = styled(TouchableOpacity)`
    width: ${width / 1.1}px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.bg || colors.deepblue};
    align-items: center;
    justify-content: center;
`

export const BtnText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.icewhite};
`