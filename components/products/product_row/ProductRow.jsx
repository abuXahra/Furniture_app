

import { View, Text, FlatList, ActivityIndicator} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constant'
import styles from './productRow.style'
import ProductCardView from '../Product_card/ProductCardView'
import useFetch from '../../../hook/useFetch'

const ProductRow = () => {
  const {data, isLoading, error} = useFetch()
    const products = [1, 2, 3]
  return (
    <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
        ): error ? (
          <Text>{error}</Text>
        ): (
          <FlatList
              data={data}
              keyExtractor={(item)=>item._id}
              horizontal
              contentContainerStyle={styles.listStyle}
              renderItem={({item}) => <ProductCardView item={item}/> }
          />
        )}
    </View>

  )
}

export default ProductRow


