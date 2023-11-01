import { Pressable } from "react-native";
import { Text, Box } from "../../providers/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ title, onPress, disabled }: ButtonProps) {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Box
        px="l"
        py="m"
        backgroundColor="primary"
        borderRadius="m"
        alignItems="center"
      >
        <Text color="white" variant="label">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}
