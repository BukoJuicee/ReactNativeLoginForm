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
            top: 395,
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
            Welcome Human
          </Text>
          <Text 
            style={{
              fontSize: 22,
              fontWeight: 690,
              color: COLORS.lightsteelblue,
            }}
          >
            Click Start to Proceed
          </Text>

          <View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.d,
                alignItems: "center",
                top: 10,
  
              }}
            >

            </Text>
          </View>

          <Button onPress={() => navigation.navigate("Login")}
                  title="Start"
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
