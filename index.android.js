/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

//https://github.com/aksonov/react-native-router-flux

 var React = require('react-native');
 var {
   AppRegistry,
   Navigator,
   BackAndroid
 } = React;

var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

var HoomeScreen = require('./screens/homescreen.js');
var Screen1 = require('./screens/screen1.js');


var Actions = require('react-native-router-flux').Actions;

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
    Actions.pop();
    return true;
  }
  catch(err)  {
    console.log("Cannot pop. Exiting the app...")
    return false;
  }
});

var hello_rn = React.createClass({
  render: function() {

    return (
      <Router hideNavBar={true}>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

                <Route name="home" component={HoomeScreen} initial={true} wrapRouter={true} title="Launch" hideNavBar={true}/>
                <Route name="imagecache" component={Screen1} title="Screen1" hideNavBar={true}/>
      </Router>
    );
  }

});

AppRegistry.registerComponent('hello_rn', () => hello_rn);
