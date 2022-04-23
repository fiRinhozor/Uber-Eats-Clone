import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View>
      <HeaderButton />
      <HeaderButton />
      {/* Header Button */}
    </View>
  );
}

const HeaderButton = () => (
  <View>
    <TouchableOpacity>
      <Text>Delivery</Text>
    </TouchableOpacity>
  </View>
);
