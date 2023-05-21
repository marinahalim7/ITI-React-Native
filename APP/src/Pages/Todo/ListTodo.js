import { React, useState } from "react";
import { ScrollView, Text, TextInput, View, Button ,StyleSheet} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

export default function ListTodo({ item }) {
 
    
  
  
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", marginVertical: 6 ,justifyContent:'space-around'}}>
        <Text>{item.value}</Text>
        <Button title="Delete" />
        <Button title="Update" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

});
