import { View, Text } from "../components/Themed";
import { Link, Stack } from "expo-router";
import { ViewCenter } from "../components/ViewCenter";

export default function () {
  return (
    <ViewCenter>
      <Stack.Screen
        options={{
          title: "Home Test",
        }}
      />
      <Text>Home</Text>
      <Link href="/">View index</Link>
    </ViewCenter>
  );
}
