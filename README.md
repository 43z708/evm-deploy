# NFT & Token deploy

## 1. 環境変数の整備

src 直下にて

```
cp.env.example .env
```

を実行して.env ファイルを作成して自分の環境変数を埋める

※ zkSync のみ GOERLI_RPC と ETHERSCAN_API_KEY が必要であり、IS_ZKSYNC=true にしてください。
zkSync 以外を実行する場合は IS_ZKSYNC=false にしてください。

## 2. docker で nodejs コンテナを立ち上げる

```
docker compose up -d
```

## 3. docker コンテナ内にログインする

```
docker compose exec nodejs bash
```

で deploy 等の実行環境である docker コンテナ内にログインする（src 直下にいることを確認する）

## 4. package のインストール(初回のみ)

```
npm install
```

## 5. トークン名、NFT 名、ティッカーを変更

src/contracts/NFT.sol の 11 行目("Token Name", "TICKER")の部分
src/contracts/Token.sol の 9 行目("NFT Name", "TICKER")の部分

## 6. コンパイル

※このコマンドを実行する前に、.env の IS_ZKSYNC を確認すること
IS_ZKSYNC=true であれば src 直下に zySync 用のコードである artifacts-zk と cache-zk が生成され、false であれば通常の evm 用のコードである artifcats と cache が生成される。

```
npx hardhat compile
```

## 7. deploy & verify & explorer

### base

#### deploy

```
<!-- nft -->
npx hardhat run deploy/deploy-nft.ts --network base-testnet

<!-- token -->
npx hardhat run deploy/deploy-token.ts --network base-testnet
```

#### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network base-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network base-testnet 生成されたアドレス
```

#### explorer

https://goerli.basescan.org

---

### scroll

#### deploy

```
<!-- nft -->
npx hardhat run deploy/deploy-nft.ts --network scroll-testnet

<!-- token -->
npx hardhat run deploy/deploy-token.ts --network scroll-testnet
```

#### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network scroll-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network scroll-testnet 生成されたアドレス
```

#### explorer

https://blockscout.scroll.io/

---

### taiko

#### deploy

```
<!-- nft -->
npx hardhat run deploy/deploy-nft.ts --network taiko-testnet

<!-- token -->
npx hardhat run deploy/deploy-token.ts --network taiko-testnet
```

#### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network taiko-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network taiko-testnet 生成されたアドレス
```

#### explorer

https://explorer.a2.taiko.xyz/

---

### linea

#### deploy

```
<!-- nft -->
npx hardhat run deploy/deploy-nft.ts --network linea-testnet

<!-- token -->
npx hardhat run deploy/deploy-token.ts --network linea-testnet
```

#### verify

(1) etherscan でアカウントを作成し、API Key を取得し、.env に ETHERSCAN_API_KEY=で貼り付け
(2) 下記コマンド実行

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network linea-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network linea-testnet 生成されたアドレス
```

#### explorer

https://explorer.goerli.linea.build/

---

### zkSync

※ .env の IS_ZKSYNC=true になっていることを確認すること！

#### deploy

```
<!-- nft -->
npx hardhat deploy-zksync --script deploy-nft-zk.ts --network zksync-testnet

<!-- token -->
npx hardhat deploy-zksync --script deploy-token-zk.ts --network zksync-testnet
```

#### verify

```
<!-- nft -->
npx hardhat verify --contract contracts/NFT.sol:NFT --network zksync-testnet 生成されたアドレス

<!-- token -->
npx hardhat verify --contract contracts/Token.sol:Token --network zksync-testnet 生成されたアドレス
```

※　 UI で verify する場合は、 https://era.zksync.io/docs/api/tools/block-explorer/contract-verification.html

#### explorer

https://goerli.explorer.zksync.io/
