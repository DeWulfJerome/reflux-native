module.exports = function() {
  const stack = `
    import React from "react";
    import { View, Text } from "react-native";
    import { createAppContainer, createSwitchNavigator } from "react-navigation";

    const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
        Main: () => {
            return (
                <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#141d26',
                }}>
                <Text style={{fontSize: 25, fontWeight: '800', color: '#fff'}}>
                  🔥🔥REFLUX-NATIVE🔥🔥
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#c51f5d',
                    fontStyle: 'italic',
                    marginTop: 5,
                  }}>
                  By Appfuel
                </Text>
              </View>
            );
        }
        },
        {
        initialRouteName: "Main"
        }
    )
    );

    export default AppContainer;
    `;
  return stack;
};
