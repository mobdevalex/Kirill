import React, { Component } from 'react';

import { StyleSheet, View, SectionList, Text, Platform, Alert } from 'react-native';

export default class App extends Component<{}> {


    GetSectionListItem=(item)=>{

        Alert.alert(item)

    }


    render() {

        let A = ['Apple', 'Apricot', 'Avocado'] ;
        let B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
        let C = ['Cherry', 'Coconut'] ;

        return (

            <View style={{ marginTop : (Platform.OS) == 'ios' ? 20 : 0 }}>

                <SectionList

                    sections={[

                        { title: 'Fruits Name From A', data: A },

                        { title: 'Fruits Name From B', data: B },

                        { title: 'Fruits Name From C', data: C },

                    ]}

                    renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }

                    renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }

                    keyExtractor={ (item, index) => index }

                />

            </View>

        );
    }
}

const styles = StyleSheet.create({

    SectionHeaderStyle:{

        backgroundColor : '#CDDC39',
        fontSize : 20,
        padding: 5,
        color: '#fff',
    },

    SectionListItemStyle:{

        fontSize : 15,
        padding: 5,
        color: '#000',
        backgroundColor : '#F5F5F5'

    }


});