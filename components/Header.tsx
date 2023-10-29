import { View } from "./Themed";
import { StyleSheet } from "react-native";
import { Text } from "./Themed";

export function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    paddingTop: 50,
    backgroundColor: "red",
  },
});
