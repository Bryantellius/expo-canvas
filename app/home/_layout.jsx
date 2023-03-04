import { Slot } from "expo-router";

export default function HomeLayout() {
  return (
    <>
      <View>
        <Text>Header</Text>
      </View>
      <Slot />
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}
