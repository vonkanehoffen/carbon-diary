import { PropsWithChildren } from "react";
import { View } from "./Themed";
import { StyleSheet } from "react-native";

export function ViewCenter({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
