import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const GoalCard = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onGoalPress}>
      <View style={styles.cardGoals}>
        <Text>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
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
