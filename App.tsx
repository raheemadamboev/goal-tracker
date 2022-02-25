import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalCard from "./components/GoalCard";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<{ flutter: string; text: string }[]>([]);

  const setInput = (input: string) => {
    setGoal(input);
  };

  const onAddGoal = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { flutter: Math.random().toString(), text: goal },
    ]);
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
      <FlatList
        keyExtractor={(item, index) => item.flutter}
        data={goals}
        renderItem={(goal) => <GoalCard name={goal.item.text} />}
      />
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
