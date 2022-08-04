import sdk from './1-initialize-sdk.js';
import { MaxUint256 } from '@ethersproject/constants';

const editionDrop = sdk.getEditionDrop(
  '0x8487B519E2AD699901505Cb282c1E2C329B218d8'
);

(async () => {
  try {
    const claimConditions = [
      {
        startTime: new Date(),
        maxQuantity: 50_000,
        price: 0,
        quantityLimitPerTransaction: 1,
        waitInSeconds: MaxUint256,
      },
    ];
    await editionDrop.claimConditions.set('0', claimConditions);
  } catch (error) {
    console.error('Failed to set claim condition', error);
  }
})();
