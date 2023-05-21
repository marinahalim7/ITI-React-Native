import { React } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Formik_Form({ navigation }) {
  return (
    <ScrollView>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phone_number: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Name is required")
            .min(3, "Invalid Name!!"),

          email: Yup.string()
            .email("Invalid email address")
            .required("email is Required"),

          password: Yup.string()
            .required("password is Required")
            .min(9, "too short"),

          phone_number: Yup.number("Invalid Phone Numer").required(
            "Phone Numer is required"
          ),
        })}
      >
        {(props) => (
          <View style={styles.container}>
            {/* user name */}
            <View style={styles.inputView}>
              <TextInput
                placeholder="User name."
                placeholderTextColor="#003f5c"
                onChangeText={props.handleChange("username")}
              />
            </View>
            {props.touched.username && props.errors.username ? (
              <Text style={{ color: "red" }}>{props.errors.username}</Text>
            ) : null}

            {/* Email */}
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={props.handleChange("email")}
              />
            </View>
            {props.touched.email && props.errors.email ? (
              <Text style={{ color: "red" }}>{props.errors.email}</Text>
            ) : null}

            {/* Password */}
            <View style={styles.inputView}>
              <TextInput
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={props.handleChange("password")}
              />
            </View>
            {props.touched.password && props.errors.password ? (
              <Text style={{ color: "red" }}>{props.errors.password}</Text>
            ) : null}

            {/* Phone number */}
            <View style={styles.inputView}>
              <TextInput
                placeholder="Phone Number."
                placeholderTextColor="#003f5c"
                onChangeText={props.handleChange("phone_number")}
              />
            </View>
            {props.touched.phone_number && props.errors.phone_number ? (
              <Text style={{ color: "red" }}>{props.errors.phone_number}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={props.handleSubmit}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginText}>Home</Text>
        </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "green",
    color: "white",
  },
});
