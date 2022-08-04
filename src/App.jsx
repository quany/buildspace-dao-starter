import {useAddress, useMetamask} from '@thirdweb-dev/react';

const App = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  if (address) {
    return (
      <div className="landing">
        <h1>👀 wallet connected, now what!</h1>
      </div>
    );
  }
  return (
    <div className="landing">
      <h1>Welcome to iCodingDAO</h1>
      <button onClick={connectWithMetamask}  className="btn-hero">
        Connect your wallet
      </button>
    </div>
  );
};

export default App;
