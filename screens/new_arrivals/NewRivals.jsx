


import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './newRivals.style'



const NewRivals = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}></View>
      </View>
    </SafeAreaView>

  )
}

export default NewRivals;