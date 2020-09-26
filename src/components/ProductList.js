import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const url = 'https://simple-ecommerce-9999.herokuapp.com/api/v1/product';

    console.log('Request to', url);

    axios
      .get(url)
      .then(({data}) => {
        console.log('Result', data);
        this.setState({products: data.data});
      })
      .catch((error) => {
        console.log('Error', error.message);
      });
  }

  renderProducts() {
    return this.state.products.map((product) => (
      <Text key={product.id}>{product.name}</Text>
    ));
  }

  render() {
    return <View>{this.renderProducts()}</View>;
  }
}

export default ProductList;
