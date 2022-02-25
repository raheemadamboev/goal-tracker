import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

const GoalInput = (props: Props) => {
  const [goal, setGoal] = useState<string>("");
  
  const setInput = (input: string) => {
    setGoal(input);
  };

  const onCancel = () => {
    setGoal("");
    props.onCancel();
  };

  const onAddGoal = () => {
    props.onAddGoal({
      flutter: Math.random().toString(),
      name: goal,
    });
    setGoal("");
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
        <View style={styles.buttonContainer}>
          <Pressable style={styles.cancelButton}>
            <Button title="Cancel" onPress={onCancel} color="red" />
          </Pressable>
          <Pressable style={styles.cancelButton}>
            <Button title="Add Goal" onPress={onAddGoal} />
          </Pressable>
        </View>
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
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cancelButton: {
    width: "40%",
  },
});

export type Goal = {
  flutter: string;
  name: string;
};

export type Props = {
  onAddGoal: (goal: Goal) => void;
  onCancel: () => void;
  visible: boolean;
};

export default GoalInput;
