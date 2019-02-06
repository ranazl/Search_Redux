import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:18}}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps=(state) =>{
    return{
        text:state.text
    }
}

export default connect(mapStateToProps,{})(Main);
