// components/ProductsCard.tsx
export default function ProductsCard() {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-white dark:bg-neutral-900">
      {/* SVG icon */}
      <div>
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          className="h-14 w-14"
        >
          <circle cx="29" cy="29" r="29" fill="#8155FF" />
          <path
            d="M35.043 20.8l-2.167-1.136c-1.902-.998-2.853-1.498-3.876-1.498-1.023 0-1.974.5-3.876 1.498L22.958 20.8c-1.922 1.008-3.051 1.6-3.752 2.394L29 28.09l9.794-4.896c-.7-.793-1.83-1.386-3.751-2.394zM39.56 24.628l-9.747 4.874v10.227c.777-.194 1.662-.658 3.063-1.393l2.167-1.137c2.33-1.223 3.496-1.835 4.143-2.934.647-1.099.647-2.467.647-5.202v-.127c0-2.05 0-3.332-.272-4.308zM28.188 39.73V29.501l-9.749-4.874c-.272.976-.272 2.258-.272 4.308v.127c0 2.735 0 4.103.647 5.202.647 1.1 1.813 1.71 4.144 2.934l2.166 1.137c1.4.735 2.286 1.2 3.064 1.393z"
            fill="white"
          />
        </svg>
      </div>

      {/* Text content */}
      <div className="flex justify-between items-end mt-6">
        {/* Left: 3.5K */}
        <dl>
          <dt className="text-2xl font-bold mb-1 text-black dark:text-white">
            3.5K
          </dt>
          <dd className="text-gray-400 dark:text-gray-300 text-sm font-medium">
            Total Products
          </dd>
        </dl>

        {/* Right: Percentage increase */}
        <dl className="text-green-500 text-sm font-medium flex items-center gap-1">
          <dt className="flex items-center gap-1">
            <span>2.59</span>
            <span>%</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
              aria-hidden="true"
              className="text-green-500"
            >
              <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z"></path>
            </svg>
          </dt>
          <dd className="sr-only">Total Products Increased by 2.59%</dd>
        </dl>
      </div>
    </div>
  );
}
