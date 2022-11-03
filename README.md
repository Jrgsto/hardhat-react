# PROJECT-NAME
Hackathon project that enables restaurant owner to manage table and menu and customer payments through Polygon blockchain

# Features
Add feature list

# Limitations
State current limitations

# Requirement
1. We use lerna package manager so go a head and install lerna first: https://lerna.js.org/
2. Make sure you have a wallet and add the mumbai polygon testchain: https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f
3. Make sure you have some MATIC: https://mumbaifaucet.com/
Since the smartcontract is already deployed to mumbai testnet we only need to install dependencies and start the server

# Start
1. run on the root level ```lerna bootstrap```
2. cd to src/website
3. run ```yarn dev```
4. server is now exposed on http://localhost:3000/

# Deploying smart contract
In case you want to deploy smart contract to mumbai testnet:
1. Navigate to packages/hardhat
2. run ```npm run deploy```
3. Once deployed you should cope the "Spawner" contract id
4. Set this id within the website folder env to NEXT_PUBLIC_SPAWNER_CONTRACT_ADDRESS
