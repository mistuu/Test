import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppColors from '../common/AppColor'
import AppStyle from '../common/AppStyle'
const FavoritSc = (props) => {
  const cartData = useSelector((state) => state.reducer)
  const [cartItems, setCartItems] = useState(null)

  useEffect(() => {
    setCartItems(cartData)
  }, [cartData])

  return (
    <SafeAreaView style={AppStyle.componentStyle.container}>
      <View style={{backgroundColor:AppColors.ghostWhite}}>
        <FlatList
          data={cartItems}
          renderItem={(item) => {
            return (
              <View style={[AppStyle.componentStyle.cardView,{alignItems:'center'}]}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <View style={{ alignItems: 'center' }}>

                    <Image source={{ uri: item.item?.url }}
                      style={AppStyle.componentStyle.imageStyle} />
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontSize: 25, color: AppColors.black }}>{"ID: " + item.item?.id}</Text>
                      <Text style={{ fontSize: 25, color: AppColors.black }}>{"Title: " + item.item?.title}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}
          ListEmptyComponent={
            <View
              style={AppStyle.componentStyle.emptyList}>
              <Text
                style={{ color: AppColors.placeholderColor, fontSize: 20 }}>
                No Favorite Item
              </Text>
            </View>
          }
          key={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
export default FavoritSc