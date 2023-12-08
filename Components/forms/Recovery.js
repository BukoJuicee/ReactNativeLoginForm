import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../Buttons/Button";


const Recover = ({navigation}) => {
    const [passwordShown, setPasswordShown] = useState(false);
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightsteelblue }}>
      <View style={{ flex: 1, marginHorizontal: 85 }}>
        <View > 

        <View style={{flexDirection: 'row'}} 
        >       
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              marginVertical: 12,
              marginHorizontal: 49,
              color: COLORS.black,
            }}
          >
            Account Recovery
          </Text>
        </View>

        </View>
        <View
          style={{
            marginBottom: 1,
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
              Email address
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
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>
      

          <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
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
                placeholder="Enter your new password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                }}
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

          <Button onPress={() => navigation.navigate("")}
            title="Recover Account"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,
            }} />

<Button onPress={() => navigation.navigate("Login")}
            title="Go Back"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,
            }} />
             
        </View>
        
    </SafeAreaView>
  );
};

export default Recover;