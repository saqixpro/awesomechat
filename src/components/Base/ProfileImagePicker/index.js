import React from 'react'
import Animated, {FadeIn, Layout} from 'react-native-reanimated';
import {colors} from '../../../constants/colors';
import {Image, ButtonContainer} from './styles';
import {Neomorph} from 'react-native-neomorph-shadows';
import {frame} from '../../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import assets from '../../../assets';

const ProfileImagePicker = ({image, onPress, ...props}) => {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <Neomorph
        darkShadowColor={colors.shadow1}
        lightShadowColor={colors.shadow2}
        style={{
          backgroundColor: colors.neomorph,
          shadowRadius: 3,
          borderRadius: frame.width,
          shadowOpacity: 1,
          width: frame.width / 2,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: frame.width / 2,
          shadowOffset: {
            width: 5,
            height: 5,
          },
        }}>
            {
                <Image source={image ? {uri: image} : assets.AVATAR} />
            }
      </Neomorph>
    </ButtonContainer>
  );
};

export default ProfileImagePicker;