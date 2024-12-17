import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 9999,
    width: SIZES.width - 50,
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
    color: COLORS.primary,
  },
});

export default styles;
