import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Please write your goal here"
          style={{ borderWidth: 1, borderColor: "black", padding: 10 }}
        />
        <Button title="Add Goal" onPress={() => {}} />
      </View>
      <View />
      <StatusBar style="auto" />
    </View>
  );
}
