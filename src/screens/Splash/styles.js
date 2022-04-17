import styled from 'styled-components/native'
import { colors } from '../../constants/colors'
import { height, width } from '../../constants/theme'


export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.bg || colors.background};
`;

export const ImageContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: ${width / 1.2}px;
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
  height: ${height / 3}px;
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
`;