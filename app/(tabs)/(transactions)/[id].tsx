// 🚀 ROTA: app/(tabs)/(transactions)/[id].tsx → /transactions/123
// 📱 LÓGICA: Tela de detalhes da transação com parâmetro dinâmico

import { Text, View } from "@/src/components/Themed";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function TransactionDetailsRoute() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Transação</Text>
      <Text style={styles.subtitle}>ID: {id}</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text>Informações detalhadas da transação aqui...</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    minWidth: 200,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
