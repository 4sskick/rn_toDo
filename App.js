
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView, 
  StyleSheet,
  View, 
  Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style="{{flex:1, backgroundColor: mainColor.white}}">

      <View style={mainStyles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: mainColors.primary}}>
          TODO APP
        </Text>
        <Icon name="delete" color="red" size={25}/>
      </View>

    </SafeAreaView>
  );
};


//setup properties

const mainColors = {
  primary: '#1f145c'
  , white: '#fff'
}

const mainStyles = StyleSheet.create({
  header: {
    padding: 20
    , flexDirection: 'row'
    , alignItems: 'center'
    , justifyContent: 'space-between'
  }
});

export default App;
