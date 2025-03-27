// import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
// import { ChevronLeft, ChevronRight, RefreshCw, Plus, Calendar, CreditCard as Edit2, ChevronDown } from 'lucide-react-native';
// import { useState } from 'react';
// import AddOrderModal, { OrderFormData } from '@/components/AddOrderModal';

// const years = ['2025', '2024', '2023'];
// const salestrips = ['USA JAN 2025', 'SCAN DE CH IT 2025', 'VG ORDER 2025', 'OUTSIDE SHOP 2025'];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const days = Array.from({ length: 7 }, (_, i) => {
//   const date = new Date(2025, 0, 12 + i);
//   return {
//     date,
//     day: date.getDate(),
//     isToday: i === 1, // Making 13th the current day for demo
//   };
// });

// const orderData = {
//   date: '13/01/2025',
//   team: 'Samsurin Sales Team',
//   orders: [
//     {
//       date: '13/01/25',
//       grouping: 'Dam-re-G2 Surin Jan 2025/Sam Surin',
//       orderFrom: '130222',
//       orderTo: '130223',
//       amount: '700',
//       currency: 'USD',
//       notes: 'TEST ORDER',
//     },
//   ],
// };

// export default function DailySales() {
//   const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 13));
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedYear, setSelectedYear] = useState('2025');
//   const [selectedSalestrip, setSelectedSalestrip] = useState('USA JAN 2025');
//   const [selectedMonth, setSelectedMonth] = useState('Jan');
//   const [formData, setFormData] = useState<OrderFormData>({
//     grouping: 'VG ORDER MAR 2025',
//     salesperson: 'Samsurin Sales Team',
//     date: '26/03/2025',
//     orderFrom: '',
//     orderTo: '',
//     amount: '0',
//     currency: 'USD',
//     host: 'Sam Surin',
//     total: '1',
//     normal: '1',
//     alteration: '0',
//     notes: '',
//   });

//   const handleSubmit = (data: OrderFormData) => {
//     setFormData(data);
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Daily Sales</Text>
//         <View style={styles.filterContainer}>
//           {/* Year Dropdown */}
//           <Pressable style={styles.filterButton}>
//             <Text style={styles.filterButtonText}>{selectedYear}</Text>
//             <ChevronDown size={16} color="#fff" style={{ marginLeft: 4 }} />
//           </Pressable>

//           {/* Salestrip Dropdown */}
//           <Pressable style={styles.filterButton}>
//             <Text style={styles.filterButtonText}>{selectedSalestrip}</Text>
//             <ChevronDown size={16} color="#fff" style={{ marginLeft: 4 }} />
//           </Pressable>

//           {/* Month Dropdown */}
//           <Pressable style={styles.filterButton}>
//             <Text style={styles.filterButtonText}>{selectedMonth}</Text>
//             <ChevronDown size={16} color="#fff" style={{ marginLeft: 4 }} />
//           </Pressable>

//           {/* Sync Button */}
//           <Pressable style={[styles.filterButton, styles.syncButton]}>
//             <Text style={styles.filterButtonText}>Sync</Text>
//           </Pressable>
//         </View>
//       </View>

//       <View style={styles.calendar}>
//         <Pressable style={styles.calendarArrow}>
//           <ChevronLeft size={24} color="#666" />
//         </Pressable>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.daysContainer}
//         >
//           {days.map((day) => (
//             <Pressable
//               key={day.day}
//               style={[
//                 styles.dayButton,
//                 day.isToday && styles.activeDayButton,
//               ]}
//             >
//               <Text style={[
//                 styles.dayText,
//                 day.isToday && styles.activeDayText,
//               ]}>{day.day}</Text>
//             </Pressable>
//           ))}
//         </ScrollView>
//         <Pressable style={styles.calendarArrow}>
//           <ChevronRight size={24} color="#666" />
//         </Pressable>
//       </View>

//       <View style={styles.dateHeader}>
//         <View style={styles.dateContainer}>
//           <Text style={styles.dateText}>Date: {orderData.date}</Text>
//           <Pressable style={styles.iconButton}>
//             <RefreshCw size={18} color="#666" />
//           </Pressable>
//         </View>
//         <View style={styles.teamContainer}>
//           <Text style={styles.teamText}>{orderData.team}</Text>
//           <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
//             <Plus size={20} color="#fff" />
//           </Pressable>
//         </View>
//       </View>

//       <View style={styles.tableHeader}>
//         <Text style={[styles.columnHeader, { flex: 1 }]}>Date</Text>
//         <Text style={[styles.columnHeader, { flex: 2 }]}>Grouping/Host</Text>
//         <Text style={[styles.columnHeader, { flex: 1 }]}>Order From</Text>
//         <Text style={[styles.columnHeader, { flex: 1 }]}>Order To</Text>
//         <Text style={[styles.columnHeader, { flex: 1 }]}>Amount</Text>
//         <Text style={[styles.columnHeader, { flex: 1 }]}>Curr.</Text>
//       </View>

//       <ScrollView style={styles.ordersContainer}>
//         {orderData.orders.map((order, index) => (
//           <View key={index} style={styles.orderRow}>
//             <Text style={[styles.orderCell, { flex: 1 }]}>{order.date}</Text>
//             <View style={[styles.orderCell, { flex: 2 }]}>
//               <Text style={styles.groupingText}>{order.grouping}</Text>
//               <Pressable style={styles.editButton}>
//                 <Edit2 size={14} color="#666" />
//               </Pressable>
//             </View>
//             <Text style={[styles.orderCell, { flex: 1 }]}>{order.orderFrom}</Text>
//             <Text style={[styles.orderCell, { flex: 1 }]}>{order.orderTo}</Text>
//             <Text style={[styles.orderCell, { flex: 1 }]}>{order.amount}</Text>
//             <Text style={[styles.orderCell, { flex: 1 }]}>{order.currency}</Text>
//           </View>
//         ))}
//         <View style={styles.notesContainer}>
//           <Text style={styles.notesLabel}>Notes:</Text>
//           <Text style={styles.notesText}>{orderData.orders[0].notes}</Text>
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           Total Orders: 1 Total Amount: 700
//         </Text>
//       </View>

//       <AddOrderModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onSubmit={handleSubmit}
//         initialData={formData}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     padding: 16,
//     backgroundColor: '#2196F3',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 12,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   filterButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   syncButton: {
//     backgroundColor: '#4CAF50',
//   },
//   filterButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   calendar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   calendarArrow: {
//     padding: 8,
//   },
//   daysContainer: {
//     paddingHorizontal: 8,
//     gap: 8,
//   },
//   dayButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   activeDayButton: {
//     backgroundColor: '#2196F3',
//   },
//   dayText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   activeDayText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   dateHeader: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//   },
//   iconButton: {
//     padding: 8,
//   },
//   teamContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   teamText: {
//     fontSize: 16,
//     color: '#666',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#2196F3',
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#2196F3',
//     padding: 12,
//   },
//   columnHeader: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   ordersContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   orderRow: {
//     flexDirection: 'row',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   orderCell: {
//     fontSize: 14,
//     color: '#333',
//   },
//   groupingText: {
//     flex: 1,
//   },
//   editButton: {
//     padding: 4,
//   },
//   notesContainer: {
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   notesLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#666',
//     marginBottom: 4,
//   },
//   notesText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   footer: {
//     padding: 16,
//     backgroundColor: '#2196F3',
//   },
//   footerText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//     textAlign: 'center',
//   },
// });