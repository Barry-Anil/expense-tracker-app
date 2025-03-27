import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";
import { spacingY } from "@/constants/theme";
import * as Icons from "phosphor-react-native";
const teamMembers = [
  { id: 1, name: "Karan Singh" },
  { id: 2, name: "Christopher" },
  { id: 3, name: "PowerApps Developer" },
  { id: 4, name: "Xamarin Sales Team" },
  { id: 5, name: "Nathakorn Siripanyawuthi" },
];
const salesData = [
    { region: 'SCAN DE CH IT 2025', currency: 'EURO', amount: '36,467' },
    { region: 'SCAN DE CH IT 2025', currency: 'NOK', amount: '351,560' },
    { region: 'USA JAN 2025', currency: 'USD', amount: '332,893' },
    { region: 'SCAN DE CH IT 2025', currency: 'SEK', amount: '324,695' },
    { region: 'OUTSIDE SHOP 2025', currency: 'THB', amount: '8,275' },
    { region: 'VG TEST 2025', currency: 'AUD', amount: '300' },
  ];

const ExpenseSummary = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [isFromDatePickerVisible, setFromDatePickerVisible] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisible] = useState(false);

  const showFromDatePicker = () => setFromDatePickerVisible(true);
  const hideFromDatePicker = () => setFromDatePickerVisible(false);
  const handleFromDateConfirm = (date: Date) => {
    setFromDate(date);
    hideFromDatePicker();
  };

  const showToDatePicker = () => setToDatePickerVisible(true);
  const hideToDatePicker = () => setToDatePickerVisible(false);
  const handleToDateConfirm = (date: Date) => {
    setToDate(date);
    hideToDatePicker();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <Header
          title="Sales Summary (Sam)"
          style={{ marginVertical: spacingY._10 }}
        />

        {/* Date Selection Section */}
        <View style={styles.dateContainer}>
          <Text style={styles.label}>Date:</Text>

          {/* From Date */}
          <TouchableOpacity
            style={styles.dateInput}
            onPress={showFromDatePicker}
          >
            <Text style={styles.dateText}>
              {fromDate ? fromDate.toLocaleDateString() : "DD/MM/YYYY"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.hyphen}>-</Text>

          {/* To Date */}
          <TouchableOpacity style={styles.dateInput} onPress={showToDatePicker}>
            <Text style={styles.dateText}>
              {toDate ? toDate.toLocaleDateString() : "DD/MM/YYYY"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date Pickers */}
        <DateTimePickerModal
          isVisible={isFromDatePickerVisible}
          mode="date"
          onConfirm={handleFromDateConfirm}
          onCancel={hideFromDatePicker}
        />

        <DateTimePickerModal
          isVisible={isToDatePickerVisible}
          mode="date"
          onConfirm={handleToDateConfirm}
          onCancel={hideToDatePicker}
        />

        <View
          style={styles.teamGrid}
        >
          {teamMembers.map((member) => (
            <Pressable key={member.id} style={styles.teamMember}>
              <Text style={styles.teamMemberText}>{member.name}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.tabContainer}>
          <Pressable style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Data</Text>
          </Pressable>
          <Pressable style={styles.tab}>
            <Text style={styles.tabText}>Summary</Text>
          </Pressable>
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.columnHeader, styles.salesTripHeader]}>
            Salestrip
          </Text>
          <Text style={[styles.columnHeader, styles.currencyHeader]}>
            Curr.
          </Text>
          <Text style={[styles.columnHeader, styles.amountHeader]}>Amount</Text>
        </View>

        <ScrollView style={styles.tableContainer}>
          {salesData.map((item, index) => (
            <View
              key={index}
              style={[
                styles.tableRow,
                index % 2 === 0 ? styles.rowEven : styles.rowOdd,
              ]}
            >
              <Text style={[styles.cellText, styles.regionCell]}>
                {item.region}
              </Text>
              <Text style={[styles.cellText, styles.currencyCell]}>
                {item.currency}
              </Text>
              <Text style={[styles.cellText, styles.amountCell]}>
                {item.amount}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Icons.CurrencyDollar size={18} color="#666" />
            <Text style={styles.totalText}>Total Orders: 29</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F4F1",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#0096C7",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  hyphen: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  teamGrid: {
    flexDirection: "row",
    flexWrap: "wrap", // Wrap elements into new rows
    justifyContent: "space-between",
    marginTop: 10,
  },
  
  teamMember: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 10,
    width: "32%", // Each item takes up 1/3rd of the row
    alignItems: "center",
    marginBottom: 10,
  },
  teamMemberText: {
    color: "#1976D2",
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 4,
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  tabTextActive: {
    color: '#1976D2',
    fontSize: 16,
    fontWeight: '500',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    padding: 12,
    marginTop: 8,
  },
  columnHeader: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  salesTripHeader: {
    flex: 2,
  },
  currencyHeader: {
    flex: 1,
    textAlign: 'center',
  },
  amountHeader: {
    flex: 1,
    textAlign: 'right',
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rowEven: {
    backgroundColor: '#f5f5f5',
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 14,
    color: '#333',
  },
  regionCell: {
    flex: 2,
  },
  currencyCell: {
    flex: 1,
    textAlign: 'center',
  },
  amountCell: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
