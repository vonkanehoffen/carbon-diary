import {
  StyleSheet,
  TextInputProps as _TextInputProps,
  TextInput as RNTextInput,
} from "react-native";
import { Text, Box } from "../../providers/theme";

interface TextInputProps extends _TextInputProps {
  label: string;
}

export function TextInput({ label, style, ...rest }: TextInputProps) {
  return (
    <Box>
      <Text variant="label" mb="s">
        {label}
      </Text>
      <RNTextInput style={[styles.input, style]} {...rest} />
    </Box>
  );
}
const styles = StyleSheet.create({
  input: {
    fontSize: 24,
  },
});
