import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[75vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl font-bold tracking-wide uppercase">
            Welcome to Classic Bro
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Elevate your style with premium accessories designed for the modern
            individual.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <NavLink to="products">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium">
                Explore Products
              </button>
            </NavLink>
            <NavLink to="signin">
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-md font-medium">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Classic Bro?
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-4">Premium Quality</h3>
            <p className="text-gray-300">
              Our accessories are crafted with high-quality materials to ensure
              durability and style.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-4">Modern Designs</h3>
            <p className="text-gray-300">
              Stay ahead of the trends with our sleek and contemporary designs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-4">Affordable Prices</h3>
            <p className="text-gray-300">
              Look great without breaking the bank with our competitively priced
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Upgrade Your Style?
        </h2>
        <p className="text-gray-300 mb-8">
          Browse our collection and find the perfect accessory to complement
          your look.
        </p>
        <NavLink to="products">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium">
            Shop Now
          </button>
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
