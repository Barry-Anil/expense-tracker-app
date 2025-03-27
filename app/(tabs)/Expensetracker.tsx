import { StyleSheet, View, Text } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Header from "@/components/Header";
import { useState } from "react";

const Expensetracker = () => {
    const [fromDate, setFromDate] = useState<DateType>();
    const [toDate, setToDate] = useState<DateType>();
    const defaultStyles = useDefaultStyles();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header  */}
        <Header
          title="Expense Tracker"
          style={{ marginVertical: spacingY._10 }}
        />

        </View>
    </ScreenWrapper>
  );
};

export default Expensetracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    backgroundColor: '#fff'
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: "center",
    gap: spacingY._15,
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "center",
  },
  avatar: {
    width: verticalScale(135),
    height: verticalScale(135),
    borderRadius: 200,
    alignSelf: "center",
    backgroundColor: colors.neutral300,
  },
  editIcon: {
    position: "absolute",
    right: 8,
    bottom: 5,
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: 5,
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: "center",
  },
  listIcons: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.neutral500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius._15,
    borderCurve: "continuous",
  },
  listItem: {
    marginBottom: verticalScale(17),
  },
  accountOptions: {
    marginTop: spacingY._35,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._10,
  },
  datePickerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
