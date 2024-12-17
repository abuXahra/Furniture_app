import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constant'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = ({item}) => {
  const addClickFun =() =>{
    alert('added to cart')
  }

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', {item})}>
       <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: item.imgUrl}}
                    style={styles.image}
                />
            </View>

            <View style={styles.detail}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.supplier}>{item.supplier}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>

            <TouchableOpacity 
            onPress={()=>{}}
            style={styles.addBtn}>
                <Ionicons
                  name='add-circle'
                  size={35}
                  color={COLORS.primary}
                />
            </TouchableOpacity>

        </View>
    </TouchableOpacity>

  )
}

export default ProductCardView