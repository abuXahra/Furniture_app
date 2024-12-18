

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newRivals.style'
import { Ionicons } from '@expo/vector-icons'
import { ProductList } from '../../components'




const NewRivals = ({navigation}) => {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* upper row */}
            <View style={styles.upperRow}>        
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons 
                  name='chevron-back-circle' 
                  size={30} 
                  color={'white'}
                />
            </TouchableOpacity>
            <Text style={styles.heading}>Product</Text>
          </View>
        {/* upper row ends */}

        {/* Product List */}
        <ProductList/>
      </View>
    </SafeAreaView>

  )
}

export default NewRivals;
