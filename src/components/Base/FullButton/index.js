import React from 'react'
import Animated, {FadeIn, Layout} from 'react-native-reanimated';
import {colors} from '../../../constants/colors';
import {BtnText, ButtonContainer} from './styles';
import {Neomorph} from 'react-native-neomorph-shadows';
import {frame} from '../../../constants/theme';

const FullButton = ({title, textColor, background, onPress, ...props}) => {
  return (
    <ButtonContainer background={background} onPress={onPress} {...props}>
      <Neomorph
        darkShadowColor={colors.shadow1}
        lightShadowColor={colors.shadow2}
        style={{
          backgroundColor: background ?? colors.neomorph,
          shadowRadius: 3,
          borderRadius: 10,
          shadowOpacity: 1,
          width: frame.width / 1.1,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: frame.width / 7,
          shadowOffset: {
            width: 3,
            height: 3,
          },
        }}>
        <Animated.View entering={FadeIn} layout={Layout.springify()}>
          <BtnText color={textColor}>{title}</BtnText>
        </Animated.View>
      </Neomorph>
    </ButtonContainer>
  );
};

export default FullButton;