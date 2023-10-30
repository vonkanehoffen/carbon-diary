import { ViewCenter } from "../../components/ViewCenter";
import { Text } from "../../components/Themed";
import { Link } from "expo-router";

export default function () {
  return (
    <ViewCenter>
      <Text>Tab two</Text>
      <Link href="/">View Index</Link>
    </ViewCenter>
  );
}
