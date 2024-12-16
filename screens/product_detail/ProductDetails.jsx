import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style';
import { Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constant';


const ProductDetails = ({navigation}) => {

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
        source={{uri: 'https://img.kwcdn.com/product/open/2024-10-11/1728621589031-8ef8b6a3a74b4803ab1a4be04bf0018d-goods.jpeg?imageView2/2/w/800/q/70/format/webp'}}
        style={styles.image}
      />

      {/* detail */}
      <View style={styles.details}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>Product</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>N78.89</Text> 
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
            <Text style={styles.descText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quae consectetur ea eos culpa praesentium quaerat ipsam nemo. Cupiditate nam molestiae reprehenderit laborum vitae atque sed aliquid accusamus necessitatibus totam neque provident, aliquam sapiente eligendi fugit tenetur! Excepturi cumque debitis dignissimos nemo ipsam, totam itaque dolores, quas velit doloremque officia.</Text>
      </View>


      {/* Location */}
      <View style={{marginBottom: SIZES.small}}>
        <View style={styles.location}>
            <View style={styles.locationInner}>
              <Ionicons name='location-outline' size={20}/>
              <Text>Mabushi, Abuja</Text>
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