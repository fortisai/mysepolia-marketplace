# MySepolia Sample NFT Marketplace DApp

## Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 10.16.0)

## Deployment

### Compile contract

1. Set up `.env` in project root (see `.env.example`)

2. Install project

```bash
npm i
```

3. Deploy with

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js
```

4. **IMPORTANT** Paste your contract's ABI from `artifacts/contracts/<CONTRACT_NAME>.json` to `mysepolia-react/src/abi.json`

### Run DApp

1. Set up `.env` in `mysepolia-react` folder (see `.env.example`)

2. Install project

```bash
cd mysepolia-react
npm i
```

3. **IMPORTANT** Fill out `mysepolia-react/src/data.json`:
- Upload images to IPFS (you can use [Pinata](https://pinata.cloud/)), copy their URLs
- Create metadata files for each image and upload them to IPFS too, copy their URLs
- Paste the links into `data.json`

3. Run with

```bash
npm run start
```
