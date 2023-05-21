import { React } from "react";

import { ScrollView, Text, Button, StyleSheet,View } from "react-native";


export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View styles={StyleSheet.buttons}>
        <Button title="Movies" onPress={() => navigation.navigate("Movies")} />
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button
          title="Todo List"
          onPress={() => navigation.navigate("Todo")}
          
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    buttons: {
        flexDirection:"column"
      
  },
});
