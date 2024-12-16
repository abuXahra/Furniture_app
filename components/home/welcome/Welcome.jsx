import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style';
import { COLORS, SIZES } from '../../../constant';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation();
  return (

    <View>
      {/* Welcome title */}
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, 20)}>Find The Most </Text>
        <Text style={styles.welcomeText(COLORS.primary, -20)}>Luxurious Furniture</Text>
      </View>

      {/* search container */}
      <View style={styles.searchContainer}>
          {/* search icon */}
          <TouchableOpacity>
              <Feather name='search' size={24} style={styles.searchIcon}/>
          </TouchableOpacity>

          {/* search input wrapper*/}
          <View style={styles.searchWrapper}>
              <TextInput
                value=''
                onPressIn={()=>navigation.navigate('Search')}
                placeholder='what are you looking for'
                style={styles.searchInput}
              />
          </View>
          
          {/*search button  */}
          <View>
            <TouchableOpacity style={styles.searchBtn}>
                <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.white} />
            </TouchableOpacity>
          </View>
      </View>

    </View>
  )
}

export default Welcome;