import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
 StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput,
  ImageBackground,
  Image,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  
} from 'react-native';
import {ButtonGroup, Icon} from 'react-native-elements';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { event } from 'react-native-reanimated';

const categories = [
  {
    url: "https://i.imgur.com/Gk8USed.jpg",
    title: "T-SHIRT",
    connect: "T-SHIRT",
  },
  {
    url: "https://i.imgur.com/5oxLAcc.jpg",
    title: "JACKET",
    connect: "JACKET"
  },
  {
    url: "https://i.imgur.com/vw419Rl.jpg",
    title: "MASK",
    connect: "MASK"
  },
  {
    url: "https://i.imgur.com/p3HuSIQ.jpg",
    title: "CAP",
    connect: "CAP"
  },
  {
    url: "https://i.imgur.com/qfgwF68.jpg",
    title: "BONNET",
    connect: "BONNET"
  },
];

const shirt = [
  { 
    url: "https://i.imgur.com/CfuUGdf.jpg",
    desc: "Enemies",
    price: 499,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/BSPbI6I.jpg",
    desc: "Fila-Based",
    price: 475,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/xvuBSLl.jpg",
    desc: "Flag",
    price: 499,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/dC5i3pr.jpg",
    desc: "Late night & good times",
    price: 550,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/HAu6sfQ.jpg",
    desc: "Capcom",
    price: 499,
    connect: "CART"
  },
];

const jacket = [
  { 
    url: "https://i.imgur.com/hX4uunX.jpg",
    desc: "Beige",
    price: 1200,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/wVbFKql.jpg",
    desc: "Fila based Fresh hoodie",
    price: 999,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/vCgD8BO.jpg",
    desc: "Gold",
    price: 1500,
    connect: "CART"
  },
];

const mask = [
  { 
    url: "https://i.imgur.com/nGxePDM.jpg",
    desc: "maskitsamust",
    price: 199,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/hb5JrKE.jpg",
    desc: "Reversible Bandana Babushka",
    price: 199,
    connect: "CART"
  },
];

const cap = [
  { 
    url: "https://i.imgur.com/xdU1q5I.jpg",
    desc: "handmade bud dadhat",
    price: 299,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/a6khUh3.jpg",
    desc: "GANGT$AH",
    price: 250,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/92OW2Q2.jpg",
    desc: "FREsH",
    price: 250,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/aTYvlrK.jpg",
    desc: "CO$",
    price: 250,
    connect: "CART"
  },
];

const bonnet = [
  { 
    url: "https://i.imgur.com/1cT8D2B.jpg",
    desc: "City of Saints.",
    price: 200,
    connect: "CART"
  },
];




const products =[
  {
    url: "https://i.imgur.com/CfuUGdf.jpg",
    desc: "Enemies",
    price: "P499",
  },
  { 
    url: "https://i.imgur.com/BSPbI6I.jpg",
    desc: "Fila-Based",
    price: 475,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/xvuBSLl.jpg",
    desc: "Flag",
    price: 499,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/dC5i3pr.jpg",
    desc: "Late night & good times",
    price: 550,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/HAu6sfQ.jpg",
    desc: "Capcom",
    price: 499,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/hX4uunX.jpg",
    desc: "Beige",
    price: 1200,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/wVbFKql.jpg",
    desc: "Fila based Fresh hoodie",
    price: 999,
    connect: "CART"
  },
  {
    url: "https://i.imgur.com/vCgD8BO.jpg",
    desc: "Gold",
    price: 1500,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/nGxePDM.jpg",
    desc: "maskitsamust",
    price: 199,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/hb5JrKE.jpg",
    desc: "Reversible Bandana Babushka",
    price: 199,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/xdU1q5I.jpg",
    desc: "handmade bud dadhat",
    price: 299,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/a6khUh3.jpg",
    desc: "GANGT$AH",
    price: 250,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/92OW2Q2.jpg",
    desc: "FREsH",
    price: 250,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/aTYvlrK.jpg",
    desc: "CO$",
    price: 250,
    connect: "CART"
  },
  { 
    url: "https://i.imgur.com/1cT8D2B.jpg",
    desc: "City of Saints.",
    price: 200,
    connect: "CART"
  },


];


