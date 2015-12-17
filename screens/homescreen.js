/**
* Simple android home screen
*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text,
  Image,
  ToastAndroid,
  TouchableHighlight,
} = React;

var Actions = require('react-native-router-flux').Actions;

var ToolbarAndroid = require('ToolbarAndroid');

var Home = React.createClass({
  render: function() {

    return (

      <View style={styles.container}>

        <ToolbarAndroid
        style={styles.toolbar}
        title='Hello react-native'
        logo={require('image!ic_app')}
        actions={[{title: 'Settings', icon: require('image!ic_settings'), show: 'always'}]}
        onActionSelected={this.onActionSelected}
        />

          <View style={styles.content}>

            <TouchableHighlight
            onPress={() => ToastAndroid.show('Dummy #2', ToastAndroid.SHORT)}
            style={styles.button}>
            <Text style={styles.buttonText}>Dummy</Text>
            </TouchableHighlight>


            <TouchableHighlight
            onPress={() => Actions.imagecache()}
            style={styles.button}>
            <Text style={styles.buttonText}>Go to Screen1</Text>
            </TouchableHighlight>

          </View>

        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}
            style={styles.button}>
              <Text style={styles.buttonText}>Show toast</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  },

  onActionSelected: function(position) {
    if (position === 0) { // index of 'Settings'
    ToastAndroid.show('SETTINGS', ToastAndroid.SHORT);
  }
}

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    alignItems:'center',
  },
  footer: {
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  button: {
    height: 36,
    backgroundColor: "#555555",
    borderColor: "#555555",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15
  },
});

module.exports = Home;
