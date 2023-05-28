import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();
//Arquivo que configura as rotas das telas existentes
export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
