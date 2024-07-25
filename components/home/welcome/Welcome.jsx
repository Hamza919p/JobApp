import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { router } from 'expo-router';
import styles from './welcome.style';
import {COLORS, icons, SIZES } from '../../../constants'

const jobTypes = ['full-time', 'part-time', 'contractor'];

const Welcome = () => {

  const [activeJobType, setActiveJobType] = useState('full-time');

  return (
    <View>

      {/* User Details */}
      <View style = { styles.container }>
        <Text style = { styles.userName }>Hello Hamza!</Text>
        <Text style = { styles.welcomeMessage }>Find your perfect Job</Text>
      </View>

      {/* Search Field */}
      <View style = { styles.searchContainer } >
        <View style = { styles.searchWrapper }>
          <TextInput style = { styles.searchInput } value="" onChange={ ()=>{} } placeholder="What are you looking for?" placeholderTextColor={COLORS.gray} />
        </View>
        <TouchableOpacity style = {styles.searchBtn} onPress={ () => {}}> 
            <Image source={icons.search} resizeMode='contain' style = {styles.searchBtnImage} ></Image>
          </TouchableOpacity>
      </View>

      {/* Horizontal list of job types */}
      <View style = {styles.tabsContainer} >
        <FlatList 
          data = {jobTypes} 
          renderItem = { ( { item } ) => (
            <TouchableOpacity style = {styles.tab(activeJobType, item)} onPress={ ()=> { setActiveJobType(item) } }>
              <Text style = {styles.tabText(activeJobType, item)}> 
                {item} 
              </Text>
            </TouchableOpacity>
          ) } 
          keyExtractor={ item => item }  //this is unique id of a specific item
          contentContainerStyle = { { columnGap: SIZES.small  } }
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome