# NFT & Token deploy

1. src 直下に.env ファイルを作成し、WALLET_KEY=private key

2. docker compose up -d

3. docker compose exec nodejs bash で docker コンテナ内にログインする（src 直下にいることを確認する）

4. package のインストール

```
npm install
```

5. コンパイル

```
npx hardhat compile
```

6. deploy & explorer(2 回目以降はここからで ok)

## base

### deploy

```
<!-- nft -->
npx hardhat run scripts/deploy-nft.ts --network base-testnet

<!-- token -->
npx hardhat run scripts/deploy-token.ts --network base-testnet
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

### explorer

https://explorer.a2.taiko.xyz/
