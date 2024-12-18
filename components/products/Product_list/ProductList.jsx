import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../../hook/useFetch';
import { COLORS, SIZES } from '../../../constant';
import styles from './productList.style';
import ProductCardView from '../Product_card/ProductCardView';

const ProductList = () => {
  const {data, isLoading, error} = useFetch();
  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size={SIZES.xLarge}
          color={COLORS.primary}
        />
      </View>
    );    
  }


  return (
    <View style={styles.container}>
       <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={{gap: 10}} 
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(<ProductCardView item={item}/>)}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={()=><View style={styles.separator}/>}
       />
    </View>
  ) 
}

export default ProductList
