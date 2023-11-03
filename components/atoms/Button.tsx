import { Pressable } from "react-native";
import { forwardRef, type ElementRef } from "react";
import { Text, Box, Theme } from "../../providers/theme";
import { VariantProps } from "@shopify/restyle";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: VariantProps<Theme, "buttonVariants">;
}

export const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  function Button({ title, onPress, disabled, variant }, ref) {
    const backgroundColor = "primary";
    const color = "white";
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
