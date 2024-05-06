import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostScreen from '../screens/post-screen';
import ProjectScreen from '../screens/project-screen';
import NotificationScreen from '../screens/notification-screen';
import UserScreen from '../screens/user-screen';
import { CompositeScreenProps, NavigationContainer } from '@react-navigation/native';
import { S, TS, color, ms } from '../screens/themes';
import { SvgProps } from 'react-native-svg';
import { Bell01, Briefcase02, FileAttachment02, SearchRefraction, User01 } from '../assets/icons';
import NavigationStack, { AppStackParamList, AppStackScreenProps } from './navigation-stack';

  type TabParamList = {
    SearchScreen: undefined;
    UserScreen: undefined;
    NotificationScreen: undefined;
    PostScreen: undefined;
    ProjectScreen: undefined;
  };
  export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;

  export interface TabBarIconProps {
    focused: boolean;
    icon?: React.FC<SvgProps>;
    iconFocused?: React.FC<SvgProps>;
    iconUnfocused?: React.FC<SvgProps>;
    title?: string;
    titleStyle?: TextStyle;
    containerStyle?: ViewStyle;
    indicator?: boolean;
  }
  export const TabBarIcon = (props: TabBarIconProps) => {
    const styles = StyleSheet.create({
      tabBarIconContainer: {
        ...S.centerAll,
        ...props.containerStyle,
      },
      tabBarTitle: {
        ...TS.textXsBold,
        color: props.focused ? color.primary[500] : color.gray[500],
        ...props.titleStyle,
      },
      indicator: {
        height: ms(8),
        width: ms(8),
        backgroundColor: color.error[600],
        position: 'absolute',
        right: ms(4),
        top: ms(4),
        borderRadius: ms(8),
      },
    });
    
  const IconFocused = props.iconFocused || props.icon || View;
  const IconUnfocused = props.iconUnfocused || props.icon || View;

  const icon = props.focused ? (
    <View>
      <IconFocused
        color={color.primary[500]}
        style={{ marginVertical: ms(4) }}
      />
      {props.indicator ? <View style={styles.indicator} /> : null}
    </View>
  ) : (
    <View>
      <IconUnfocused
        color={color.gray[500]}
        style={{ marginVertical: ms(4) }}
      />
      {props.indicator ? <View style={styles.indicator} /> : null}
    </View>
  );
  const title = props.title ? (
    <Text style={styles.tabBarTitle}>{props.title}</Text>
  ) : (
    <View />
  );

  return (
    <View style={styles.tabBarIconContainer}>
      {icon}
      {title}
    </View>
  );
};


  const Tab = createBottomTabNavigator<TabParamList>();

  
export const NavigationButton = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: {
          minHeight: ms(64),
        },
        tabBarItemStyle: {
          height: ms(48),
          marginVertical: ms(8),
        },
        tabBarIconStyle: {
          flex: 1,
        },
        }}>
        <Tab.Screen name="SearchScreen" component={NavigationStack} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={SearchRefraction}
                iconUnfocused={SearchRefraction}
                title='Dịch vụ'
                />
            ),
          }}
        />
          <Tab.Screen name="PostScreen" component={PostScreen}
           options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={FileAttachment02}
                iconUnfocused={FileAttachment02}
                title='Bài Đăng'
                />
            ),
          }}/>
          <Tab.Screen name="ProjectScreen" component={ProjectScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={Briefcase02}
                iconUnfocused={Briefcase02}
                title='Dự án'
                />
            ),
          }}/>
          <Tab.Screen name="NotificationScreen" component={NotificationScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={Bell01}
                iconUnfocused={Bell01}
                title='Thông báo'
                />
            ),
          }}/>
          <Tab.Screen name="UserScreen" component={UserScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={User01}
                iconUnfocused={User01}
                title='Tài khoản'
                />
            ),
          }}/>
      </Tab.Navigator>
  )
}
