import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT, SHADOWS } from "../constants";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  containerDiv: {
    marginTop: SIZES.large * 2,
    flex: 1,
    padding: SIZES.medium,
  },
  activityIndicatorDiv: {
    marginTop: SIZES.large * 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: SIZES.medium,
  },
  headerDiv: {
    width: "100%",
  },
  headerSmall: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  headerBig: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  formInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  formBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  formBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  userViewContainer: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
  avatarContainer: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  avatarImage: {
    width: "80%",
    height: "80%",
  },
  deviceNameBox: {
    marginTop: SIZES.small,
  },
  deviceNameTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  lastModifiedBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lastModifiedTitle: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  lastModifiedValueBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lastModifiedValue: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
  bodyContainer: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  bodyHeadText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  bodyBox: {
    marginVertical: SIZES.small,
  },
  bodyText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.medium,
    height: 50,
  },
  bodyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  bodyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  deviceListContainer: {
    marginTop: SIZES.xLarge,
  },
  deviceListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  deviceListHeaderTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  deviceListHeaderBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  deviceCardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  deviceCardContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  deviceCardLogoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  deviceCardlogoImage: {
    width: "70%",
    height: "70%",
  },
  deviceCardTextContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  deviceCardName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  deviceCardLastModified: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  madeByMe: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
});

export default styles;
