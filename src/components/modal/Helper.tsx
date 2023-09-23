import { ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';

export default function Helper() {
  return (
    <ModalContent className="h-[500px] overflow-y-auto">
      <ModalHeader>거지 월드에 오신 것을 환영해요!</ModalHeader>
      <ModalBody>
        <p>거지 월드가 처음이시라면 이렇게 즐겨보세요!</p>
        <div>
          <div>
            <div>1. 다른 거지들의 글을 넘기며 구경하세요.</div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/guide1.png`}
                className="w-full object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div>
            <div>2. &lsquo;OMG 이건 아니야!&rsquo; 판단되면 눌러 댓글을 남겨보세요.</div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/guide2.png`}
                className="w-full object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div>
            <div>3. 오늘 이곳에 돈을 써볼까? 고민되면 물어보세요!</div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/guide3.png`}
                className="w-full object-cover"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  );
}
