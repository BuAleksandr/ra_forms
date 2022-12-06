import HexToRgb from './components/hex2rgb/index';
import StepsAccounting from './components/steps/StepsAccounting';
import styles from './App.css';

function App() {
  return (
    <div className={styles.container}>
      <HexToRgb />
      <StepsAccounting />
    </div>
  );
}

export default App;