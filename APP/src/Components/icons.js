import React from "react";
import {  Icon } from "@rneui/themed";
import { Linking } from "react-native";
export default function MyIcons(props) {
   
    return (
      <Icon
        raised
        name={props.name}
        type="font-awesome"
        color="black"
        size={15}
        onPress={() => {
          Linking.openURL(props.url);
        }}
      />
    );
}
