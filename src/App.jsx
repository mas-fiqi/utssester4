
import React, {Component} from 'react';
import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import Tambahan from './screens/Tambahan';

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
      <View style={{flex: 1, backgroundColor:'#e1bb80'}}>
        <StatusBar backgroundColor="#e1bb80" barstyle="light-content" />

        <View
          style={{flex: 0.9, backgroundColor: '#',marginHorizontal: 10, padding: 10, borderRadius: 45 }}>
          <Text
            style={{ color: '#778da9', fontSize: 70, textAlign: 'right', color: '#ffffff', }}>
            {this.state.hitung}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              // justifyContent: 'centen',
              hinght: 1,
              padding: 10,
              backgroundColor: '#352208',
              margin: 10,
              borderRadius: 1045
            }}
            onPress={() => this.setState({hitung: ''})}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              HAPUS
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
            }}
            onPress={() => this.masukanAngka('(')}>
            <Text
              style={{
                color: '#',
                fontSize: 24,
                textAlign: 'center',
                color: '#ffffff',
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
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
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
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
            }}
            onPress={() => this.masukanAngka('%')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
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
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(7)}>
            <Text
              style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#efd6ac',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(8)}>
            <Text style={{color: '#020202', fontSize: 24, textAlign: 'center'}}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 10
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
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
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
              backgroundColor: '#efd6ac',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(4)}>
            <Text
              style={{color: '#020202', fontSize: 24, textAlign: 'center'}}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 10
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
              backgroundColor: '#efd6ac',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(6)}>
            <Text style={{color: '#020202', fontSize: 24, textAlign: 'center'}}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
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
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(1)}>
            <Text
              style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#efd6ac',
              margin: 10,
              borderRadius: 10
              
            }}
            onPress={() => this.masukanAngka(2)}>
            <Text style={{color: '#020202', fontSize: 24, textAlign: 'center'}}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 10
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
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
            }}
            onPress={() => this.masukanAngka('/')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              /
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
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
            }}
            onPress={() => this.masukanAngka('.')}>
            <Text
              style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#efd6ac',
              margin: 10,
              borderRadius: 10
            }}
            onPress={() => this.masukanAngka(0)}>
            <Text style={{color: '#020202', fontSize: 24, textAlign: 'center'}}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#bc6c25',
              margin: 10,
              borderRadius: 20
            }}
            onPress={() => this.masukanAngka('00')}>
            <Text style={{color: '#ffffff', fontSize: 24, textAlign: 'center'}}>
              00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'centen',
              justifyContent: 'center',
              padding: 10,
              backgroundColor: '#020202',
              margin: 10,
              borderRadius: 20
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


