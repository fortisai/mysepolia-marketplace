async function main() {
    const msNFTFactory = await ethers.getContractFactory("MySepoliaNFT");
    const msNFT = await msNFTFactory.deploy();
    await msNFT.deployed();
    console.log("Contract deployed to address:", msNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }
    );
