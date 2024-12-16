import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constant'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Cart</Text>
    </View>
  )
}

export default Cart




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      fontFamily: "extrabold",
      fontSize: 40,
      color: COLORS.primary,
    },
  });
  