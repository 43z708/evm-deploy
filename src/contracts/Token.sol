//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  uint constant _initial_supply = 1000000 * (10**18);

  // Token NameとTICKERを変更する
  constructor() ERC20("Token Name", "TICKER") {
    _mint(msg.sender, _initial_supply);
  }
}