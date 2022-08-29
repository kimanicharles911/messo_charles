import { createStackNavigator } from '@react-navigation/stack';
import { useState, useRef } from 'react';
import { Animated } from 'react-native-web';
import SearchBar from '../components/SearchBar';
import { Divider } from 'react-native-elements';
import HeaderTabs from '../components/HeaderTabs';
import { SafeAreaView, ScrollView } from 'react-native';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import list from '../common/list.module';

const Stack = createStackNavigator();

const Home = (props) => {
  const [activeTab, setActiveTab] = useState('Messages');
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }} animHeader={scrollOffsetY}>
        <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
        <Divider width={1}/>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View>
          {list.map((user, index) => (
            <ListItem key={index} bottomDivider onPress={() => this.props.navigation.navigate('Register')}>
              <Avatar rounded source={{uri: user.avatar_url}} size={64}/>
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default Home;