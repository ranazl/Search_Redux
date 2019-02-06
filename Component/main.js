import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{fontSize:18}}>{this.props.text}</Text> */}
        
        <FlatList
          data={this.props.items}
          keyExtractor={item => item}
          renderItem={({ item }) => <Text>{item} </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  }
});

const mapStateToProps = state => {
  return {
    items: state.items
    // datas : state
  };
};

export default connect(
  mapStateToProps,
  {}
)(Main);
