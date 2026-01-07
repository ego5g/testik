
export default function Hero() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/bghero.png')" }}>
      <div className="container mx-auto px-6 py-20 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Unleash the Full Potential of Al</h1>
            <p className="text-lg md:text-xl mb-8">
              Curio App is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.
            </p>
            <div className="flex gap-4">
              <button>
                <img src='/Primary.svg' alt="Primary" />
              </button>
              <button className="border border-white rounded-full px-8 py-2 text-white font-semibold">
                Check Out More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src="/im1.png" alt="AI illustration" className="max-w-sm md:max-w-md"/>
          </div>
        </div>
      </div>
    </section>
  );
}
