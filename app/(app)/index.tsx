import React from "react";
import { ViewCenter } from "../../components/ViewCenter";
import { Button } from "../../components/atoms/Button";
import { supabase } from "../../services/supabase";
import { Box, Text } from "../../providers/theme";

export default function Home() {
  return (
    <ViewCenter>
      <Box m="m">
        <Text>Authed Home</Text>
      </Box>
      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </ViewCenter>
  );
}
