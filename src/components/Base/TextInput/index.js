import React, {useEffect, useState} from 'react';
import {TextInput, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../../constants/colors';
import {frame} from '../../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';

const Input = ({
  placeholder,
  onChangeText,
  KeyboardType,
  password,
  onFocus,
  value,
  onBlur,
  error,
  margin,
  ...props
}) => {
  const val = useSharedValue(0);
  const [secureText, setSecureText] = useState(true);

  useEffect(() => {
    if (error) {
      val.value = withSequence(
        withTiming(-20, {duration: 50}),
        withRepeat(withTiming(20, {duration: 200}), 5, true),
        withTiming(0, {duration: 50}),
      );
    }
  }, [error]);

  const shake = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(val.value)}],
    };
  });

  return (
    <Animated.View style={[{marginVertical: margin ?? 0}, shake]}>
      {!!error && (
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
          }}>
          {error}
        </Text>
      )}
      <Neomorph
        darkShadowColor={colors.shadow1}
        lightShadowColor={colors.shadow2}
        inner
        style={{
          width: frame.width / 1.1,
          backgroundColor: colors.neomorph,
          borderWidth: !!error ? 1 : 0,
          borderColor: 'red',
          shadowRadius: 3,
          shadowOffset: {width: 3, height: 3},
          shadowOpacity: 1,
          height: frame.width / 7,
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: frame.width / 9,
        }}>
        <TextInput
          style={{width: '100%', height: '100%', fontFamily: 'Poppins-Regular', color: colors.textColor}}
          placeholderTextColor={colors.textColor}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={password && secureText}
          value={value}
          {...props}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setSecureText(prev => !secureText)}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Feather
              name={secureText ? 'eye' : 'eye-off'}
              size={20}
              color={colors.darkgrey}
            />
          </TouchableOpacity>
        )}
      </Neomorph>
    </Animated.View>
  );
};

export default Input;
