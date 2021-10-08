import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <View style={mainStyles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: mainColors.primary,
          }}>
          TODO APP
        </Text>
        <Icon name="delete" color="red" size={25} />
      </View>
      <View style={mainStyles.footer}>
        <View style={mainStyles.footer_container}>
          <TextInput placeholder="Add Todo here ..."></TextInput>
        </View>

        <TouchableOpacity>
          <View style={mainStyles.icon_container}>
            <Icon name="add" color={mainColors.white} size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//setup properties

const mainColors = {
  primary: '#1f145c',
  white: '#fff',
};

const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: mainColors.white,
  },

  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footer: {
    position: 'absolute',
    color: mainColors.white,
    width: '100%',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  footer_container: {
    backgroundColor: mainColors.white,
    elevation: 40,
    height: 50,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  icon_container: {
    height: 50,
    width: 50,
    backgroundColor: mainColors.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
