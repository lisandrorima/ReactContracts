const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "^0.6",    // Fetch exact version from solc-bin (default: truffle's version)

    }},
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },

    private: {
      host: "127.0.0.1",
      port: 7545,             // Custom port
      network_id: 5777,       // Custom network
      gas: 6721975,           // Gas sent with each transaction (default: ~6700000)
      network_id: "*"
    }
  }
};