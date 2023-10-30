import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ViewCenter } from "../components/ViewCenter";
import { Text } from "../components/Themed";
import { Button } from "react-native";

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <ViewCenter>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
      <Text>Sign In modal</Text>
    </ViewCenter>
  );
}
