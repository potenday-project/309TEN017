import { ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';

export default function Helper() {
  return (
    <ModalContent>
      <ModalHeader>거지 월드에 오신 것을 환영해요!</ModalHeader>
      <ModalBody>
        <p>거지 월드는 다음과 같은 취지로 만들어졌어요.</p>
        <ol>
          <li>- 절약을 위해서</li>
        </ol>
      </ModalBody>
    </ModalContent>
  );
}
