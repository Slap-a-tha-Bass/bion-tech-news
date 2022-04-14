export default function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
        <div className="relative h-24 flex justify-between items-center">
          <div className="relative z-10 px-2 flex lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              {/* <img
                className="block h-16 w-auto"
                src="/favicon/apple-touch-icon.png"
                alt="Biotech"
              /> */}
            </div>
          </div>
          <h2 className="text-4xl text-sky-600">Biotech News |</h2>
        </div>
      </div>
    </nav>
  );
}
