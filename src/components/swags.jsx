import React from "react";
import { Link } from "react-router-dom";
import tshirt1 from "../assets/decentralise.png";
import tshirt2 from "../assets/neural.png";
import tshirt3 from "../assets/sleep_not_found.png";
import tshirt4 from "../assets/whisperer.png";

const tshirts = [
  {
    id: 1,
    title: "Decentralise all the things",
    price: "₹499",
    image: tshirt1,
    description: "For the crypto enthusiasts who believe in distributed power"
  },
  {
    id: 2,
    title: "I dream in neural networks",
    price: "₹499",
    image: tshirt2,
    description: "When your brain runs on machine learning algorithms"
  },
  {
    id: 3,
    title: "$404: Sleep Not Found _",
    price: "₹499",
    image: tshirt3,
    description: "For developers who debug through the night"
  },
  {
    id: 4,
    title: "Trust me, I'm a blockchain whisperer",
    price: "₹499",
    image: tshirt4,
    description: "Making complex blockchain concepts sound simple"
  }
];

const Swags = () => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary pb-16">
      <div className="text-[3.5rem] mt-12 w-full flex justify-center text-center">
        <div className="w-4/5 text-center">
          <div className="font-bold">Swags</div>
          
          <div className="text-2xl font-bold w-full flex justify-start mt-4">Code Speak 💻✨</div>
          <div className="text-lg w-full flex justify-start mt-2 mb-12">
            Relatable code words that only front-end engineers truly understand, capturing the quirks, chaos, and creativity of coding life.
          </div>

          {/* T-shirt Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {tshirts.map((tshirt) => (
              <div key={tshirt.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={tshirt.image}
                    alt={tshirt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{tshirt.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tshirt.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-xl font-bold text-gray-900">{tshirt.price}</span>
                    <button className="bg-[#151e28] text-white px-3 md:px-4 py-2 rounded-lg hover:bg-[#1f2937] transition-colors text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swags;
  