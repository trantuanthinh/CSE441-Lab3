import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';

const Item = ({eachData}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 150, height: 150}}
        source={{
          uri: eachData.thumbnail,
        }}
      />
      <View style={{left: 10, flex: 1, flexDirection: 'column'}}>
        <Text>Title: {eachData.title}</Text>
        <Text>Description: {eachData.description}</Text>
        <Text>Price: {eachData.price}</Text>
        <Text style={{color: 'green'}}>
          Discount: {eachData.discountPercentage} off
        </Text>
        <Text>Rating: {eachData.rating}</Text>
        <Text>Stock: {eachData.stock}</Text>
        <Text>Brand: {eachData.brand}</Text>
        <Text>Category: {eachData.category}</Text>
      </View>
    </View>
  );
};

const ProductList = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    //Alert.alert(filePath)
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then(d => {
        // console.log(d);
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Item eachData={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};
export default ProductList;
