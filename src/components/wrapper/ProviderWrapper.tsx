import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

interface ProviderWrapperProps {
  children: ReactNode;
}

function ProviderWrapper({ children }: ProviderWrapperProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default ProviderWrapper;
