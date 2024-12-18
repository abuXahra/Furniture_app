import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
    color: COLORS.primary,
  },

  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },

  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },

  cartNumber: {
    fontFamily: "regular",
    color: COLORS.lightWhite,
    fontSize: 10,
  },

  verticalSpacing: {
    height: 100,
  },
});

export default styles;
