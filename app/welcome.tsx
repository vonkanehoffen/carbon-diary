import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../providers/theme";
import { Button } from "../components/atoms/Button";
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box m="m" flex={1} justifyContent="space-between">
        <Text variant="header">Welcome to Carbon Diary</Text>
        <Box>
          <Box mb="s">
            <Link href="/sign-in" asChild>
              <Button title="Sign in" onPress={() => {}} />
            </Link>
          </Box>
          <Link href="/sign-up" asChild>
            <Button title="Sign up" onPress={() => {}} />
          </Link>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
