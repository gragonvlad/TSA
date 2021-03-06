## What is this project for?

Inspired by:

[TSA paid $1.4 million for Randomizer app that chooses left or right](http://www.geek.com/apps/tsa-paid-1-4-million-for-randomizer-app-that-chooses-left-or-right-1651337/)

[TSA paid IBM $47,400 for an app that only pointed right or left](http://mashable.com/2016/04/04/tsa-ibm-randomizer-app/#aPKBU.b62Pqw)

[Guy makes 1.4 million dollar TSA app in 10 minutes](https://www.reddit.com/r/videos/comments/4deagz/)

-- Watch this Youtube video:

[<img src="./youtube.png">](https://youtu.be/P_KmFJ2gGzw)


## Technology used

* [React-native](https://github.com/facebook/react-native)
* [Redux](https://github.com/reactjs/redux)
* [immutable](https://facebook.github.io/immutable-js/)

## Why do this?

React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. 

100% common shared code between iOS and Android.

This $1.4 million app is an excellent topic for practising using the Redux structure to manage the React application.

This can be a new [To-Do mvc app](https://github.com/tastejs/todomvc) in Flux world to demostrate event based library e.g: Flux, Redux, Reflux, etc.

## Can use this project as a React-Native starter-kit?

Yes! You can. This project can be used as a boilerplate for RN applications.

## Why do up and down?

The ultimate $1.4 million TSA app definitely has the copyright, we can't do left and right directions.


## Installation 

```
$ npm install 
```

## iOS

Open ios\TSA.xcodeproj in XCode to run.

## Android


```
react-native start > /dev/null 2>&1 &
adb reverse tcp:8081 tcp:8081
react-native run-android

```
** You need change  android/app/build.gradle of following to your installed tool version number

```
buildToolsVersion "23.0.3"
```

## Output

iOS

![TSA](./tsa.gif)

Android

![Android](./android.gif)