import React, { Component } from 'react'
import { View, Text, TextInput,  ScrollView, Alert, TouchableOpacity} from 'react-native'
import { styles } from './styles';

//MD ABDUR RAHMAN (1639233)
const gst= 0.06; // project required 6% GST

class Inputs extends Component {
    
    constructor(){
        super()
        this.state = {
            amount : '',
            discount : '',
            ProductDescription: '', 
            Quantity : '', 
            discountPrice: '100',
            showDiscountPrice: false,
        }
    }
    //MD ABDUR RAHMAN (1639233)
    onProductDescriptionChanged(ProductDescription){
        this.setState({ProductDescription});
    }
    //SHANJAN MAHMUD REAZ (1738471)
    onAmountChanged(amount){
        this.setState({ amount });
    }
    //RAHMAN MD SAJIBUR (1715205)
    onQuantityChanged(Quantity){
        this.setState({Quantity});
    }
    //SONIA TABASSUM ANTU (1716978)
    onDiscountChanged(discount){
        this.setState({ discount });
    }

    calculateDiscount(){
        let {discount, amount} = this.state;
        amount = parseFloat(amount);
        discount = parseFloat(discount)/100;
        let discountPrice = ( amount - (amount * discount).toFixed(1)) ;
        this.setState({
            discountPrice,
            showDiscountPrice: true
        });
    }

    
    addRecord(){
        Alert.alert(
        "Your Product is",
        this.state.ProductDescription,
    [
      { text: "OK",
        onPress: () => Alert.alert("Order Added, You may proceed with the TOTAL to see the final price"),
        style: "Great lets go",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert( "Order is not added here"),
    }
  );    
}

   render() {
      return (
        <ScrollView>
         <View style = {styles.container}>
             <Text style={styles.HeaderTitle}>POINT OF SALES SYSTEM</Text>
            
                {/* MD ABDUR RAHMAN (1639233) */}
                <Text style={styles.Title}>Product Name</Text>
                <TextInput 
                    style={styles.Input}
                    keyboardType='default'
                    onChangeText={(text)=> this.onProductDescriptionChanged(text)}
                    value={this.state.ProductDescription}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input Product"
                    maxLength={30}/>


                {/* SHANJAN MAHMUD REAZ (1738471) */}           
                <Text style={styles.Title}>Amount</Text>
                <TextInput 
                    style={styles.Input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onAmountChanged(text)}
                    value={this.state.amount}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input Amount"
                    maxLength={10} />


                {/* RAHMAN MD SAJIBUR (1715205) */}
                <Text style={styles.Title}>Quantity</Text>
                <TextInput 
                    style={styles.Input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onQuantityChanged(text)}
                    value={this.state.Quantity}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input Quantity"
                    maxLength={10} />

                {/* SONIA TABASSUM ANTU (1716978) */}
                <Text style={styles.Title}>Discount</Text>
                <TextInput 
                    style={styles.Input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onDiscountChanged(text)}
                    value={this.state.discount}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input Discount percent"
                    maxLength={10}/>      
                    
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => this.addRecord()}>
                <Text style = {styles.submitButtonText}> Cart </Text>
                </TouchableOpacity>  

                {/* MD ABDUR RAHMAN (1639233) */}
                {this.state.showDiscountPrice && 
                <View style={styles}>
                    <Text style={styles.Title}> Details of Product Amount</Text>
                    <Text style={styles.result}>Total Amount: {this.state.discountPrice * this.state.Quantity}</Text>
                    <Text style={styles.result}>Quantity: {this.state.Quantity}</Text>
                    <Text style={styles.result}>6% GST Amount:  {((this.state.discountPrice * this.state.Quantity)* gst).toFixed(1)}</Text>
                    <Text style={styles.result}>Total payable: {(this.state.discountPrice * this.state.Quantity + ((this.state.discountPrice * this.state.Quantity)* gst)).toFixed(1)}</Text>
                </View>} 

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => this.calculateDiscount()}>
                <Text style = {styles.submitButtonText}> Total </Text>
                </TouchableOpacity>              
         </View>
         </ScrollView>
      )
   }
}

  
export default Inputs;







