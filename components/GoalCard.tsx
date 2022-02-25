import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Goal } from "./GoalInput";

const GoalCard = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onGoalPress.bind(this, props.goal.flutter)}
      activeOpacity={0.3}
    >
      <View style={styles.cardGoals}>
        <Text>{props.goal.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardGoals: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#CCC",
    borderWidth: 1,
    borderColor: "black",
  },
});

export type Props = {
  goal: Goal;
  onGoalPress: (flutter: string) => void;
};

export default GoalCard;
