import { React, useState } from "react";
import { ScrollView, Text, TextInput, View, Button, FlatList } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AddTOdo from "./AddTOdo";
import ListTodo from "./ListTodo";
export default function Todo({ navigation }) {
  const [data, setData] = useState([]);
  


  const submitHandle = (value) => {
    setData((prevTodo) => {
      return [
        ...prevTodo,
        {
          value: value,
          id:prevTodo.length
        },
      ];
    
    })
    
  }
  return (
    <ScrollView>
      <AddTOdo submitHandle={submitHandle}></AddTOdo>
     
      

      <FlatList data={data} renderItem={({item})=><ListTodo item={item}></ListTodo>}></FlatList>
    </ScrollView>
  );
}
