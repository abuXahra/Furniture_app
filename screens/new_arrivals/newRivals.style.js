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
    gap: 20,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    // zIndex: 9999,
    // width: SIZES.width - 50,
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
});

export default styles;
