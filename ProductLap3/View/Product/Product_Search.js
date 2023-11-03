import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Item = ({eachData}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: 10,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product Detail</Text>
      <Card>
        <Card.Cover source={{uri: eachData.thumbnail}} />
      </Card>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{fontSize: 50}}>Title: {eachData.title}</Text>
        <Text>Description: {eachData.description}</Text>
        <Text>Price: ${eachData.price}</Text>
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

const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';

  const handleValueChange = text => {
    setValue(text);
  };

  const searchProduct = () => {
    if (value != '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        console.log(d);
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Search Products</Text>
      <TextInput onChangeText={handleValueChange} />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => searchProduct(value)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>SEARCH</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => <Item eachData={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Product_Search;
