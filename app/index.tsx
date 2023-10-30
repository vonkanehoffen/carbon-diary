import { View, Text } from "../components/Themed";
import { Link, Stack } from "expo-router";
import { ViewCenter } from "../components/ViewCenter";

export default function () {
  return (
    <ViewCenter>
      <Stack.Screen
        options={{
          title: "Index Test",
        }}
      />
      <Text>Index</Text>
      <Link href="/home/tab-one">View tab one</Link>
    </ViewCenter>
  );
}
