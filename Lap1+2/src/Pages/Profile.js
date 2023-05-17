import React from "react";
import {StyleSheet, View, Text, ScrollView, Image, Button} from "react-native";
import { Icon, Divider } from "@rneui/themed";

import MyIcons from "../Components/icons";
import { useNavigation } from "@react-navigation/native";
// import MyButton from "../Components/button";
// import ProgressBar from "../Components/progressBar";
export default function Profile({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContain}>
          <Image
            source={require("../../assets/MyPic.jpeg")}
            style={styles.logo}
          ></Image>
        </View>

        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Marina Halim
        </Text>

        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          PHP Developer
        </Text>

        <View style={styles.fistSection}>
          <MyIcons
            name="facebook"
            url="https://www.facebook.com/marina.halim.1422?mibextid=ZbWKwL"
          />
          <MyIcons
            name="linkedin"
            url="https://www.linkedin.com/in/marina-halim-41b387255/"
          />
          <MyIcons name="github" url="https://github.com/marinahalim7" />
          <Divider />
        </View>

        <Divider />

        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Text style={{ fontWeight: "bold" }}>Age</Text>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text> 23</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Text style={{ fontWeight: "bold" }}>Address</Text>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text> Assiut</Text>
          </View>
        </View>

        <Divider />

        <View style={{ margin: 4 }}>
          <Text style={{ margin: 4, fontWeight: "bold" }}>Languages</Text>
          <Text style={{ margin: 2 }}>English</Text>
          {/* <ProgressBar value="1"></ProgressBar> */}

          <Text style={{ margin: 2 }}>Spanish</Text>
          {/* <MyProgressBar value=".7" style={{ marginBottom: 2 }}></MyProgressBar> */}
        </View>

        <View style={{ margin: 4 }}>
          <Divider />
          <Text style={{ margin: 4, fontWeight: "bold" }}>Skills</Text>
          <Text style={{ margin: 2 }}>PHP</Text>
        {/* <MyProgressBar value=".7" style={{ margin: 2 }}></MyProgressBar>  */}
         <Text style={{ margin: 2 }}>Laravel</Text>
        {/* <MyProgressBar value=".7" style={{ margin: 2 }}></MyProgressBar> */}
        </View>
        <Divider></Divider>
        <View>
          <Text style={{ margin: 4, fontWeight: "bold" }}>Extra Skills</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="done"></Icon>
            <Text>HTML</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="done"></Icon>
            <Text>CSS</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="done"></Icon>
            <Text>JavaScript</Text>
          </View>
        </View>
      </View>
      <Button title="Movies" onPress={()=>navigation.navigate("Movies")}/>

    </ScrollView>
  );
}



  const styles = StyleSheet.create({
      container: {
      marginVertical: 4,
      marginHorizontal:6,
      flexDirection: "column",
      
    
    },
    fistSection: {
      flexDirection: "row",
      justifyContent: "center",
    },

    secondSection: {
      margin: 4,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    SecondSection_left: {
      justifyContent: "space-between",
    },
    imageContain: {
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 120,
        height: 120,
        borderRadius: 70,
        marginTop:12,
    },
  });
 