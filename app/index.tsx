import { Stack } from "expo-router";
import { Text, View } from "../components/Themed";
import { SignIn } from "../components/SignIn";

export default function Home() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Sign in",
        }}
      />
      <SignIn />
    </View>
  );
}
