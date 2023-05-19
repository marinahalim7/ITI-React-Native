import React from "react";
import { Icon } from "@rneui/themed";
import { Button, StyleSheet } from "react-native";
export default function MyButton(props) {

  return <Button title={props.name} style={{margin:4}} />;
}
const buttonStyle = StyleSheet.create({
    buttons: {
        margin:4
        
    }
});
