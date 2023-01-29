import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { ReactComponent as Logo } from '../src/svgs/logo.svg';

function App() {
  const [isReady, setReady] = useState(false);

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      setReady(true);
    }
  };

  return (
    <>
      {isReady === false && (
        <div className={styles.loadingDiv}>
          <Logo className={styles.logo} />
        </div>
      )}
      {isReady && (
        <>
          <Header />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
