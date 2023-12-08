import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import Button from "../Buttons/Button";
const Login = ({ navigation }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const handleLogin = () => {
    // For now, let's use hardcoded values for demonstration purposes
    const correctUsername = 'demoUser';
    const correctPassword = 'demoPassword';

    if (username === correctUsername && password === correctPassword) {
      showToast('Login successful');
      // Navigate to the home screen or perform any other action
      navigation.navigate('Home');
    } else {
      showToast('Incorrect username or password');
    }
  }
  
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightsteelblue }}>
      <View style={{ flex: 1, marginHorizontal: 85,}}>
      <View >


<View style={{flexDirection: 'row'}} 
>
<Text

    style={{
      fontSize: 60,
      fontWeight: "bold",
      marginVertical: 12,
      marginHorizontal: 140,
      color: COLORS.black,
    }}
  >
    Login
  </Text>
  
</View>

</View>
        

    <View
          style={{
            marginBottom: 1
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Username
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                 placeholder="Enter your username"
                 placeholderTextColor={COLORS.black}
                 keyboardType="email-address"
                 style={{ width: "100%" }}
                 onChangeText={(text) => setUsername(text)}
                  
                  />
            </View>

      </View>

  </View>



          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 1,
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                 placeholder="Enter your password"
                 placeholderTextColor={COLORS.black}
                 secureTextEntry={!passwordShown}
                 style={{ width: "100%" }}
                 onChangeText={(text) => setPassword(text)}
                
              />
              <TouchableOpacity
                onPress={() => setPasswordShown(!passwordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {passwordShown == false ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
    </View>

    <Button
    // OnPress={handleLogin}
        onPress={() => navigation.navigate("Home")}
        title="Login"
        filled
        style={{
          marginTop: 18,
          marginBottom: 4,
          marginBottom: 2,
          backgroundColor: COLORS.cadetblue,
          borderColor: COLORS.dark,
        }}/>

           <Button onPress={() => navigation.navigate("Register")}
            title="Register"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,

            }}  />

           <Button onPress={() => navigation.navigate("Welcome")}
            title="Go Back"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,
            }} />

           <Button onPress={() => navigation.navigate("Recovery")}
            title="Forgot Account?"
            filled
            style={{
              marginTop: 75,
              marginBottom: 4,
              backgroundColor: COLORS.gray,
              borderColor: COLORS.dark,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 20,
              marginTop: 20
            }}    >
          </View>


        </View>
    </SafeAreaView>
    
  );
};

export default Login;