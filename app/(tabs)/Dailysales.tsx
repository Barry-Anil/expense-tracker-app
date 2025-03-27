import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";
import { spacingX, spacingY } from "@/constants/theme";
import * as Icons from "phosphor-react-native";
import AddOrderModal from "@/components/AddOrderModal";
import RNPickerSelect from "react-native-picker-select";
import { Dropdown } from "react-native-element-dropdown";

export interface OrderData {
  accounts_currencyint: string;
  order_from: number;
  order_to: number;
  orderdate: string;
  ordergroup: string;
  salesperson_name: string;
  salestrip_amount: number;
  salestrip_host: string;
  salestrip_master_uuid: string | null;
  salestrip_name: string;
  salestrip_notes: string;
  salestripyear: number;
  total_alt_count: number;
  total_normal_count: number;
  total_order_count: number;
}

export interface ApiResponse {
  data: OrderData[];
  error: string;
  message: string;
  status: string;
}

const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(2025, 0, 12 + i);
  return {
    date,
    day: date.getDate(),
    isToday: i === 1, // Making 13th the current day for demo
  };
});

const orderData = {
  date: "13/01/2025",
  team: "Samsurin Sales Team",
  orders: [
    {
      date: "13/01/25",
      grouping: "Dam-re-G2 Surin Jan 2025/Sam Surin",
      orderFrom: "130222",
      orderTo: "130223",
      amount: "700",
      currency: "USD",
      notes: "TEST ORDER",
    },
  ],
};

const years = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

const salesTrips = [
  { label: "USA JAN 2025", value: "USA JAN 2025" },
  { label: "SCAN DE CH IT 2025", value: "SCAN DE CH IT 2025" },
  { label: "VG ORDER 2025", value: "VG ORDER 2025" },
  { label: "OUTSIDE SHOP 2025", value: "OUTSIDE SHOP 2025" },
];

