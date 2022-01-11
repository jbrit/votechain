
# Voting dAPP

This is a Voting dApp built with [Next.js](https://nextjs.org/).

Maintaining high-standard privacy and preventing vote tampering can be tough when developing voting apps, but incorporating Blockchain technology into an app can help you overcome these challenges.
Voting D-APP is a Blockchain Voting Application that provides data integrity, data security, reduced fraud, and improved accountability when it comes to voting. This eliminates a single point of failure and protects personal information.

You would need a metamask account to login successfully. Here is the link to the offical [documentation](https://docs.matic.network/docs/develop/metamask/hello/) to know how to set it up.


## Run Locally

Clone the project

```bash
  git clone https://github.com/jbrit/voting-dapp
```

Go to the project directory

```bash
  cd voting-dapp
```

Install dependencies

```bash
  yarn install
```

Compile the smart contract:

```bash
  npx hardhat compile
```

Start the development server

```bash
  yarn dev
```
Open [http://localhost:3000](http://localhost:3000)


  ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blue | ![#4263EB](https://via.placeholder.com/10/4263EB?text=+) #4263EB |
| Purple | ![#7048E8](https://via.placeholder.com/10/7048E8?text=+) #7048E8 |
| Pink | ![#F784AD](https://via.placeholder.com/10/F784AD?text=+) #F784AD |
| Black | ![#212429](https://via.placeholder.com/10/212429?text=+) #212429 |


## Authors

- [Ajibola Ojo](https://www.github.com/jbrit)
- [Elijah Soladoye](https://www.github.com/showdow96)
- [Iykee](https://github.com/iyke4life)
- [Ibitola Mayowa](https://www.linkedin.com/in/ibitolamayowa/)



  
<!-- To run locally -->
<!-- 
npx hardhat test
npx hardhat node: to startup a local network and create dummy accounts
in your metamask ext, switch to localhost 8484 and import one of the generated accounts using the secret keys
use another terminal and run "npx hardhat run scripts/deploy.js --network localhost" to deploy contract to localhost
-->

