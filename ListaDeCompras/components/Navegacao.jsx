import { NavigationContainer } from '@react-navigation/native';
import { createTipoNavNavigator } from '@reactnavigation/tipoNav';
const TipoNav = createTipoNavNavigator();
<NavigationContainer>
<TipoNav.Navigator>
<TipoNav.Screen name="T1" component={ComponenteT1} />
<TipoNav.Screen name="T2" component={ComponenteT2} />
...
</TipoNav.Navigator>
</NavigationContainer>