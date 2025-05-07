/**
 * React Native module for DataWedge Intents integration
 * @module DataWedgeIntents
 */

'use strict';

import { Platform, NativeModules } from 'react-native';

// Solo inicializamos si estamos en Android
let DataWedgeIntents = {};

if (Platform.OS === 'android') {
    const { DataWedgeIntents: RNDataWedgeIntents } = NativeModules;

    // Constants (consider removing deprecated ones in future versions)
    const DEPRECATED_CONSTANTS = {
        ACTION_SOFTSCANTRIGGER: RNDataWedgeIntents.ACTION_SOFTSCANTRIGGER,
        ACTION_SCANNERINPUTPLUGIN: RNDataWedgeIntents.ACTION_SCANNERINPUTPLUGIN,
        ACTION_ENUMERATESCANNERS: RNDataWedgeIntents.ACTION_ENUMERATESCANNERS,
        ACTION_SETDEFAULTPROFILE: RNDataWedgeIntents.ACTION_SETDEFAULTPROFILE,
        ACTION_RESETDEFAULTPROFILE: RNDataWedgeIntents.ACTION_RESETDEFAULTPROFILE,
        ACTION_SWITCHTOPROFILE: RNDataWedgeIntents.ACTION_SWITCHTOPROFILE,
        START_SCANNING: RNDataWedgeIntents.START_SCANNING,
        STOP_SCANNING: RNDataWedgeIntents.STOP_SCANNING,
        TOGGLE_SCANNING: RNDataWedgeIntents.TOGGLE_SCANNING,
        ENABLE_PLUGIN: RNDataWedgeIntents.ENABLE_PLUGIN,
        DISABLE_PLUGIN: RNDataWedgeIntents.DISABLE_PLUGIN,
    };

    // Definimos las funciones dentro de DataWedgeIntents solo si estamos en Android
    DataWedgeIntents = {
        ...DEPRECATED_CONSTANTS,

        /**
         * @deprecated Use sendBroadcastWithExtras instead
         */
        sendIntent(action, parameterValue) {
            console.warn('sendIntent is deprecated. Use sendBroadcastWithExtras instead.');
            return RNDataWedgeIntents.sendIntent(action, parameterValue);
        },

        /**
         * Send broadcast with extras to DataWedge
         * @param {Object} extrasObject - The extras to include in the broadcast
         */
        sendBroadcastWithExtras(extrasObject) {
            if (!extrasObject || typeof extrasObject !== 'object') {
                throw new Error('extrasObject must be a valid object');
            }
            return RNDataWedgeIntents.sendBroadcastWithExtras(extrasObject);
        },

        /**
         * Register broadcast receiver for DataWedge intents
         * @param {Object} filter - The intent filter configuration
         */
        registerBroadcastReceiver(filter) {
            if (!filter || typeof filter !== 'object') {
                throw new Error('filter must be a valid object');
            }
            return RNDataWedgeIntents.registerBroadcastReceiver(filter);
        },

        /**
         * @deprecated Use registerBroadcastReceiver instead
         */
        registerReceiver(action, category) {
            console.warn('registerReceiver is deprecated. Use registerBroadcastReceiver instead.');
            return RNDataWedgeIntents.registerReceiver(action, category);
        },
    };
}

export default DataWedgeIntents;
