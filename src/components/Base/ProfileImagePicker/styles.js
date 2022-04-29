import styled from 'styled-components/native'
import {TouchableOpacity, PixelRatio} from 'react-native'
import { frame } from '../../../constants/theme'
import { colors } from '../../../constants/colors'
export const ButtonContainer = styled(TouchableOpacity)`
  width: ${frame.width / 3}px;
  height: ${frame.width / 3}px;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
    width: ${PixelRatio.getPixelSizeForLayoutSize(60)}px;
    height: ${PixelRatio.getPixelSizeForLayoutSize(60)}px;
    border-radius: ${PixelRatio.getPixelSizeForLayoutSize(50)}px;
    border-width: 8px;
    overflow: hidden;
    border-color: ${colors.shadow2};
`