import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../Constants/colors";

import Button from "../../Buttons/Button";

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
          <Image source={require("../../assets/HomeBG.jpg")}style ={{height: 1050, width: 650}}/> 
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
              fontSize: 62,
              fontWeight: 800,
              color: COLORS.lightsteelblue,
            }}
          >
            Hello World
          </Text>
          <Text 
            style={{
              fontSize: 22,
              fontWeight: 690,
              color: COLORS.lightsteelblue,
            }}
          >
            Sheeeshh!!
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

          <Button onPress={() => navigation.navigate("Login")}
                  title="Logout"
                  filled
                  style={{
                  marginTop: 75,
                  marginBottom: 2,
                  backgroundColor: COLORS.cadetblue,
                  borderColor: COLORS.skyblue,

}}

/>

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
