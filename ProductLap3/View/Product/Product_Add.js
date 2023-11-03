import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleTitleChange = text => {
    setTitle(text);
  };

  const handleDescriptionChange = text => {
    setDescription(text);
  };

  const handlePriceChange = text => {
    setPrice(text);
  };

  const handleDiscountPercentageChange = text => {
    setDiscountPercentage(text);
  };

  const handleRatingChange = text => {
    setRating(text);
  };

  const handleStockChange = text => {
    setStock(text);
  };

  const handleBrandChange = text => {
    setBrand(text);
  };

  const handleCategoryChange = text => {
    setCategory(text);
  };

  const handleImagesChange = text => {
    setImages(text);
  };

  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'Post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successful');
  };

  return (
    <SafeAreaView>
      <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>
        Add a Product
      </Text>
      <Text style={{fontWeight: 'bold'}}>Title</Text>
      <TextInput onChangeText={handleTitleChange} placeholder="Enter title" />

      <Text style={{fontWeight: 'bold'}}>Description</Text>
      <TextInput
        onChangeText={handleDescriptionChange}
        placeholder="Enter description"
      />

      <Text style={{fontWeight: 'bold'}}>Price</Text>
      <TextInput onChangeText={handlePriceChange} placeholder="Enter price" />

      <Text style={{fontWeight: 'bold'}}>Discount Percentage</Text>
      <TextInput
        onChangeText={handleDiscountPercentageChange}
        placeholder="Enter discount percentage"
      />

      <Text style={{fontWeight: 'bold'}}>Rating</Text>
      <TextInput onChangeText={handleRatingChange} placeholder="Enter rating" />

      <Text style={{fontWeight: 'bold'}}>Stock</Text>
      <TextInput onChangeText={handleStockChange} placeholder="Enter stock" />

      <Text style={{fontWeight: 'bold'}}>Brand</Text>
      <TextInput onChangeText={handleBrandChange} placeholder="Enter brand" />

      <Text style={{fontWeight: 'bold'}}>Category</Text>
      <TextInput
        onChangeText={handleCategoryChange}
        placeholder="Enter category"
      />

      <Text style={{fontWeight: 'bold'}}>Image</Text>
      <TextInput
        onChangeText={handleImagesChange}
        placeholder="Enter images URL(s)"
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => handleSubmit()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddProduct;
