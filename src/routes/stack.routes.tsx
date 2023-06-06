import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { EditaCliente } from "../screens/Editar/EditaCliente";
import { Perfil } from "../screens/Perfil";

const { Screen, Navigator } = createNativeStackNavigator();
//Arquivo que configura as rotas das telas existentes
export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Perfil" component={Perfil} />
      <Screen name="EditaCliente" component={EditaCliente} />
    </Navigator>
  );
};
