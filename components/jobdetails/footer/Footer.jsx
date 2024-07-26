import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking, Touchable } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'
import { Link } from 'expo-router'

const Footer = ( {url} ) => {
  console.log(url)
  return (
    <View style = { styles.container } >

      {/* heart button */}
      <TouchableOpacity style = {styles.likeBtn} >
        <Image 
          source={ icons.heartOutline }
          resizeMode='containe'
          style = {styles.likeBtnImage}
        />
      </TouchableOpacity> 


      {/* Send button */}
      <TouchableOpacity style = {styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style = {styles.applyBtnText} >Apply Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer