import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalCard from "./components/GoalCard";
import GoalInput, { Goal } from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onAddGoal = (goal: Goal) => {
    setGoals((currentGoals) => [...currentGoals, goal]);
    setModalVisible(false);
  };

  const onRemoveGoal = (flutter: string) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.flutter !== flutter);
    });
  };

  const onAddGoalPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Button title="Add Goal" onPress={onAddGoalPress} />
      <GoalInput onAddGoal={onAddGoal} visible={modalVisible} />
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
