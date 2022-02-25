import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalCard = (props: Props) => {
  return (
    <View style={styles.cardGoals}>
      <Text>{props.name}</Text>
    </View>
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
    name: string
};

export default GoalCard;