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
                <View style={{flex:1,flexDirection:'row'}}>
                    <TextInput value={this.state.text} style={styles.inputStyle} onChangeText={this.onTextChangeHandler.bind(this)} placeholder={'text'}/>
                    <TouchableHighlight style={styles.send} onPress={this.pressButton}><Text>send</Text></TouchableHighlight>
                   
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
        backgroundColor: 'pink',
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        marginHorizontal:20,
        marginBottom: 10,
    },
    send: {
        width:60,
        height:50,
        borderRadius: 40,
        backgroundColor:'#fce4f2',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    }
});



export default connect(null, {setItems})(search);
