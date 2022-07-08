module.exports = {
  networks: {
   development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    test: {
      testnet: "127.0.0.1",
      port: 545,
      network_id: "*"
    },
  },
  //
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
