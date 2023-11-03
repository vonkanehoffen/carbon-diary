import { Pressable } from "react-native";
import { Text, Box } from "../../providers/theme";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Ghost = "ghost",
}
interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

interface VariantDefValue {
  backgroundColor: string;
  color: string;
}

const variantDef = new Map<ButtonVariant, VariantDefValue>([
  [
    ButtonVariant.Primary,
    {
      backgroundColor: "primary",
      color: "white",
    },
  ],
  [
    ButtonVariant.Secondary,
    {
      backgroundColor: "secondary",
      color: "white",
    },
  ],
  [
    ButtonVariant.Ghost,
    {
      backgroundColor: "transparent",
      color: "primary",
    },
  ],
]);

export function Button({
  title,
  onPress,
  disabled,
  variant = ButtonVariant.Primary,
}: ButtonProps) {
  const v = variantDef.get(variant);
  if (!v) return false;
  // console.log(variantDef.get(variant));
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Box
        px="l"
        py="m"
        backgroundColor={v.backgroundColor}
        borderRadius="m"
        alignItems="center"
      >
        <Text color={v.color} variant="label">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}
