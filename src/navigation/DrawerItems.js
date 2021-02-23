import { MainStackNavigator, ContactStackNavigator, ProfileStackNavigator } from './StackNavigator';
const DrawerItems = [
  { id: 0, label: 'Sve radio stanice', icon: 'md-radio', iconType: 'Ionicons', routeName: 'Home', routeComponent:  MainStackNavigator },
  { id: 1, label: 'Bosna i Hercegovina', icon: require('../../assets/flags/ba.png'), iconType: 'flag', routeName: 'Contact', routeComponent: ContactStackNavigator },
  { id: 2, label: 'Srbija', icon: require('../../assets/flags/rs.png'), iconType: 'flag', routeName: 'Contact', routeComponent: ContactStackNavigator },
  { id: 3, label: 'Profil', icon: 'person-circle', iconType: 'Ionicons', routeName: 'Profil', routeComponent: ProfileStackNavigator },
];
export default DrawerItems;