const appEnv = {
  debug: {
    host: 'http://118.71.41.2:2222/'.trim(),
    hostAuth: 'http://118.71.41.2:2222/'.trim(),

    login: 'http://118.71.41.2:2222/'.trim(),
    userActiveHost: ''.trim(),
    appSecret: {
      ios: '',
      android: 'maoHM6DcZYemimMxldgFOIC1m7zhP_bxpWBvN',
    },
    environment: 'prod',
  },
  release: {
    host: ''.trim(),
    hostAuth: ''.trim(),
    login: ''.trim(),
    userActiveHost: ''.trim(),
    appSecret: {
      ios: '',
      android: 'maoHM6DcZYemimMxldgFOIC1m7zhP_bxpWBvN',
    },
    environment: 'prod',
  },
};
export default appEnv;
