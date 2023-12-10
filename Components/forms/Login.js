import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../../Buttons/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const SigninSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Enter valid email address'),
  password: Yup.string()
    .min(8)
    .required("Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      " Must contain minimum 8 characters,  at least  one uppercase letter, a number and special character"
    ),
});

const showToast = (message = "Something went wrong") => {
  ToastAndroid.show(message, 3000);
};

 async function test(credentials, navigation) {
   const response =  await fetch('http://192.168.254.111:8000/api/login', {method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
   }, body: credentials
 })   
  

  const data = await response.json()
  console.log(data)
   if(response.status == 200) {

        return (navigation.replace('Home'))
  }

   if(response.status == 404) return Alert.alert(data.message);
 }

const Login = ({ navigation }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightsteelblue }}>
        <View style={{ flex: 1, marginHorizontal: 85,  }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={ async (values) => {
        console.log(values) 
          test(JSON.stringify(values), navigation)
     }}
        validationSchema={SigninSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
          isSubmitting,
        }) => (
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                
                <Text
                  style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    marginVertical: 12,
                    marginHorizontal: 115,
                    color: COLORS.black,
                  }}
                >
                  Login
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
                  Email
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
                    placeholder="Enter your email"
                    placeholderTextColor={COLORS.black}
                    label={"email"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={{ color: "red" }}> {errors.email}</Text>
                )}
              </View>
            </View>
            <View style={{ marginBottom: 1 }}>
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
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!passwordShown}
                  label={"password"}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
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
              {touched.password && errors.password && (
                <Text style={{ color: "red" }}> {errors.password}</Text>
              )}
            </View>

  
            <Button
              onPress={handleSubmit}
              //onPress={() => navigation.navigate("Home")}
              title="Login"
              filled
              style={{
                marginTop: 35,
                marginBottom: 4,
                marginBottom: 2,
                backgroundColor: COLORS.cadetblue,
                borderColor: COLORS.dark,
              }
            }
            />
             <Button onPress={() => navigation.navigate("Register")}
            title="Register"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,

            }
          } 
          />

             <Button onPress={() => navigation.navigate("Welcome")}
            title="Go back"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginBottom: 2,
              backgroundColor: COLORS.cadetblue,
              borderColor: COLORS.dark,
            }
          }  
            />
            
            <Button onPress={() => navigation.navigate("Recovery")}
            title="Forgot Account?"
            filled
            style={{
              marginTop: 75,
              marginBottom: 4,
              backgroundColor: COLORS.gray,
              borderColor: COLORS.dark,
            }
          }  
            />

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginVertical: 20,
                marginTop: 20,
              }}
            >
            
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                  
              </View>
            </View>
          </View>
        )}
      </Formik>
      </View>

    </SafeAreaView>

  );
};

export default Login;
