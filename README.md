# NFT & Token deploy

1. src 直下に.env ファイルを作成し、WALLET_KEY=private key

2. docker compose up -d

3. docker compose exec nodejs bash で docker コンテナ内にログインする（src 直下にいることを確認する）

4. package のインストール(初回のみ)

```
npm install
```

5. トークン名、NFT 名、ティッカーを変更
   src/contracts/NFT.sol の 11 行目("Token Name", "TICKER")の部分
   src/contracts/Token.sol の 9 行目("NFT Name", "TICKER")の部分

6. コンパイル

```
npx hardhat compile
```

6. deploy & explorer

## base

### deploy

```
<!-- nft -->
npx hardhat run scripts/deploy-nft.ts --network base-testnet

<!-- token -->
npx hardhat run scripts/deploy-token.ts --network base-testnet
```

### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network base-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network base-testnet 生成されたアドレス
```

### explorer

https://goerli.basescan.org

## scroll

### deploy

```
<!-- nft -->
npx hardhat run scripts/deploy-nft.ts --network scroll-testnet

<!-- token -->
npx hardhat run scripts/deploy-token.ts --network scroll-testnet
```

### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network scroll-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network scroll-testnet 生成されたアドレス
```

### explorer

https://blockscout.scroll.io/

## taiko

### deploy

```
<!-- nft -->
npx hardhat run scripts/deploy-nft.ts --network taiko-testnet

<!-- token -->
npx hardhat run scripts/deploy-token.ts --network taiko-testnet
```

### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network taiko-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network taiko-testnet 生成されたアドレス
```

### explorer

https://explorer.a2.taiko.xyz/
