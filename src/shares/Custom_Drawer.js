// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';

// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const CustomDrawer = props => {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView
//         {...props}
//         contentContainerStyle={{backgroundColor: '#8200d6'}}>
//         <View
//           style={{padding: 20}}>
          
//           <Text
//             style={{
//               color: '#fff',
//               fontSize: 18,
//               fontFamily: 'Roboto-Medium',
//               marginBottom: 5,
//             }}>
//             John Doe
//           </Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text
//               style={{
//                 color: '#fff',
//                 fontFamily: 'Roboto-Regular',
//                 marginRight: 5,
//               }}>
//               280 Coins
//             </Text>
            
//           </View>
//         </View>
//         <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
//           <DrawerItemList {...props} />
//         </View>
//       </DrawerContentScrollView>
//       <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
//         <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontFamily: 'Roboto-Medium',
//                 marginLeft: 5,
//               }}>
//               Tell a Friend
//             </Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontFamily: 'Roboto-Medium',
//                 marginLeft: 5,
//               }}>
//               Sign Out
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CustomDrawer;