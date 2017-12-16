import {AppRegistry} from 'react-native';
import App from './app';

if (__OFFLINE__) {
    require('offline-plugin/runtime').install();
}

AppRegistry.registerComponent('lists', () => App);
AppRegistry.runApplication('lists', {
    rootTag: window.document.getElementById('react-root')
});
