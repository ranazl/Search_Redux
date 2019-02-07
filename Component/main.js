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

  constructor(props){
    super(props);

   this.state={
        text : '',
        index:''
    }
}

Remover =(item) => {

  this.props.setDelete(this.state.text)
  this.setState({
    text: ''
})

}

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{fontSize:18}}>{this.props.text}</Text> */}
        
        <FlatList
          data={this.props.items}
          keyExtractor={item => item}
          renderItem={({ item }) => <TouchableHighlight onPress={x => this.Remover(item)}> 
            <Text style={styles.textt}>{item}</Text> 
            </TouchableHighlight>
            }
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
    backgroundColor: "white"
  },
  textt: {
    color:'black',
    fontSize: 18,
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
