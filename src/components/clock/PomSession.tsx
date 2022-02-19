

interface PomSessionProps {
  increment(): void;
  decrement(): void;
  sessionCount: number;
}

function PomSession({ increment, decrement, sessionCount }: PomSessionProps) {
  let count: string =
    sessionCount < 10 ? '0' + sessionCount.toString() : sessionCount.toString();

  return (
    <div className="p-2 flex flex-col justify-center">
      <h3 className="text-lg uppercase flex justify-center">Session:</h3>{' '}
      <div className="flex flex-row justify-center">
        <button
          className=" focus:outline-none | transform hover:translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300"
          onClick={decrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <h3 className="text-primary text-2xl uppercase mx-4 ">
          {count}
        </h3>
        <button
          className=" focus:outline-none | transform hover:-translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300"
          onClick={increment}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PomSession;