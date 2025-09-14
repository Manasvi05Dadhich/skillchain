require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: ["6cb3bb2b40f025f290a08f69df42a5af5ea2722d12f505fd0fb5ed05c620a6e8"],
      chainId: 80002,
    },
  },
};
