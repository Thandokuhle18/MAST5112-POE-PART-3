import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const ChefMenuScreen = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("starter");
  const [items, setItems] = useState([
    { label: "Starter", value: "starter" },
    { label: "Main", value: "main" },
    { label: "Dessert", value: "dessert" },
    { label: "Refreshments", value: "refreshments" },
  ]);

  // Sample menu items
  const menuItems = [
    { id: "1", name: "Tomato Soup", category: "starter", price: "R5" },
    { id: "2", name: "Caesar Salad", category: "starter", price: "R6" },
    { id: "3", name: "Grilled Chicken", category: "main", price: "R12" },
    { id: "4", name: "Steak", category: "main", price: "R15" },
    { id: "5", name: "Tiramisu", category: "dessert", price: "R7" },
    { id: "6", name: "Ice Cream", category: "dessert", price: "R5" },
    {
      id: "7",
      name: "Strawberry Lemonade",
      category: "refreshments",
      price: "R17",
    },
    {
      id: "8",
      name: "Iced Matcha Green Tea",
      category: "refreshments",
      price: "R15",
    },
  ];

  // Utility function to calculate average price by category
  const calculateAveragePrice = (category) => {
    const categoryItems = menuItems.filter(
      (item) => item.category === category
    );
    if (categoryItems.length === 0) return 0;

    const total = categoryItems.reduce(
      (sum, item) => sum + parseFloat(item.price.replace("R", "")),
      0
    );
    return (total / categoryItems.length).toFixed(2); // Round to 2 decimal places
  };

  // Filter menu items based on selected category
  const filteredMenuItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Dropdown Picker */}
      <DropDownPicker
        open={open}
        value={selectedCategory}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedCategory}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      {/* Average Price Display */}
      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>
          Average Price for {selectedCategory}: R
          {calculateAveragePrice(selectedCategory)}
        </Text>
      </View>

      {/* Menu List */}
      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items in this category</Text>
        }
      />
    </View>
  );
};

export default ChefMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  dropdown: {
    marginBottom: 20,
    borderColor: "#ccc",
  },
  dropdownContainer: {
    borderColor: "#ccc",
  },
  averagePriceContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  averagePriceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
  },
});
