export default function Post() {
  return (
    <div>
      <h3 className="my-[30px]">소비 기록을 작성해주세요</h3>

      <form className="[&_input]:block [&_input]:mb-[20px]">
        <textarea
          cols={30}
          rows={10}
          maxLength={300}
          placeholder="내용을 작성해주쇼 (300자 이내)"
          className="bg-green-300"
        />
      </form>

      <div className="flex gap-[20px] justify-between">
        <button type="button" className="grow bg-blue-300">
          취소
        </button>

        <button type="button" className="grow bg-blue-300">
          완료
        </button>
      </div>
    </div>
  );
}
