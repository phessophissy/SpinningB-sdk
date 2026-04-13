# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-03-29

### Added
- Initial SDK extraction from the main SpinningB app repository.
- `SpinningBoardSDK` class with mainnet, testnet, and mocknet support.
- `buildPlayTransaction()` method for constructing `play` contract calls.
- `getContractIdentifier()` helper method.
- Input validation for `spinValue` (must be integer 1–10).
- Configurable contract address, contract name, and API URL.
- CI workflow for automated testing with Node.js 18 and 20.
- TypeScript type definitions (`index.d.ts`).
- Unit test suite with 12 tests.
