import { React, useState } from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddTOdo({ submitHandle }) {
  const [task, setTask] = useState("");
  const onChangeTask = (task) => {
    setTask(task);
  };

 
  return (
    <ScrollView>
      <TextInput placeholder="Add To do" onChangeText={onChangeTask} />

      {task.length == 0 ? (
        <Button title="Add" disabled />
      ) : (
        <Button title="Add" onPress={() => submitHandle(task)} />
      )}
    </ScrollView>
  );
}
