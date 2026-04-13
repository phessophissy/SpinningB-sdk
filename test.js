import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  SpinningBoardSDK,
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
} from './index.js';

describe('SpinningBoardSDK', () => {
  it('should use default contract address and name', () => {
    const sdk = new SpinningBoardSDK();
    assert.equal(sdk.contractAddress, CONTRACT_ADDRESS);
    assert.equal(sdk.contractName, CONTRACT_NAME);
  });

  it('should return correct contract identifier', () => {
    const sdk = new SpinningBoardSDK();
    assert.equal(
      sdk.getContractIdentifier(),
      `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`
    );
  });

  it('should default to mainnet', () => {
    const sdk = new SpinningBoardSDK();
    assert.equal(sdk.networkType, 'mainnet');
  });

  it('should accept testnet network option', () => {
    const sdk = new SpinningBoardSDK({ network: 'testnet' });
    assert.equal(sdk.networkType, 'testnet');
  });

  it('should accept mocknet network option', () => {
    const sdk = new SpinningBoardSDK({ network: 'mocknet' });
    assert.equal(sdk.networkType, 'mocknet');
  });

  it('should accept custom contract address', () => {
    const addr = 'SP1CUSTOM_ADDRESS';
    const sdk = new SpinningBoardSDK({ contractAddress: addr });
    assert.equal(sdk.contractAddress, addr);
  });

  it('should accept custom contract name', () => {
    const sdk = new SpinningBoardSDK({ contractName: 'my-contract' });
    assert.equal(sdk.contractName, 'my-contract');
  });

  it('should reject spinValue below 1', async () => {
    const sdk = new SpinningBoardSDK();
    await assert.rejects(
      () => sdk.buildPlayTransaction({ spinValue: 0, senderKey: 'abc' }),
      { message: /Invalid spinValue/ }
    );
  });

  it('should reject spinValue above 10', async () => {
    const sdk = new SpinningBoardSDK();
    await assert.rejects(
      () => sdk.buildPlayTransaction({ spinValue: 11, senderKey: 'abc' }),
      { message: /Invalid spinValue/ }
    );
  });

  it('should reject non-integer spinValue', async () => {
    const sdk = new SpinningBoardSDK();
    await assert.rejects(
      () => sdk.buildPlayTransaction({ spinValue: 3.5, senderKey: 'abc' }),
      { message: /Invalid spinValue/ }
    );
  });

  it('exports CONTRACT_ADDRESS as expected', () => {
    assert.equal(CONTRACT_ADDRESS, 'SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09');
  });

  it('exports CONTRACT_NAME as expected', () => {
    assert.equal(CONTRACT_NAME, 'spinning-board');
  });
});
