import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import { frame } from '../../../constants/theme'
import { colors } from '../../../constants/colors'

export const ButtonContainer = styled(TouchableOpacity)`
  width: ${frame.width / 1.1}px;
  height: ${frame.width / 7}px;
  background-color: ${props => props.background ?? "transparent"};
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color ?? colors.textColor};
  font-family: 'Poppins-Regular';
`;