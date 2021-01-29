import React, {useState} from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const App = () => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      Alert.alert('I can see everything', e.data),
    );
  };

  const [showpic, setshowPic] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const HandleshowPic = () => {
    setshowPic(!showpic);
  };
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible}>
        <QRCodeScanner
          onRead={onSuccess}
          reactivate={true}
          reactivateTimeout={2000}
          containerStyle={{backgroundColor: '#fff'}}
          flashMode={RNCamera.Constants.FlashMode.auto}
          markerStyle={{borderColor: '#fff', borderRadius: 10}}
          showMarker={true}
          bottomViewStyle={{flex:1}}
          permissionDialogMessage={"Gods don't ask for permission"}
          buttonPositive={'OK'}
          topViewStyle={{flex: 0}}
          
          bottomContent={
            <TouchableOpacity
              onPress={HandleshowPic}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>Scan to QR Code</Text>
            </TouchableOpacity>
          }
        />
        <View style={styles.showMedusa}>
          {showpic ? (
            <Image
              style={styles.image}
              source={require('./assets/medusa.png')}
            />
          ) : null}
        </View>
      </Modal>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./assets/medusa.png')} />

        <Text style={styles.medusa}>Medusa gave you her eyes...</Text>
        <Text style={{fontSize: 18, color: '#fff', marginTop: 20}}>
          Click to Medusa Eyes
        </Text>
      </View>
      <View style={styles.touchButton}>
        <TouchableOpacity
          style={styles.modalTouch}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.modalTouchText}>MEDUSA EYES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    color: '#fff',
  },
  buttonTouchable: {
    padding: 20,
    borderRadius: 20,
    
    
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#5b0c12',
  },
  showMedusa: {
    alignItems: 'center',
    justifyContent: 'center',
    height:100
    
    
  },
  container: {
    flex: 1,
    backgroundColor: '#5b0c12',
    paddingHorizontal: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
  medusa: {
    marginTop: 20,
    paddingTop: 20,
    fontSize: 18,
    color: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  touchButton: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  modalTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#5b0c12',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
  },
  modalTouchText: {
    color: 'white',
    fontSize: 24,
  },
});

export default App;
