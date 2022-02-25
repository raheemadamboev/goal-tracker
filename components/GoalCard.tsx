import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const GoalCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onGoalPress}>
      <View style={styles.cardGoals}>
        <Text>{props.name}</Text>
      </View>
    </TouchableHighlight>
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
