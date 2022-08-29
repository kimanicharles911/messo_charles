import { View, TextInput, StyleSheet, Button, Keyboard } from 'react-native';
import { Entypo, Feather } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements';

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View styles={styles.container}>
      <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
        <TextInput style={styles.input} placeholder="Search" value={searchPhrase} onChangeText={setSearchPhrase} onFocus={() => {setClicked(true)}}/>
        {clicked && (<Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => setSearchPhrase("")}/>)}
        <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }}/>
      </View>

      {clicked && (
        <View>
          <Button 
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          >
          </Button>
        </View>
      )}
      <View style={styles.avatar}>
        <Avatar rounded source="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg"/>
      </View>

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 5,
  },
  searchBar__unclicked: {
    padding: 7,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 30,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  avatar: {
    marginLeft: 5,
  },
});
