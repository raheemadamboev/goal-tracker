import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props: Props) => {
  const [goal, setGoal] = useState<string>("");
  const setInput = (input: string) => {
    setGoal(input);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Please write your goal here"
        style={styles.input}
        onChangeText={setInput}
        value={goal}
      />
      <Button
        title="Add Goal"
        onPress={props.onAddGoal.bind(this, {
          flutter: Math.random().toString(),
          name: goal,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export type Goal = {
  flutter: string;
  name: string;
};

export type Props = {
  onAddGoal: (goal: Goal) => void;
};

export default GoalInput;