import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ProviderWrapperProps {
  children: ReactNode;
}

function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <BrowserRouter>
      <NextUIProvider>{children}</NextUIProvider>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
