module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], //bable plugin eka add karala expo eke reanimated eka use karanna puluwan mekedi. babel.config.js eke use karata passe cache eka clear karanna ona. ekata use karanava (npm start --reset-cache)
  };
};