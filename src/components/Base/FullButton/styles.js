import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import { width } from '../../../constants/theme'
import { colors } from '../../../constants/colors'

export const ButtonContainer = styled(TouchableOpacity)`
  width: ${width / 1.1}px;
  height: ${width / 7}px;
  border-radius: 10px;
  background-color: red;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.darkgrey};
  font-family: 'Poppins-Regular';
`;