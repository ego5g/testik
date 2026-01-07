
export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto bg-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500 rounded-full"></div>
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-500 rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Try It Right Now</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Download the Curio on the AppStore and Google Play and discover the world of artificial intelligence! Enjoy innovative Al technologies directly on your device.
          </p>
          <div className="flex justify-center gap-4">
            <img src="/appstore.png" alt="App Store" className="h-14"/>
            <img src="/googleplay.svg" alt="Google Play" className="h-14"/>
          </div>
        </div>
      </div>
    </section>
  );
}
