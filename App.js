import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

const App = () => {
  const [inputTodo, setInputTodo] = React.useState('');
  const [fakeDataTodos, setFakeDataTodos] = React.useState([
    {id: 1, task: 'First Task', complete: true},
    {id: 2, task: 'Second Task', complete: true},
    {id: 3, task: 'Third Task', complete: false},
  ]);

  const FakeListItemData = ({dataListItem}) => {
    return (
      <View style={mainStyles.content_container_listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: mainColors.primary,
              textDecorationLine: dataListItem?.complete
                ? 'line-through'
                : 'none',
            }}>
            {dataListItem?.task}
          </Text>
        </View>

        {!dataListItem?.complete && (
          <TouchableOpacity
            style={[mainStyles.content_container_listItem_action]}>
            <Icon name="done" size={20} color={mainColors.white} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            mainStyles.content_container_listItem_action,
            {backgroundColor: 'red'},
          ]}>
          <Icon name="delete" size={20} color={mainColors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const addTodo = () => {
    console.log(inputTodo);

    if (inputTodo) {
      const createTodo = {
        id: Math.random(),
        task: inputTodo,
        complete: Math.random() < 0.5, //radnom boolean with proportion 50% -> 0.5
      };

      //set existing values of fake data then append with latest value
      setFakeDataTodos([...fakeDataTodos, createTodo]);
      setInputTodo('');
    } else {
      Alert.alert('Warning', 'input cannot blank', [{text: 'Ok'}], {
        cancelable: false,
      });
    }
  };

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

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20, paddingBottom: 100}}
          data={fakeDataTodos}
          renderItem={({item}) => <FakeListItemData dataListItem={item} />}
        />
      </View>

      <View style={mainStyles.footer}>
        <View style={mainStyles.footer_container}>
          <TextInput
            placeholder="Add Todo here ..."
            value={inputTodo}
            onChangeText={textTodo => setInputTodo(textTodo)}></TextInput>
        </View>

        <TouchableOpacity onPress={addTodo}>
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

  content_container_listItem: {
    padding: 20,
    backgroundColor: mainColors.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },

  content_container_listItem_action: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
});

export default App;