function App({navigation}){
  return(
    <View style = {styles.container}>
    <Image
      source={{uri: "https://i.imgur.com/tkMFNNy.gif"}}
      style={{ width: "100%", height: "60%" }}
      />

      <View style={styles.container2}>
      <Text style = {styles.labelStartPage}>Explore many products</Text>
      </View>
      <View style={styles.container2}>
      <Text style = {styles.labelStartPage2}>The difference between style and fashion is quality.</Text>
      </View>

       <View style={styles.container}>
        <TouchableHighlight
          style={styles.Button}
          onPress={() => navigation.navigate("FRESH.CO2")}
          >
          <Text style={[styles.TextButton]}>NEXT</Text>
        </TouchableHighlight>
        </View>
  </View>
  );
}

function startScreen2({navigation}) {
  return (
    <View style = {styles.container}>
    <Image
      source={{uri: "https://i.imgur.com/ovZ1p4x.jpg"}}
      style={{ width: "100%", height: "60%" }}
      />
       <View style={styles.container2}>
       <Text style = {styles.labelStartPage}>Choose and checkout</Text>
       </View>
       <View style={styles.container2}>
      <Text
       numberOfLines={3}
        style = {styles.labelStartPage2}>Just download our application and buy online using your smart phone or laptops.
      </Text>
      </View>
       <View style={styles.contactBtn}>
        <TouchableHighlight
          style={styles.Button}
          onPress={() => navigation.navigate("FRESH.CO3")}
          >
          <Text style={[styles.TextButton]}>NEXT</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.Button}
          onPress={() => navigation.navigate("Contact Us")}
          >
          <Text style={[styles.TextButton]}>CONTACT US</Text>
        </TouchableHighlight>
        </View>
    </View>
  );
}

function startScreen({navigation}){
  return(
    <View style = {styles.container}>
    <Image
      source={{uri: "https://i.imgur.com/Yn8e5fg.jpg"}}
      style={{ width: "100%", height: "60%" }}
      />

       <View style={styles.container2}>
       <Text style = {styles.labelStartPage}>Fast delivery</Text>
       </View>
      <View style={styles.container2}>
       <Text style = {styles.labelStartPage2}>Committed to deliver on time.</Text>
       </View>
       <View style={styles.container2}>
        <TouchableHighlight
          style={styles.Button}
          onPress={() => navigation.navigate("FRESH.CO")}
          >
          <Text style={[styles.TextButton]}>BROWSE CATEGORIES</Text>
        </TouchableHighlight>
        </View>
  </View>
  );
}
function ShopNow({ navigation }){ //categories
  const [keyword, setKeyword] = useState("");
     return (
      <ScrollView>
        <Text
        style={{
         // marginTop: 15,
          fontSize: 20,
          textAlign: "right",
          //marginHorizontal: 15,
          backgroundColor: '#e39e27'
        }}
      >
        Search:{" "}
      </Text>
      <TextInput
        style={{backgroundColor: '#e39e27', color: 'black'}}
        onChangeText={(text) => setKeyword(text)}
      />

      {categories.map((categories, key) => {
        if (categories.title.toLowerCase().includes(keyword.toLowerCase()))  {
          return(
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#454545"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="white"
          onPress={() => navigation.navigate(categories.connect)}
        >
        <View style = {styles.cardRounded}>
        <Image style = {styles.cardImage} source= {{uri: categories.url}}/>
        <Text style = {styles.nameCategories}>{categories.title}</Text>
        </View>
        </TouchableHighlight>
        </View>
      );
     }
    })}
      
     </ScrollView>
  );
}

