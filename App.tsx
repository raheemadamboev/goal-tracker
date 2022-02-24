import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="Please write your goal here"
          style={{
            width: "70%",
            borderWidth: 1,
            borderColor: "black",
            padding: 10
          }}
        />
        <Button title="Add Goal" onPress={() => {}} />
      </View>
      <View />
      <StatusBar style="auto" />
    </View>
  );
}
