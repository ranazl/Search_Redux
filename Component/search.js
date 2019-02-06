import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {setText} from '../service2/action';
import {connect} from 'react-redux';



class search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <TextInput style={styles.inputStyle} onChangeText={input => this.props.setText(input)}></TextInput>
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
        backgroundColor: '#2c3e50',
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: 'yellow',
        marginHorizontal:20,
        marginBottom: 10,
    }
});



export default connect(null, {setText})(search);