function Cart ({navigation}){
  const sizes = ['S','M','L','XL']
  const [qty, setQty] = useState(0);
  return(
    <ScrollView style={{margin: 15}}>
        
        <Text> Sizes: </Text>
        <ButtonGroup
        buttons = {sizes}
        containerStyle={{height: 40, width: 340}}
        />
        
        <Text> Qty: </Text>
        <Text style={{fontSize:50, fontWeight: 'bold'}}>  {qty}</Text>
        <View flexDirection="row">
        <TouchableOpacity style={styles.addBtn} onPress={()=> setQty (qty+1)}>
          <Text> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deductBtn} onPress={()=> setQty (qty-1)}>
          <Text> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ResetBtn} onPress={()=> setQty (0)}>
          <Text> Reset </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Check Out")}>
          <Text> Check Out </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("T-SHIRT")}>
          <Text> Continue Shopping </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={()=> navigation.navigate ("FRESH.CO")}>
          <Text> Cancel </Text>
        </TouchableOpacity>

    </ScrollView>
  );
}
function CheckOut ({navigation}){
  const buttons = ['COD', 'MasterCard', 'GCash']
  const [firstname, setFName] = useState('')
  const [middlename, setMName] = useState('')
  const [lasttname, setLName] = useState('')
  const [add, setAdd] = useState ('')
  const [number, setNumber] = useState(0)
  return (

    <ScrollView>
      <ImageBackground 
      source={require('./assets/bg.jpg')}
      style={styles.imgBg}
      >
        {/* --------- */}
      <TextInput name="firstname" style={styles.textinput}
      placeholder="   First Name" 
      onChangeText={(val) => setFName(val)}
      />

      <TextInput style={styles.textinput} 
      placeholder="   Middle Name" 
      onChangeText={(val) => setMName(val)}
      />

      <TextInput 
      style={styles.textinput} 
      placeholder="   Last Name" 
      onChangeText={(val)=> setLName(val)}
      />

      <TextInput 
      multiline
      style={styles.txtAdd} 
      placeholder="   Address" 
      onChangeText={(val)=> setAdd(val)}
      keyboardType='numbers-and-punctuation'
      />

      <TextInput 
      keyboardType='numeric'
      style={styles.textinput} 
      placeholder="   Contact Number" 
      onChangeText={(val)=> setNumber(val)}
      />

      <Text style={styles.txtStyle}> Payment Details</Text>
         <ButtonGroup
         buttons={buttons}
         containerStyle={{height: 40, width: 340}}
         
         />
      <View
      style={{backgroundColor: 'white', borderWidth: 1, borderRadius: 10, padding: 5, margin: 10, height: 150}}
      >
        <Text
        style={styles.txtStyle}
        >Buyer Details:</Text>
    <Text
    // style={{margin: 2, padding: 5}}
    > Name: {firstname} {middlename} {lasttname}</Text>
    <Text> Address: {add} </Text>
    <Text> Contact Number: {number} </Text>
   
      </View>

      <TouchableOpacity
      style={styles.button} 
      onPress={() => Alert.alert("Success!", "Thank you for purchasing!",
      [{
        text: "OK",
        onPress: () => navigation.navigate("Contact Us")
      }
      ]
      ) 
      
    }
      >
      <Text>Proceed</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.cancelBtn} onPress={() => navigation.navigate("FRESH.CO")}>
        <Text>Cancel</Text>
      </TouchableOpacity>

    </ImageBackground>
    </ScrollView>
    
  );
}
function ContactUs ({ navigation }){
  // 
  return(
    <View>
      <Image
      source={{uri: "https://i.imgur.com/tkMFNNy.gif"}}
      style={{ width: "100%", height: "50%" }}
      />
      <Text style={styles.labelStartPage}> FRESH </Text>
      <View
      style={{flexDirection: 'row', marginTop: 15, marginBottom: 5, margin: 10}}
      >
      <Icon
        name ='favorite'
        type='material-icons'
        />
        <Text> 97,641 people like this </Text>
        </View>
        <View
      style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, margin: 10}}
      >
        <Icon
        name ='schedule'
        type='material-icons'
        />
        <Text> Always Open </Text>
        </View>
        <View
      style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, margin: 10}}
      >
        <Icon
    name ='language'
    type='material-icons'
    />
    <Text> http://www.instagram.com/_frshco </Text>
    </View>
    <View
      style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, margin: 10}}
      >
     <Icon
    name='call'
    type='material-icons'
    />
    <Text> 0996 214 7472 </Text>
    </View>
    <View
      style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, margin: 10}}
      >
    <Icon
    name ='email'
    type='material-icons'
    />
    <Text> freshworldwide00@gmail.com </Text>
    </View>
    <View
      style={{flexDirection: 'row', marginTop: 5, marginBottom: 20, margin: 10}}
      >
  <Icon
    name ='info'
    type='material-icons'
     />
     <Text> Made from City of Saints </Text>
     </View>
     <TouchableHighlight
          style={styles.Button}
          onPress={() => navigation.navigate("FRESH.CO2")}
          >
          <Text style={[styles.TextButton]}>HOME</Text>
        </TouchableHighlight>
    </View>
    
  );
}

