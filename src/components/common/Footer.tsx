export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[90px] bg-red-300">
      <div className="flex justify-between h-full">
        <button type="button" className="bg-red-200">
          털털홈
        </button>

        <button type="button" className="bg-red-200">
          글쓰기
        </button>

        <button type="button" className="bg-red-200">
          내정보
        </button>
      </div>
    </footer>
  );
}
