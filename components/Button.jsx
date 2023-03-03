import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ theme, onPress, children }) {
  let themeStyle = styles.defaultStyle;

  if (theme == "primary") {
    themeStyle = styles.primaryStyle;
  }

  return (
    <View style={[styles.buttonContainer, themeStyle.container]}>
      <Pressable style={[styles.button, themeStyle.button]} onPress={onPress}>
        {theme == "primary" && (
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, themeStyle.label]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  defaultStyle: {},
  primaryStyle: {
    container: { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
    button: { backgroundColor: "#fff" },
    label: { color: "#25292e" },
  },
});
