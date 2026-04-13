import { StacksTransaction } from '@stacks/transactions';
import { StacksNetwork } from '@stacks/network';

export declare const CONTRACT_ADDRESS: string;
export declare const CONTRACT_NAME: string;

export interface SpinningBoardSDKOptions {
  network?: 'mainnet' | 'testnet' | 'mocknet';
  coreApiUrl?: string;
  contractAddress?: string;
  contractName?: string;
}

export interface BuildPlayTransactionParams {
  spinValue: number;
  senderKey: string;
  nonce?: number | bigint;
  fee?: number | bigint;
}

export declare class SpinningBoardSDK {
  networkType: string;
  coreApiUrl?: string;
  network: StacksNetwork;
  contractAddress: string;
  contractName: string;

  constructor(options?: SpinningBoardSDKOptions);
  buildPlayTransaction(params: BuildPlayTransactionParams): Promise<StacksTransaction>;
  getContractIdentifier(): string;
  static getSpinRange(): { min: number; max: number };
}
