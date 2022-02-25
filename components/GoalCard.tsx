import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onGoalPress} activeOpacity={0.3}>
      <View style={styles.cardGoals}>
        <Text>{props.name}</Text>
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
  name: string;
  onGoalPress: () => void;
};

export default GoalCard;
