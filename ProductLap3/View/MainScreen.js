import React from 'react';
import {Appbar} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProductList from './Product-List/ProductList';

const MainScreen = () => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.Content title="Product List" />
      </Appbar.Header>
      <ProductList />
      <Appbar
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#f0f0f0',
        }}>
        <Appbar.Content title="Product List" />
      </Appbar>
    </SafeAreaProvider>
  );
};

export default MainScreen;
