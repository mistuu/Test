import { StyleSheet, Text, TouchableOpacity, FlatList, View, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { addToCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import AppColors from '../common/AppColor';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyle from '../common/AppStyle';

const Product = (props) => {
    const products = props.items.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        console.log(item);
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        console.log(item);
        dispatch(removeFromCart(item.id))
    }
    useEffect(() => {
        let result = cartItems.filter(element => {
            return element.id == products.id
        })
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])


    return (
        <View style={{alignItems:'center', padding: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <View style={{ alignItems: 'center' }}>

                    <Image source={{ uri: products?.url }}
                        style={AppStyle.componentStyle.imageStyle} />
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize: 25, color: AppColors.black }}>{"ID: "+products?.id}</Text>
                        <Text style={{ fontSize: 25, color: AppColors.black }}>{"Title: "+products?.title}</Text>
                    </View>
                </View>

            </View>
                {
                    isAdded ?
                        <TouchableOpacity onPress={() => handleRemoveFromCart(products)} style={AppStyle.componentStyle.favBtn}>
                            <MaterialCommunityIcons name="star" color={AppColors.colorRed} size={26} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => handleAddToCart(products)} style={AppStyle.componentStyle.favBtn}>
                            <MaterialCommunityIcons name="star" color={AppColors.colorGreen} size={26} />
                        </TouchableOpacity>

                }

        </View>
    )
}

const styles = StyleSheet.create({

})
export default Product