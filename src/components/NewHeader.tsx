export default function NewHeader() {
  return (
    <header className="w-full py-2 px-4 md:px-8 mt-2 md:mt-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-2">
        <div className="flex items-baseline gap-1">
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight font-artistic"
            style={{
              background: 'linear-gradient(135deg, #0066CC 0%, #87CEEB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            情報
          </h1>
          <span className="text-3xl md:text-5xl font-medium font-artistic ml-2" style={{ color: '#000000' }}>
            銘柄基本
          </span>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>
      </div>

    </header>
  );
}
