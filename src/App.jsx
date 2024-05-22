import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung: 0,
    };
  } 
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="blue" barstyle="light-content" />

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'##ffffff', fontSize: 24, textAlign: 'center'}}>HAPUS</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'##ffffff', fontSize: 24, textAlign: 'center'}}>(</Text>
          </View>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>)</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>/</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>x</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'##ffffff', fontSize: 24, textAlign: 'center'}}>7</Text>
          </View>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>8</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>9</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>+</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'##ffffff', fontSize: 24, textAlign: 'center'}}>4</Text>
          </View>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>5</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>6</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>-</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'##ffffff', fontSize: 24, textAlign: 'center'}}>1</Text>
          </View>
          <View style={{flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>2</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: 'crimson', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>3</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'centen', justifyContent: 'center', padding: 10, backgroundColor: '', margin: 10}}>
            <Text style={{color:'#ffffff', fontSize: 24, textAlign: 'center'}}>=</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default App;