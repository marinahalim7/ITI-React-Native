import React from "react";
import { Icon } from "@rneui/themed";
import { Button, StyleSheet ,Progress} from "react-native";

// import * as Progress from "react-native";



export default function ProgressBar(props) {
    return (
        <Progress.Bar progress={props.value} width={200} color={"blue"} />
    );
}

const buttonStyle = StyleSheet.create({
 
});
