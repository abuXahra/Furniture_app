import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { Carousel, Headings, ProductRow, Welcome } from '../../components'
import axios from "axios";

const Home = () => {

  return (
    <SafeAreaView>
      
      {/* AppBar Wrapper */}
      <View style={styles.appBarWrapper}>
         {/* AppBar*/}
          <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24}/>
            <Text style={styles.location}>Abuja Nigeria</Text>
            <View style={{alignItems: 'flex-end'}}>
                <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}>10</Text>
                </View>
                <TouchableOpacity>
                  <Fontisto name='shopping-bag' size={24}/>
                </TouchableOpacity>
            </View>
          </View>
      </View>

      {/* other components  using vertical scroll view*/}
          <ScrollView>
          
            {/* Welcome */}
            <Welcome/>

            {/* home banner slider */}
            <Carousel/>

            {/* Newly Arrival Items Heading*/}
            <Headings/>

            {/* Newly Arrival Items */}
            <ProductRow/>
            
            {/* empty space */}
            <View style={styles.verticalSpacing}/>
          </ScrollView>
    </SafeAreaView>
  )
}

export default Home

