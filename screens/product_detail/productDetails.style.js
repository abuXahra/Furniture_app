import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },

  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xxLarge,
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
  },
  price: {
    // padding: 10,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },

  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },

  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    gap: 5,
  },

  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
  },

  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },

  description: {
    fontFamily: "semibold",
    fontSize: SIZES.large - 2,
  },

  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },

  //  /location
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: SIZES.large,
  },

  locationInner: {
    flexDirection: "row",
    gap: 3,
  },

  // cart
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: SIZES.width - 44,
    marginHorizontal: SIZES.large,
  },

  cartBtn: {
    backgroundColor: COLORS.black,
    width: SIZES.width * 0.7,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  },

  cartTitle: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },

  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
