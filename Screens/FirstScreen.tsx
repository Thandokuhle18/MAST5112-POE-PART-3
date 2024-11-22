import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";


const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please select Your Role</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="I am the Chef"
          onPress={() => navigation.navigate("Chef")}
        />
        <Button
          title="I am the Customer"
          onPress={() => navigation.navigate("Customer")}
        />
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "space-between",
    height: 100, // Adjust the height to space out buttons
  },
});
