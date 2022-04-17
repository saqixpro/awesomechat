import React from 'react'
import Animated, {FadeIn, Layout} from 'react-native-reanimated';
import {colors} from '../../../constants/colors';
import {BtnText, ButtonContainer} from './styles';
import {Neomorph} from 'react-native-neomorph-shadows';
import {width} from '../../../constants/theme';

const FullButton = ({title, onPress, ...props}) => {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <Neomorph
        darkShadowColor={colors.shadow1}
        lightShadowColor={colors.shadow2}
        style={{
          backgroundColor: colors.neomorph,
          shadowRadius: 10,
          shadowOpacity: 1,
          width: width / 1.1,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: width / 7,
          shadowOffset: {
            width: 8,
            height: 8,
          },
        }}>
        <Animated.View entering={FadeIn} layout={Layout.springify()}>
          <BtnText>{title}</BtnText>
        </Animated.View>
      </Neomorph>
    </ButtonContainer>
  );
};

export default FullButton;