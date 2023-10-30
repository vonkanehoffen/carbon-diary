import React from "react";
import { View, Text } from "../../components/Themed";
import { ViewCenter } from "../../components/ViewCenter";
import { Button } from "react-native";
import { supabase } from "../../services/supabase";

export default function Home() {
  return (
    <ViewCenter>
      <Text>Authed Home</Text>
      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </ViewCenter>
  );
}
