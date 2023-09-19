/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import SplashScreen from './components/common/SplashScreen';
import ProviderWrapper from './components/wrapper/ProviderWrapper';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 더미 구현
    setTimeout(() => setIsLoading(false), 1500);
  });

  return (
    <div className="App h-full">
      <ProviderWrapper>
        <div className="relative w-[540px] h-[100vh] mx-auto">
          <Header />

          <main>
            {/* {isLoading && <SplashScreen />} */}
            <div>Test</div>
          </main>

          <Footer />
        </div>
      </ProviderWrapper>
    </div>
  );
}

export default App;
