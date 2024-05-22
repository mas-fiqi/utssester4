import React, {Component} from 'react';
import {View, StatusBar, Text, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung: 0,
    };
  }

  masukanAngka = value => {
    if (this.state.hitung == 0) {
      this.setState({hitung: value});
    } else {
      this.setState({hitung: this.state.hitung + '' + value});
    }
  };

  hitungHasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({hitung: hasil});
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="blue" barstyle="light-content" />

        <View
          style={{
            flex: 0.9,
            backgroundColor: '',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              color: '##ffffff',
              fontSize: 48,
              textAlign: 'right',
              color: '#ff5722',
            }}>
            {this.state.hitung}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#606c38',
              margin: 10,
            }}
            onPress={() => this.setState({hitung: 0})}>
            <Text style={{color: '##ffffff', fontSize: 24, textAlign: 'right'}}>
              HAPUS
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka('(')}>
            <Text
              style={{
                color: '##ffffff',
                fontSize: 24,
                textAlign: 'center',
                color: '#606c38',
              }}>
              (
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(')')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka('/')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              /
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka('*')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              x
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(7)}>
            <Text
              style={{color: '##ffffff', fontSize: 24, textAlign: 'center'}}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(8)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(9)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.masukanAngka('+')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(4)}>
            <Text
              style={{color: '##ffffff', fontSize: 24, textAlign: 'center'}}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(5)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(6)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka('-')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(1)}>
            <Text
              style={{color: '##ffffff', fontSize: 24, textAlign: 'center'}}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(2)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'crimson',
              margin: 10,
            }}
            onPress={() => this.masukanAngka(3)}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '',
              margin: 10,
            }}
            onPress={() => this.hitungHasil('=')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;
