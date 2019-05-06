const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "48899b10645a48e189e345be4be19ece";

const fs = require('fs');
const privateKeys = JSON.parse(fs.readFileSync("keys.json").toString().trim()).private;

module.exports = {
  networks: {
    'dev.fifs': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'dev.auction': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'kovan': {
      provider: () => new HDWalletProvider(privateKeys, `https://kovan.infura.io/v3/${infuraKey}`, 0, 5),
      network_id: 42
    }
  }
};
