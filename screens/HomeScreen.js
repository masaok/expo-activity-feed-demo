import React from 'react';

import {
  STREAM_API_KEY,
  STREAM_API_TOKEN,
  STREAM_APP_ID,
} from '../env'

import SafeAreaView from 'react-native-safe-area-view';

import {
  StreamApp,
  FlatFeed,
  Activity,
  LikeButton,
  StatusUpdateForm,
} from 'expo-activity-feed';

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <StreamApp
        apiKey={STREAM_API_KEY}
        appId={STREAM_APP_ID}
        token={STREAM_API_TOKEN}
      >
        <FlatFeed Activity={CustomActivity} notify />
        <StatusUpdateForm feedGroup="timeline" />
      </StreamApp>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};