import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.orange, COLORS.primary]}
    >
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
          <Image source={require("../assets/HomeBG.jpg")}style ={{height: 1050, width: 650}}/> 
      
        </View>
        {/* content */}
        <View
          style={{
            paddingHorizontal: 45,
            position: "absolute",
            top: 330,
            width: "100%",
         
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.lightsteelblue,
            }}
          >
            Let's Get
          </Text>
          <Text 
            style={{
              fontSize: 45,
              fontWeight: 800,
              color: COLORS.lightsteelblue,
            }}
          >
            Started
          </Text>

          <View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
               alignItems: "center",
                top: 10,
  
              }}
            >
             
            </Text>
          </View>

          <Button
            title="START"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 75,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an Account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.orange,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login Here!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
