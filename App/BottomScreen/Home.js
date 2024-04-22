import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Product from './Product';

import MaterialCommunityIcons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import AppColors from '../common/AppColor';
import AppStyle from '../common/AppStyle';
import ProgressDialog from '../components/ProgressDialog';
import { axiosGet } from '../network/ApiCalling';
const Home = () => {
  const [products, setProducts] = useState(null)
  const [tempProducts, setTempProducts] = useState(null)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [reFreshshing, setRefreshing] = useState(false)
  const cartItems = useSelector((state) => state.reducer)
 
  useEffect(() => {
    getData()

  }, [])
  const getData = async () => {
    try {
      setIsLoading(true)
      const data = await axiosGet()
      setProducts(data)
      setTempProducts(data)
      if (cartItems && cartItems.length) {
        products.forEach(item => {
          cartItems.forEach(element => {
            if (element.id == item.id) {
              setIsAdded(true)
            }
          });
        })
      }
      setRefreshing(false)
      setIsLoading(false)

    } catch (error) {

    }
  }
  const handleRefresh = () => {
    setRefreshing(true)
    getData()
  }
  const SearchFilterFunction = async (searchtxt) => {
    setSearch(searchtxt)
    console.log(searchtxt);
    if (searchtxt.trim() != '') {
      let arry = await tempProducts.filter(item =>
        item.id?.toString().match(searchtxt) ||
        item.title?.toString().toLowerCase().match(searchtxt.toLowerCase().trim())
      )
      setProducts(arry)
    } else {
      setProducts(tempProducts)
    }

  }
  return (

    <SafeAreaView style={AppStyle.componentStyle.container}>
      <View style={{ backgroundColor: AppColors.ghostWhite }}>
        {ProgressDialog.CustomProgressBar(isLoading)}

        <View style={AppStyle.componentStyle.searchComp}>
          <MaterialCommunityIcons name="search" color={AppColors.accentDark} size={26} style={{}} />
          <TextInput
            placeholderTextColor={AppColors.placeholderColor}
            style={{ color: AppColors.black, }}
            onChangeText={(search) => SearchFilterFunction(search)}
            value={search}
            placeholder={"Search by ID or Title"}
          />
        </View>
        <FlatList
          data={products}
          refreshing={reFreshshing}
          onRefresh={() => handleRefresh()}
          renderItem={(item) => {
            return (
              <View style={AppStyle.componentStyle.cardView}>
                <Product items={item} />
              </View>
            )
          }}
          ListEmptyComponent={
            <View
              style={AppStyle.componentStyle.emptyList}>
              <Text
                style={{ color: AppColors.placeholderColor, fontSize: 20 }}>
                No Item
              </Text>
            </View>
          }
          
          key={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})
export default Home