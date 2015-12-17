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

var ToolbarAndroid = require('ToolbarAndroid');


var img1 = "http://resizing.flixster.com/c508lXCTGuK495BkM-hwOKkvbAY=/180x267/dkpu1ddg7pbsk.cloudfront.net/movie/11/19/11/11191141_ori.jpg";
//var img2 = "http://resizing.flixster.com/tzbU4vsTVhupOgmW5tiNe0MQStc=/178x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/29/11202951_ori.jpg";
//var img3 = "http://resizing.flixster.com/lfzBVmZJ4DlML1HQUXUP9eJYAlU=/180x267/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/33/11203306_ori.jpg";

var Screen1 = React.createClass({
  render: function() {

    return (
      <View style={styles.container}>

      <ToolbarAndroid
      style={styles.toolbar}
      title='Screen 1'
      logo={require('image!ic_app')}
      />

      <View style={styles.content}>
      <Text>this is Screen1</Text>
      </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  content: {
    alignItems:'center',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  image: {
        width:200,
        height:200,
  },
});

module.exports = Screen1;
