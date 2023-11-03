import { Pressable } from "react-native";
import { forwardRef, type ElementRef } from "react";
import { Text, Box, Theme } from "../../providers/theme";
import { VariantProps, useTheme } from "@shopify/restyle";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: keyof Theme["buttonVariants"];
}

export const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  function Button({ title, onPress, disabled, variant = "primary" }, ref) {
    const theme = useTheme<Theme>();
    const backgroundColor = theme.buttonVariants[variant].backgroundColor;
    const color = theme.buttonVariants[variant].color;
    return (
      <Pressable onPress={onPress} disabled={disabled} ref={ref}>
        <Box
          px="l"
          py="m"
          backgroundColor={backgroundColor}
          borderRadius="m"
          alignItems="center"
        >
          <Text color={color} variant="label">
            {title}
          </Text>
        </Box>
      </Pressable>
    );
  },
);
