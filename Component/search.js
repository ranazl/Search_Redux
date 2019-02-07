import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight,} from 'react-native';
import {setItems} from '../service2/action';
import {connect} from 'react-redux';



class search extends Component {

    constructor(props){
        super(props);
    
       this.state={
            text : '',
        }
    }
    
    pressButton=() =>{
        this.props.setItems(this.state.text)
        this.setState({
            text: ''
        })
     
    }

    onTextChangeHandler=(input) =>{
        this.setState({
            text: input
        })
     
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:'row',borderTopWidth:2, borderTopColor: 'black',paddingTop: 10,backgroundColor:'#CD5C5C'}}>
                    <TextInput value={this.state.text} style={styles.inputStyle} onChangeText={this.onTextChangeHandler.bind(this)} placeholder={'text'}/>
                    <TouchableHighlight style={styles.sendPress} onPress={this.pressButton} underlayColor='rgba(100,100,100,.2)'><Text style={styles.send}>send</Text></TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CD5C5C',
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: '#f9ebea',
        // borderWidth: 1,
        elevation:10,
        marginHorizontal:20,
        marginBottom: 10,

    },
    sendPress: {
        width:60,
        height:50,
        borderRadius: 40,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        borderColor: 'black',
        // borderWidth:1,
        elevation:10,
    },
    send:{
        fontWeight:'bold',
        color:'black'
    }
});



export default connect(null, {setItems})(search);
