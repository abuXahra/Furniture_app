import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style';
import { Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constant';
import { useRoute } from '@react-navigation/native';


const ProductDetails = ({navigation}) => {

  const route = useRoute();
  const {item} = route.params;


  // const navigation = useNavigation();
  const [counter, setCounter] = useState(1);

  const  counterHandler= (type)=>{
      if(type === 'increment'){
        setCounter(counter+1)
      }else if(type === 'decrement'){
        if(counter > 1){
          setCounter(counter-1)
        }
      }
  }


  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} color={'black'}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={COLORS.primary}/>
        </TouchableOpacity>        
      </View>

      {/* product Image */}
      <Image
        source={{
          uri: item.imgUrl,
        }}
        style={styles.image}
      />

      {/* detail */}
      <View style={styles.details}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>N{item.price}</Text> 
            </View>
        </View>
      </View>

{/* rating */}
      <View style={styles.ratingRow}>
         <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => (
                <Ionicons 
                  key={index} 
                  name='star' 
                  color={'orange'}
                  size={20}
                />
            ))}
         </View>

         
         <View style={styles.rating}>
            <TouchableOpacity onPress={()=>counterHandler('increment')}>
              <SimpleLineIcons 
                name='plus'
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{counter}</Text>
            <TouchableOpacity onPress={()=>counterHandler('decrement')}>
              <SimpleLineIcons 
                name='minus'
                size={20}
              />
            </TouchableOpacity>
         </View>
      </View>
      
      {/* Description */}
      <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <ScrollView>
              <Text style={styles.descText}>
                {item.description}
               </Text>
            </ScrollView>
      </View>


      {/* Location */}
      <View style={{marginBottom: SIZES.small}}>
        <View style={styles.location}>
            <View style={styles.locationInner}>
              <Ionicons name='location-outline' size={20}/>
              <Text>{item.location}</Text>
            </View>

            <View style={styles.locationInner}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
              <Text>Free Delivery</Text>
            </View>              
        </View>
      </View>
      {/* Location End*/}

      {/* Cart Row*/}
      <View style={styles.cartRow}>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
              <Fontisto
                name='shopping-bag'
                size={15}
                color={COLORS.white}
              />
          </TouchableOpacity>
      </View>
      {/* Cart Row End*/}

    </View>
  )
}

export default ProductDetails;