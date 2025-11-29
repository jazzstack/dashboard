export default function ProfitCard() {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-white dark:bg-neutral-900">
      {/* Icon */}
      <svg width="58" height="58" viewBox="0 0 58 58" className="mb-4">
        <circle cx="29" cy="29" r="29" fill="#FF9C55" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 39.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.834-10.833-10.834-5.983 0-10.834 4.85-10.834 10.834 0 5.983 4.85 10.833 10.834 10.833zm.812-17.333a.812.812 0 10-1.625 0v.343c-1.766.316-3.25 1.643-3.25 3.448 0 2.077 1.964 3.521 4.063 3.521 1.491 0 2.437.982 2.437 1.896 0 .915-.946 1.896-2.437 1.896-1.491 0-2.438-.981-2.438-1.896a.812.812 0 10-1.625 0c0 1.805 1.484 3.132 3.25 3.449v.343a.812.812 0 101.625 0v-.343c1.767-.317 3.25-1.644 3.25-3.449 0-2.077-1.963-3.52-4.062-3.52-1.491 0-2.438-.982-2.438-1.896 0-.915.947-1.896 2.438-1.896s2.437.98 2.437 1.895a.813.813 0 001.625 0c0-1.805-1.483-3.132-3.25-3.448V22.5z"
          fill="#fff"
        />
      </svg>

      {/* Content */}
      <div className="flex justify-between items-end mt-6">
        {/* Left side */}
        <dl>
          <dt className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            $4.2K
          </dt>
          <dd className="text-sm text-gray-400 dark:text-gray-300 font-medium">
            Total Profit
          </dd>
        </dl>

        {/* Right side */}
        <dl className="text-[#22ad5c] text-sm font-medium flex items-center gap-1">
          <dt className="flex items-center gap-1">
            <span>4.35</span>
            <span>%</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
              className="text-[#22ad5c]"
            >
              <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z" />
            </svg>
          </dt>
        </dl>
      </div>
    </div>
  );
}
