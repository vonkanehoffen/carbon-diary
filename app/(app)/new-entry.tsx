import { useState } from "react";
import { TextInput } from "../../components/atoms/TextInput";
import { Text, Box } from "../../providers/theme";
import { Button } from "../../components/atoms/Button";
import { supabase } from "../../services/supabase";

export default function NewEntry() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = async () => {
    console.log("add:", title, quantity);
    // const user = await supabase.auth.getUser();
    // console.log("user:", user);
    const { data, error } = await supabase
      .from("diary")
      .insert([{ title, quantity }])
      .select();

    console.log("done", data, error);
  };

  return (
    <Box m="m">
      <Box mb="m">
        <Text variant="header">New Entry</Text>
      </Box>
      <Box mb="m">
        <TextInput
          label="Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Things"
        />
      </Box>
      <Box mb="m">
        <TextInput
          label="Quantity"
          onChangeText={(text) => setQuantity(text)}
          value={quantity}
          placeholder="Qty"
        />
      </Box>
      <Button title="Add" onPress={handleAdd} />
    </Box>
  );
}
