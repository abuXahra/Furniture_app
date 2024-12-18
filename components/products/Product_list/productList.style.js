import { StyleSheet } from "react-native";
import { SIZES } from "../../../constant";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingTop: SIZES.small / 2,
  },
  separator: {
    height: 20,
  },
});

export default styles;
