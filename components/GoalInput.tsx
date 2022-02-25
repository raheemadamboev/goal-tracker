import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props: Props) => {
  const [goal, setGoal] = useState<string>("");
  const setInput = (input: string) => {
    setGoal(input);
  };
  const onAddGoal = () => {
    setGoal("");
    props.onAddGoal({
      flutter: Math.random().toString(),
      name: goal,
    });
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please write your goal here"
          style={styles.input}
          onChangeText={setInput}
          value={goal}
        />
        <Button title="Add Goal" onPress={onAddGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 20,
  },
});

export type Goal = {
  flutter: string;
  name: string;
};

export type Props = {
  onAddGoal: (goal: Goal) => void;
  visible: boolean;
};

export default GoalInput;
