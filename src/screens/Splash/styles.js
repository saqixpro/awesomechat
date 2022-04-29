import styled from 'styled-components/native'
import { colors } from '../../constants/colors'
import { frame } from '../../constants/theme'
import {ImageBackground} from 'react-native'

export const Container = styled(ImageBackground)`
  flex: 1;
  background-color: ${props => props.bg || colors.background};
`;

export const ImageContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: ${frame.width / 1.2}px;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Image = styled.Image`
  aspect-ratio: ${4 / 3};
  height: ${frame.height / 3}px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${props => props.color || colors.darkgrey};
  font-size: ${props => props.fontSize || 14}px;
  font-weight: ${props => props.fontWeight || 'normal'};
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  text-align: center;
`;

export const Filter = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.8);
`