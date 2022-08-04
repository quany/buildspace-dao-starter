import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop(
  '0x8487B519E2AD699901505Cb282c1E2C329B218d8'
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Leaf Village Headband',
        description: 'This NFT will give you access to iCodingDao',
        image: readFileSync('scripts/assets/icodingI.png'),
      },
    ]);
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
