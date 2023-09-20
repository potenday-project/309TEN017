export default function Login() {
  return (
    <div>
      <h3 className="my-[30px]">아이디와 비밀번호를 설정해주세요</h3>

      <form className="[&_input]:block [&_input]:mb-[20px]">
        <input type="text" placeholder="아이디를 입력해주세요" className="bg-green-300" />

        <input type="password" placeholder="비밀번호를 입력해주세요" className="bg-green-300" />
      </form>

      <button type="button" className="w-full bg-blue-300">
        완료
      </button>
    </div>
  );
}
