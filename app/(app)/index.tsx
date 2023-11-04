import React from "react";
import { ViewCenter } from "../../components/ViewCenter";
import { Button } from "../../components/atoms/Button";
import { supabase } from "../../services/supabase";
import { Box, Text } from "../../providers/theme";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ViewCenter>
      <Box m="m">
        <Text>Authed Home</Text>
      </Box>
      <Link href="/new-entry" asChild>
        <Button title="New Entry" />
      </Link>
      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </ViewCenter>
  );
}
