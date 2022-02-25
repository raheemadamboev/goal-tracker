import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalCard from "./components/GoalCard";
import GoalInput, { Goal } from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const onAddGoal = (goal: Goal) => {
    setGoals((currentGoals) => [...currentGoals, goal]);
  };

  const onRemoveGoal = (flutter: string) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.flutter !== flutter);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={onAddGoal} />
      <StatusBar style="auto" />
      <FlatList
        keyExtractor={(item, index) => item.flutter}
        data={goals}
        renderItem={(goal) => (
          <GoalCard goal={goal.item} onGoalPress={onRemoveGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
