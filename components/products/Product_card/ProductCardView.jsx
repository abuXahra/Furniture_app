import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constant'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message';


const ProductCardView = ({item}) => {
  const addClickFun = () =>{
  
    
    Toast.show({
      type: 'success',  // Type of the toast (success, error, info, etc.)
      position: 'bottom', // Position of the toast (top, bottom, center)
      text1: `${item.title} added to cart`, // The main message
      text2: 'You can proceed to checkout.', // Optional secondary message
      visibilityTime: 3000, // Duration for the toast visibility (3 seconds)
    });
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
              onPress={addClickFun}
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