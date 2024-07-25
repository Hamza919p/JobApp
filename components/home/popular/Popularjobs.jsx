import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter()
  let isLoading = false;
  let error = false;

  return (
    <View style = { styles.container } >

      {/* Header */}
      <View style = { styles.header } >
        <Text style = { styles.headerTitle } >Popular Jobs</Text>
        <TouchableOpacity>
          <Text style = { styles.headerBtn }>Show All</Text>
        </TouchableOpacity>
      </View>


      {/* FlatList */}
      <View style = { styles.cardsContainer } >
        {
          isLoading ? (
            <ActivityIndicator size={"large"} colors={COLORS.primary}/>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList 
              data = { [1,2,3,4,5] }
              renderItem={ ( {item} )=> (
                <PopularJobCard item = {item}/>
              ) } 
              // keyExtractor={item => item?.job_id}
              contentContainerStyle = { { columnGap : SIZES.medium } }
              horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs