import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalCard = (props: Props) => {
  return (
    <TouchableNativeFeedback onPress={props.onGoalPress}>
      <View style={styles.cardGoals}>
        <Text>{props.name}</Text>
      </View>
    </TouchableNativeFeedback>
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
  name: string;
  onGoalPress: () => void;
};

export default GoalCard;
