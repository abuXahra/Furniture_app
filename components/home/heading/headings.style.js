import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: -10,
    marginHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 4,
  },
});

export default styles;
