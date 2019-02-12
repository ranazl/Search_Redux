import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import {setDelete} from '../service2/action';

class Main extends Component {

  constructor(props){
    super(props);

   this.state={
        text : '',
        index:''
    }
}

Remover = (index) => {

  this.props.setDelete(index)
//   this.setState({
//     text: ''
// })

}

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{fontSize:18}}>{this.props.text}</Text> */}
        
        <FlatList
          data={this.props.rana}
          keyExtractor={item => item}
          renderItem={({ item , index }) => <TouchableHighlight onPress={this.Remover.bind(this, index)}> 
            <Text style={styles.textt}>{item.text}</Text> 
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
    rana: state.items
    // datas : state
  };
};

export default connect(
  mapStateToProps,
  {setDelete}
)(Main);
