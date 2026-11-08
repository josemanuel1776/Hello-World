import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MainCard from "./MainCard";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const nombre = "Jose Manuel";
  const apellido = "Mercedes Rodriguez";

  const estado = isLoading ? "Mostrar" : "Cargar";

  return (
    <View style={styles.container}>
      <Text>
        Hello World by {nombre} {apellido}
      </Text>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <Button title={estado} onPress={() => setIsLoading(!isLoading)} />
      </View>
      <MainCard loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: 4,
  },
});
