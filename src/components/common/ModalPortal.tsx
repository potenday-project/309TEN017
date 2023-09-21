import { Modal } from '@nextui-org/react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal/modalSlice';
import { RootState } from '../../store/store';

function ModalPortal() {
  const dispatch = useDispatch();
  const Component = useSelector((state: RootState) => state.modal.component);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  if (!Component) return null;

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} placement="center" onOpenChange={() => dispatch(closeModal())}>
      {Component}
    </Modal>,
    document.getElementById('root')!
  );
}

export default ModalPortal;
