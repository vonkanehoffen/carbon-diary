import { Slot, Stack, Tabs } from "expo-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function () {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Index Test ere",
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

// export default function () {
//   return (
//     <>
//       {/* <Header /> */}
//       <Stack />
//       <Footer />
//     </>
//   );
// }
