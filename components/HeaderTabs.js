import { TouchableOpacity, View, Text } from 'react-native';

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
      <HeaderButton
        text="Messages"
        btnColor="#E0FFFF"
        textColor="#008b8b"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Groups"
        btnColor="#d3d3d3"
        textColor="#E0FFFF"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({ activeTab, setActiveTab, text }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? '#E0FFFF' : '#d3d3d3',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? '#008b8b' : 'black',
          fontSize: 20,
          fontWeight: '500',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default HeaderTabs;
