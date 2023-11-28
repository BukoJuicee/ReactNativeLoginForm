import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.orange, COLORS.lightsteelblue]}
    >
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
          <Image source={require("../assets/BG.jpg")}style ={{height: 1050, width: 600}}/>
        
        {/* content */}
       

          <Button
            title="Log Out"
            onPress={() => navigation.navigate("Welcome")}
            style={{
              marginTop: -500,
              width: "100",
            }}
          />

    </View>
        </View>
      
    </LinearGradient>
  );
};

export default Home;