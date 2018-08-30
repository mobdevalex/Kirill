import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (


            // Try setting `flexDirection` to `column`.
            <View style={{flex: 1, flexDirection: 'row'}}>
                {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue', margin: 1}}/>*/}
                {/*<View style={{width: 50, height: 50, backgroundColor: 'skyblue', margin: 1}}/>*/}
                {/*<View style={{width: 50, height: 50, backgroundColor: 'steelblue', margin: 1}}/>*/}

                {/*<View>*/}
                    {/*<Image source={pic} style={{width: 193, height: 110}}/>*/}
                {/*</View>*/}

                <View style={{flex: 1}}>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue', margin: 1}}>
                        <Text>Hello world!</Text>
                    </View>

                </View>


            </View>


        );
    }
};