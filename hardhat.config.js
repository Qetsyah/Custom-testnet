require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: 'https://eth-goerli.g.alchemy.com/v2/IwreOx4GjJRhHTTvjt3dmQgqNr5Endgj',
      },
    chainId: 5,
    },
    forked: {
      url: "http://127.0.0.1:8545/",
    },
  },
};
