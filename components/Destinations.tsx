
const destinations = [
  {
    name: 'Students',
    image: '/Card1.png'
  },
  {
    name: 'Professionals',
    image: '/Card2.png'
  },
  {
    name: 'Writers',
    image: '/Card3.png'
  }
];

export default function Destinations() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Different Destinations</h2>
            <p className="text-lg text-gray-600">
              We explore the diverse ways in which this technology can revolutionize work across various industries and fields. Discover how Al can streamline processes and elevate your work to new heights.
            </p>
          </div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0 whitespace-nowrap">And +50 other destinations</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.name} className="relative h-96 rounded-lg bg-cover bg-center flex items-end p-6" style={{ backgroundImage: `url(${dest.image})` }}>
              <div className="bg-black bg-opacity-50 rounded-lg p-4 w-full">
                <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}