import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Button, Card} from 'react-native-paper';

const Item = ({eachData}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: 10,
      }}>
      <Card>
        <Card.Cover source={{uri: eachData.thumbnail}} />
      </Card>
      <View style={{left: 10, flex: 1, flexDirection: 'column'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          Title: {eachData.title}
        </Text>
        <Text>Description: {eachData.description}</Text>
        <Text>Price: ${eachData.price}</Text>
        <Text>Discount: {eachData.discountPercentage}%</Text>
        <Text>Rating: {eachData.rating}</Text>
        <Text>Stock: {eachData.stock}</Text>
        <Text>Brand: {eachData.brand}</Text>
        <Text>Category: {eachData.category}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            title="Delete"
            style={{
              backgroundColor: 'indigo',
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Delete
            </Text>
          </Button>
          <Button
            title="Cancel"
            style={{
              backgroundColor: 'indigo',
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Cancel
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const Product_Detail = () => {
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
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Product Detail</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Item eachData={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Product_Detail;