const months = [
  { label: "Jan", value: "jan" },
  { label: "Feb", value: "feb" },
  { label: "Mar", value: "mar" },
  { label: "Apr", value: "apr" },
  { label: "May", value: "may" },
  { label: "Jun", value: "jun" },
  { label: "Jul", value: "jul" },
  { label: "Aug", value: "aug" },
  { label: "Sep", value: "sep" },
  { label: "Oct", value: "oct" },
  { label: "Nov", value: "nov" },
  { label: "Dec", value: "dec" },
];
const Dailysales = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSalestrip, setSelectedSalestrip] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("jan");

  const [salesData, setSalesData] = useState<ApiResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    grouping: "VG ORDER MAR 2025",
    salesperson: "Samsurin Sales Team",
    date: "26/03/2025",
    orderFrom: "",
    orderTo: "",
    amount: "0",
    currency: "USD",
    host: "Sam Surin",
    total: "1",
    normal: "1",
    alteration: "0",
    notes: "",
  });

  const handleSubmit = () => {
    // Handle form submission here
    setModalVisible(false);
  };

  const fetchSalesData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://erponlineapim01.officevg.com/api/staging/salestrip/data",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer test-token",
            "Content-Type": "application/json",
            Filtercriteria: JSON.stringify({
              salestripyear: Number(selectedYear),
              salestripname: selectedSalestrip,
            }),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setSalesData(data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <Header
          title="Sales Summary (Sam)"
          style={{ marginVertical: spacingY._10 }}
        />
        <View style={styles.filterContainer}>
          <Dropdown
            onChange={(value) => value && setSelectedYear(value.value)}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select year"
            searchPlaceholder="Search..."
            data={years}
            value={selectedYear || "2025"}
            style={styles.dropdown}
            renderLeftIcon={() => (
              <Icons.ArrowDown
                size={16}
                color="#fff"
                style={{ marginLeft: 4 }}
              />
            )}
          />

          <Dropdown
            onChange={(value) => setSelectedSalestrip(value.value)}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Salestrip"
            searchPlaceholder="Search..."
            data={salesTrips}
            value={selectedSalestrip || ""}
            style={styles.dropdown}
            renderLeftIcon={() => (
              <Icons.ArrowDown
                size={16}
                color="#fff"
                style={{ marginLeft: 4 }}
              />
            )}
          />
          <Dropdown
            onChange={(value) => value && setSelectedMonth(value || "2025")}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select month"
            searchPlaceholder="Search..."
            data={months}
            value={selectedMonth || "jan"}
            style={styles.dropdown}
            renderLeftIcon={() => (
              <Icons.ArrowDown
                size={16}
                color="#fff"
                style={{ marginLeft: 4 }}
              />
            )}
          />
          {/* Sync Button */}
          <Pressable
            style={[styles.filterButton, styles.syncButton]}
            onPress={fetchSalesData}
          >
            <Icons.MagnifyingGlass size={24} color="#666" />
          </Pressable>
        </View>

        {/* Date Selection Section */}
        <View style={styles.calendar}>
          <Pressable style={styles.calendarArrow}>
            <Icons.ArrowLeft size={24} color="#666" />
          </Pressable>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.daysContainer}
          >
            {days.map((day) => (
              <Pressable
                key={day.day}
                style={[
                  styles.dayButton,
                  day.isToday && styles.activeDayButton,
                ]}
              >
                <Text
                  style={[styles.dayText, day.isToday && styles.activeDayText]}
                >
                  {day.day}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <Pressable style={styles.calendarArrow}>
            <Icons.ArrowRight size={24} color="#666" />
          </Pressable>
        </View>

        <View style={styles.dateHeader}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Date: {orderData.date}</Text>
            <Pressable style={styles.iconButton}>
              <Icons.Recycle size={18} color="#666" />
            </Pressable>
          </View>
          <View style={styles.teamContainer}>
            <Text style={styles.teamText}>{orderData.team}</Text>
            <Pressable
              style={styles.addButton}
              onPress={() => setModalVisible(true)}
            >
              <Icons.Plus size={20} color="#fff" />
            </Pressable>
          </View>
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.columnHeader, { flex: 1 }]}>Date</Text>
          <Text style={[styles.columnHeader, { flex: 2 }]}>Grouping/Host</Text>
          <Text style={[styles.columnHeader, { flex: 1 }]}>Order From</Text>
          <Text style={[styles.columnHeader, { flex: 1 }]}>Order To</Text>
          <Text style={[styles.columnHeader, { flex: 1 }]}>Amount</Text>
          <Text style={[styles.columnHeader, { flex: 1 }]}>Curr.</Text>
        </View>

        <ScrollView style={styles.ordersContainer}>
          {salesData?.data.map((order, index) => (
            <View key={index}>
              <View style={styles.orderRow}>
                <Text style={[styles.orderCell, { flex: 1 }]}>
                  {order.orderdate}
                </Text>
                <View style={[{ flex: 2 }]}>
                  <Text style={styles.groupingText}>{order.ordergroup}</Text>
                  <Pressable style={styles.editButton}>
                    <Icons.PencilCircle size={14} color="#666" />
                  </Pressable>
                </View>
                <Text style={[styles.orderCell, { flex: 1 }]}>
                  {order.order_from}
                </Text>
                <Text style={[styles.orderCell, { flex: 1 }]}>
                  {order.order_to}
                </Text>
                <Text style={[styles.orderCell, { flex: 1 }]}>
                  {order.salestrip_amount}
                </Text>
                <Text style={[styles.orderCell, { flex: 1 }]}>
                  {order.accounts_currencyint}
                </Text>
              </View>

              {/* Notes section */}
              {order.salestrip_notes && (
                <Text style={styles.notesText}>
                  Notes : {order.salestrip_notes}
                </Text>
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Total Orders: 1 Total Amount: 700
          </Text>
        </View>
      </View>
      <AddOrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={setFormData}
        initialData={formData}
      />
    </ScreenWrapper>
  );
};

export default Dailysales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    padding: 16,
    backgroundColor: "#2196F3",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    marginVertical: spacingY._10,
    paddingHorizontal: spacingX._5,
    width: "100%",
  },
  filterButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  syncButton: {
    backgroundColor: "#4CAF50",
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  calendar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  calendarArrow: {
    padding: 8,
  },
  daysContainer: {
    paddingHorizontal: 8,
    gap: 8,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  activeDayButton: {
    backgroundColor: "#2196F3",
  },
  dayText: {
    fontSize: 16,
    color: "#666",
  },
  activeDayText: {
    color: "#fff",
    fontWeight: "600",
  },
  dateHeader: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamText: {
    fontSize: 16,
    color: "#666",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#2196F3",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    padding: 12,
  },
  columnHeader: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  ordersContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  orderRow: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  orderCell: {
    fontSize: 14,
    color: "#333",
  },
  groupingText: {
    flex: 1,
  },
  editButton: {
    padding: 4,
  },
  notesContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  notesLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  notesText: {
    fontSize: 14,
    color: "black",
    paddingVertical: spacingY._10,
    backgroundColor: "#ADB2D4",
  },
  footer: {
    padding: 16,
    backgroundColor: "#2196F3",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  dropdown: {
    height: 40,
    width: 100,
    borderColor: "#ccc", // Lighter border for subtle look
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff", // White background for contrast
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 12,
    color: "#999", // Lighter color for placeholder text
  },
  selectedTextStyle: {
    fontSize: 12,
    color: "#333", // Darker text for selection
    fontWeight: "500",
  },
  iconStyle: {
    width: 14,
    height: 14,
    tintColor: "#666", // Light gray for icons
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
    paddingHorizontal: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
});
