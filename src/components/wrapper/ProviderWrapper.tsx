import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from '../../store/store';
import ModalPortal from '../common/ModalPortal';

interface ProviderWrapperProps {
  children: ReactNode;
}

function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NextUIProvider>
          {children}
          <ModalPortal />
          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </NextUIProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
