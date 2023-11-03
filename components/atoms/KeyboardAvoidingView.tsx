import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";

export function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      {...props}
    />
  );
}
