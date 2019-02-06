import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import {Provider}  from 'react-redux';
import Main from '../Component/main';
import Search from '../Component/search';
import reducer from '../service2/reducer';

export const store = createStore(reducer)

class App3 extends Component {
    render() {
        return (
            <Provider style={styles.container} store={store}>
                <Main />
                <Search />
            </Provider>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default App3;
