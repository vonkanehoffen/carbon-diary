import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../providers/theme";
import { TextInput } from "../components/atoms/TextInput";
import { Button } from "../components/atoms/Button";
import { useState } from "react";
import { supabase } from "../services/supabase";
import { Alert } from "react-native";
import { KeyboardAvoidingView } from "../components/atoms/KeyboardAvoidingView";
import { Link, router } from "expo-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      router.replace("/");
    }
    setLoading(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <Box m="m" flex={1} justifyContent="space-between">
          <Box mt="m">
            <Text variant="header">Welcome to Carbon Diary</Text>
          </Box>
          <Box>
            <Box mb="m">
              <TextInput
                label="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="email@address.com"
                autoCapitalize={"none"}
              />
            </Box>
            <Box mb="m">
              <TextInput
                label="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                autoCapitalize={"none"}
              />
            </Box>
            <Box mt="m">
              <Button
                title="Sign in"
                disabled={loading}
                onPress={() => signInWithEmail()}
              />
            </Box>
            <Box mt="m">
              <Link href="/welcome" asChild>
                <Button title="Go back" variant="ghost" />
              </Link>
            </Box>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
