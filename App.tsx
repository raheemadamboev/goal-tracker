import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  const setInput = (input: string) => {
    setGoal(input);
  };

  const onAddGoal = () => {
    setGoals((currentGoals) => [...goals, goal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please write your goal here"
          style={styles.input}
          onChangeText={setInput}
          value={goal}
        />
        <Button title="Add Goal" onPress={onAddGoal} />
      </View>
      <View />
      <StatusBar style="auto" />
      {goals.map((mappedGoal) => (
        <Text>{mappedGoal}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});
