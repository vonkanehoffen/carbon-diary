import { View } from "./Themed";
import { StyleSheet } from "react-native";
import { Text } from "./Themed";

export function Footer() {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "green",
  },
});
