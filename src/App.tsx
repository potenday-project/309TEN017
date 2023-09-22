/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import SplashScreen from './components/common/SplashScreen';
import ProviderWrapper from './components/wrapper/ProviderWrapper';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Router from './components/common/Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 더미 구현
    setTimeout(() => setIsLoading(false), 1500);
  });

  return (
    <ProviderWrapper>
      <div className="h-full">
        <div className="relative w-[540px] h-[100vh] mx-auto border border-solid border-gray-100">
          <div className="shadow-sm">
            <div className="w-[90%] mx-auto">
              <Header />

              <main>
                <Router />

                {/* {isLoading && <SplashScreen />} */}
              </main>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </ProviderWrapper>
  );
}

export default App;
