// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("Deploying Skillchain contract...");

  // 👇 match the exact contract name from Skillchain.sol
  const Skillchain = await hre.ethers.getContractFactory("Skillchain");
  const skillchain = await Skillchain.deploy();

  await skillchain.waitForDeployment();

  console.log(`✅ Skillchain deployed at: ${await skillchain.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
