import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const AppBar = ({ title, back }) => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>⬅</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {!back && <Button title="Logout" onPress={logout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#6200ea",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  backButton: {
    fontSize: 20,
    color: "white",
  },
});

export default AppBar;
