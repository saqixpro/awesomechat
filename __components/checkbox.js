import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const CheckBox = ({checked, onChange, title}) => (
    <View style={{marginVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '40%', alignSelf: 'center'}}>
        <Text>{title}</Text>
      <TouchableOpacity onPress={onChange} style={{width: 22, height: 22, borderColor: 'black', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 3}}>
      {checked ? (
      <View style={{width: 22, borderRadius: 3, overflow: 'hidden', height: 22, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
        <Feather name="check" size={18} color="black" />
        </View>
        ) : null}
    </TouchableOpacity>
    </View>
  )

  export default CheckBox