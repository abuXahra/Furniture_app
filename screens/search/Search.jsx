import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constant'
import styles from './search.style';

const Search = () => {

  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView>
      
      {/* search container */}
      <View style={styles.searchContainer}>
          
          {/* search icon */}
          <TouchableOpacity>
              <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
          </TouchableOpacity>

          {/* search input wrapper*/}
          <View style={styles.searchWrapper}>
              <TextInput
                value={searchText}
                onChangeText={(text)=>setSearchText(text)}
                onPressIn={()=>{}}
                placeholder='what are you looking for'
                style={styles.searchInput}
              />
          </View>
          
          {/*search button  */}
          <View>
            <TouchableOpacity onPress={()=>setSearchText('')} style={styles.searchBtn}>
                <Feather name='search' size={SIZES.xLarge} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          
      </View>
      
    </SafeAreaView>
  )
}

export default Search