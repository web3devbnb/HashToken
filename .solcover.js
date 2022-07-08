// Contracts are compiled without optimization
// and with gas estimation distortion
// https://github.com/sc-forks/solidity-coverage/blob/master/HARDHAT_README.md#usage

module.exports = {
  skipFiles: [
    "libs",
    "libs",
    "libs",
    "BudBar.sol",
    "HashToken.sol",
    "Timelock.sol"
  ],
  measureStatementCoverage: false,
  measureFunctionCoverage: true,
};
