import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constant'
import styles from './search.style';
import axios from 'axios'
import { apiUrl } from '../../config/api'

const Search = () => {

  const [searchKey, setSearchKey] = useState('');
  
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchKey)
  console.log(searchResult[0])

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/search/${searchKey}`)
      setSearchResult(res.data)
      setSearchKey("")
    } catch (error) {
      console.log(error)
    }
  }

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
                value={searchKey}
                onChangeText={setSearchKey}
                placeholder='what are you looking for'
                style={styles.searchInput}
              />
          </View>
          
          {/*search button  */}
          <View>
            <TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
                <Feather name='search' size={SIZES.xLarge} color={COLORS.white} />
            </TouchableOpacity>
          </View>
      </View>
      

   {/* search result components */}

        <View style={styles.searchResultContainer}>
          {searchResult.length === 0 ? (
                <View style={{flex: 1}}>
                  <Image
                    source={}
                    style={styles.searchImage}
                  />
                </View>
              
              ):(
                <View>
                  <FlatList
                    data={searchResult}
                    renderItem={({item})=> <Text>{item.title}</Text>}
                  />
                </View>
              )}
      </View>
      
    </SafeAreaView>
  )
}

export default Search


// THE TOW WILL WORK FOR INPUT
// onChangeText={(text)=>setSearchKey(text)} 
// or 
// onChangeText={setSearchKey} 

