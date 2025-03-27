import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import * as Icons from "phosphor-react-native";

export interface OrderFormData {
  grouping: string;
  salesperson: string;
  date: string;
  orderFrom: string;
  orderTo: string;
  amount: string;
  currency: string;
  host: string;
  total: string;
  normal: string;
  alteration: string;
  notes: string;
}

interface AddOrderModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: OrderFormData) => void;
  initialData: OrderFormData;
}

export default function AddOrderModal({
  visible,
  onClose,
  onSubmit,
  initialData,
}: AddOrderModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add Item - VG ORDER 2025</Text>
            <Pressable style={styles.refreshButton}>
              <Icons.Recycle size={18} color="#666" />
            </Pressable>
          </View>

          <ScrollView style={styles.formContainer}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Grouping:</Text>
              <Pressable style={styles.select}>
                <Text style={styles.selectText}>{initialData.grouping}</Text>
                <Icons.ArrowDown size={16} color="#666" />
              </Pressable>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Salesperson:</Text>
              <TextInput
                style={styles.input}
                value={initialData.salesperson}
                onChangeText={(text) =>
                  onSubmit({ ...initialData, salesperson: text })
                }
              />
            </View>

            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                <Text style={styles.label}>Date:</Text>
                <Pressable style={styles.dateInput}>
                  <Text style={styles.dateInputText}>{initialData.date}</Text>
                  <Icons.Calendar size={16} color="#666" />
                </Pressable>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Order From:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.orderFrom}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, orderFrom: text })
                  }
                  placeholder="Order From"
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Order To:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.orderTo}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, orderTo: text })
                  }
                  placeholder="Order To"
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Amount:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.amount}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, amount: text })
                  }
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Currency:</Text>
                <Pressable style={styles.select}>
                  <Text style={styles.selectText}>{initialData.currency}</Text>
                  <Icons.ArrowDown size={16} color="#666" />
                </Pressable>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Host:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.host}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, host: text })
                  }
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Total:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.total}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, total: text })
                  }
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Normal:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.normal}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, normal: text })
                  }
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.label}>Alteration:</Text>
                <TextInput
                  style={styles.input}
                  value={initialData.alteration}
                  onChangeText={(text) =>
                    onSubmit({ ...initialData, alteration: text })
                  }
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Notes:</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={initialData.notes}
                onChangeText={(text) =>
                  onSubmit({ ...initialData, notes: text })
                }
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </ScrollView>

          <View style={styles.modalFooter}>
            <Pressable
              style={[styles.modalButton, styles.submitButton]}
              onPress={() => onSubmit(initialData)}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    maxWidth: 500,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  refreshButton: {
    padding: 8,
  },
  formContainer: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    color: "#333",
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    padding: 8,
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    padding: 8,
  },
  dateInputText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  modalFooter: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    gap: 8,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#2196F3",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  
  gridItem: {
    flex: 1,
    minWidth: '48%', // Ensures two columns layout
    marginBottom: 16,
  },
});
