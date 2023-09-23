/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Router from './components/common/Router';
import ProviderWrapper from './components/wrapper/ProviderWrapper';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 더미 구현
    setTimeout(() => setIsLoading(false), 1500);
  });

  return (
    <ProviderWrapper>
      <div className="h-full">
        <div className="relative w-[540px] h-[100svh] mx-auto">
          <Header />
          <main className="minH-[380px]">
            <Router />
            {/* {isLoading && <SplashScreen />} */}
          </main>
          <Footer />
        </div>
      </div>
    </ProviderWrapper>
  );
}

export default App;
