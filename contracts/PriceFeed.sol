// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
  AggregatorV3Interface internal priceFeed;

  constructor() {
    priceFeed = AggregatorV3Interface(0xB0C712f98daE15264c8E26132BCC91C40aD4d5F9);
  }

  function getPrice() public view returns (int256) {
    (
      /* uint80 roundId() 本轮id(每次更新都会+1) */
      ,
      int256 answer,
      /*uint256 startedAt 什么时候开始更新 */
      ,
      /*uint256 updatedAt 什么时候结束 */
      ,
      /*uint80 answeredInRound */
      ) = priceFeed.latestRoundData();
    return answer;
  }
}
