import { View, Text } from "react-native";

interface MainCardProps {
  loading: Boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View>
      {loading ? <Text>Cargando...</Text> : <Text>Contenido Listo</Text>}
    </View>
  );
}