function Shirt({ navigation }) {
  return (
    <ScrollView>
      {shirt.map((shirt, key) => (
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#aba7a7"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#fff"
          onPress={() => navigation.navigate(shirt.connect)}
        >
        <View style = {styles.cardRoundedContent}>
        <Image style = {styles.cardImageContent} source= {{uri: shirt.url}}/>
        <Text style = {styles.labelDecs}>{shirt.desc}</Text>
        <Text style = {styles.labelPrice}>₱{shirt.price}</Text>
        </View>
        </TouchableHighlight>

        </View>
      ))}
        <Button
        title = "Go back"
        color = "#171717"
        onPress={() => navigation.navigate("FRESH.CO")}
        />
     </ScrollView>
  );
}

function Jacket({ navigation }) {
  return (
    <ScrollView>
    {jacket.map((jacket, key) => (
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#aba7a7"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#fff"
          onPress={() => navigation.navigate(jacket.connect)}
        >
        <View style = {styles.cardRoundedContent}>
        <Image style = {styles.cardImageContent} source= {{uri: jacket.url}}/>
        <Text style = {styles.labelDecs}>{jacket.desc}</Text>
        <Text style = {styles.labelPrice}>₱{jacket.price}</Text>
        </View>
        </TouchableHighlight>
        </View>
      ))}

        <Button
        title = "Go back"
        color = "#171717"
        onPress={() => navigation.navigate("FRESH.CO")}
        />
     </ScrollView>
  );
}

function Mask({ navigation }) {
  return (
    <ScrollView style = {{backgroundColor: "#aba7a7"}} contentContainerStyle={[{flex:1,justifyContent:'space-between'}]}>
      {mask.map((mask, key) => (
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#aba7a7"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#fff"
          onPress={() => navigation.navigate(mask.connect)}
        >
        <View style = {styles.cardRoundedContent}>
        <Image style = {styles.cardImageContent} source= {{uri: mask.url}}/>
        <Text style = {styles.labelDecs}>{mask.desc}</Text>
        <Text style = {styles.labelPrice}>₱{mask.price}</Text>
        </View>
        </TouchableHighlight>
        </View>
      ))}
        <View style = {styles.bottom}>
        <Button
        title = "Go back"
        color = "#171717"
        onPress={() => navigation.navigate("FRESH.CO")}
        />
        </View>
     </ScrollView>
  );
}

function Cap({ navigation }) {
  return (
    <ScrollView>
      {cap.map((cap, key) => (
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#aba7a7"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#fff"
          onPress={() => navigation.navigate(cap.connect)}
        >
        <View style = {styles.cardRoundedContent}>
        <Image style = {styles.cardImageContent} source= {{uri: cap.url}}/>
        <Text style = {styles.labelDecs}>{cap.desc}</Text>
        <Text style = {styles.labelPrice}>₱{cap.price}</Text>
        </View>
        </TouchableHighlight>
        </View>
      ))}
        <Button
        title = "Go back"
        color = "#171717"
        onPress={() => navigation.navigate("FRESH.CO")}
        />
     </ScrollView>
  );
}

