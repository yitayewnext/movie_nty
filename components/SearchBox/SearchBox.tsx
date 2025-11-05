

const SearchBox = () => {
  return (
    <>
    
<div className="mx-auto max-w-xs">
  <div>
    <div className="relative">
      <div className="absolute inset-y-0 right-0 flex items-center px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </div>
      <input type="email" id="example5" className="block w-full rounded-md border-gray-300 pr-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="you@email.com" />
    </div>
  </div>
</div>

    </>
  )
}

export default SearchBox