function Bonnet({ navigation }) {
  return (
    <ScrollView style = {{backgroundColor: "#aba7a7"}} contentContainerStyle={[{flex:1,justifyContent:'space-between'}]}>
      {bonnet.map((bonnet, key) => (
        <View key = {key} style = {{ flexDirection: "row", backgroundColor: "#aba7a7"}}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#fff"
          onPress={() => navigation.navigate(bonnet.connect)}
        >
        <View style = {styles.cardRoundedContent}>
        <Image style = {styles.cardImageContent} source= {{uri: bonnet.url}}/>
        <Text style = {styles.labelDecs}>{bonnet.desc}</Text>
        <Text style = {styles.labelPrice}>₱{bonnet.price}</Text>
        </View>
        </TouchableHighlight>
        </View>
      ))}
        <View style = {styles.bottom}>
        <Button
        title = "Go back"
        color = "#171717"
        onPress={() => navigation.navigate("FRESH.CO")}
        />
        </View>
     </ScrollView>
  );
}
const Stack = createStackNavigator();
export default function Nav(){
  return(
  <NavigationContainer>
   <Stack.Navigator
        screenOptions={{
          headerLeft: null,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#eeeeee",
          headerTitleStyle: {
          fontWeight: "bold",
          },
        }}
      >
    <Stack.Screen name = "FRESH.CO1" component={App} options={{ headerShown: false }}/>
    <Stack.Screen name = "FRESH.CO2" component={startScreen2} options={{ headerShown: false }}/>
    <Stack.Screen name = "FRESH.CO3" component={startScreen} options={{ headerShown: false }}/>
    <Stack.Screen name = "FRESH.CO" component={ShopNow}/>
    <Stack.Screen name = "T-SHIRT" component={Shirt}/>
    <Stack.Screen name = "JACKET" component={Jacket}/>
    <Stack.Screen name = "MASK" component={Mask}/>
    <Stack.Screen name = "CAP" component={Cap}/>
    <Stack.Screen name = "BONNET" component={Bonnet}/>
    <Stack.Screen name = "CART" component={Cart}/>
    <Stack.Screen name = "Check Out" component={CheckOut}/>
    <Stack.Screen name = "Contact Us" component ={ContactUs} options={{headerShown: true}}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#dfe6e9",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#dfe6e9",
  },
 
    Button: {
    marginRight:100,
    marginLeft:100,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:20,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonBack: {
    position: "absolute",
    bottom:0,
  },
  bottom:{
    flex: 1,
    justifyContent: "flex-end",

  },
  TextButton:{
      fontSize: 16,
      fontWeight: "bold",
  },
  overlay: {
    backgroundColor:'black',

  },
  labelStartPage: {
    marginTop: 5,
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  labelStartPage2: {
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    color: "#264653",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  labelPrice: {
    marginTop: 2,
    color: "#d93016",
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  labelDecs: {
    marginTop: 0,
    color: "#3b3a39",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontStyle: "italic",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  Center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cardRounded: {
    height: 214,
    width: 361.9,
    backgroundColor: "#636e72",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 2, 
    borderColor: "#dfe6e9",
    shadowColor: "#000",
    marginBottom: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardImage: {
    width: 360,
    height: 182,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardRoundedContent: {
    height: 234,
    backgroundColor: "#BDC3C7",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImageContent: {
    width: 363,
    height: 180,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  nameCategories: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    color: "#d2dae2",
    marginTop: 0,
    marginLeft: 0,
    fontStyle: "italic",
  },
  gif:{
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1,
  },
  txtStyle:{
    fontSize: 20,
    padding: 2,
    fontWeight: 'bold',
    backgroundColor: '#e39e27',
    color: 'black',
    textAlign: 'center',
   
  },
  imgBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  },
  textinput: {
    //alignSelf: 'stretch',
    padding: 5,
    height: 40,
    margin: 10,
    marginBottom: 30,
    color: 'black',
    borderColor: '#e39e27',
   // borderBottomColor: '#e39e27',
    borderRadius: 10,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    opacity: 0.75,
  },
  txtAdd: {
    height:70,
    margin: 10,
    marginBottom: 30,
    color: 'black',
    borderColor: '#e39e27',
   // borderBottomColor: '#e39e27',
    borderRadius: 10,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    opacity: 0.75,
  },
  button: {
    borderRadius: 10,
    alignSelf: 'auto',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e39e27',
    marginTop: 10,
    marginBottom: 10,
    
  },
  cancelBtn: {
    borderRadius: 10,
    alignSelf: 'auto',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  addBtn: {
  alignItems: 'center',
  width: 100, 
  height: 45, 
  backgroundColor: '#e39e27', 
  borderRadius: 7, 
  justifyContent: 'center', 
  margin: 5, 
  padding: 10
  },
  deductBtn: {
    alignItems: 'center',
    width: 100, 
    height: 45, 
   //backgroundColor: '#e39e27',
    borderWidth: 1,
    borderRadius: 7, 
    justifyContent: 'center', 
    margin: 5, 
    padding: 10
    },
    ResetBtn: {
      alignItems: 'center',
      width: 100, 
      height: 45, 
      backgroundColor: 'gray', 
      color: 'white', 
      borderRadius: 7, 
      justifyContent: 'center', 
      margin: 5, 
      padding: 10
      },
 
      
});
