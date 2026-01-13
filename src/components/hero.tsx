"use client";
import React, { useState } from "react";
import { FiSearch, FiCreditCard, FiDollarSign, FiMapPin } from "react-icons/fi";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

const Hero = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/banks?s=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/banks");
    }
  };

  const handleQuickAccess = (type: string) => {
    switch (type) {
      case "atms":
        router.push("/atms");
        break;
      case "cards":
        router.push("/cards");
        break;
      case "loans":
        router.push("/loans");
        break;
      default:
        break;
    }
  };

  return (
    <section className="bg-gray-50 relative overflow-hidden h-[90vh] flex items-center justify-center">
      {/* Decorative Background Images */}
      {/* Top Left - Vector 1 */}
      <div className="absolute top-0 left-0 z-0 hidden lg:block">
        <NextImage
          src="/assets/third-vector.png"
          alt="Decorative Element"
          width={170}
          height={170}
          className="object-contain"
        />
      </div>

      {/* Top Right - Vector 2 */}
      <div className="absolute top-0 right-0 z-0 hidden lg:block">
        <NextImage
          src="/assets/second-vector.png"
          alt="Decorative Element"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Bottom Left - Vector 3 */}
      <div className="absolute bottom-[80px] left-[-20px] z-0 hidden lg:block">
        <NextImage
          src="/assets/star.png"
          alt="Decorative Element"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-[-30px] left-[580px] z-0 hidden lg:block">
        <NextImage
          src="/assets/arrow-vector.png"
          alt="Decorative Element"
          width={190}
          height={190}
          className="object-contain"
        />
      </div>

      {/* Bottom Right - Vector 4 */}
      <div className="absolute bottom-0 right-0 z-0 hidden lg:block">
        <NextImage
          src="/assets/vector.png"
          alt="Decorative Element"
          width={250}
          height={300}
          className="object-contain"
        />
      </div>


      <div className="container px-6 relative z-10 mx-auto text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-6xl mb-4 tracking-tight">
            All about banking in <span className="text-sky-700">Cameroon</span>
          </h1>

          <p className="mt-4 mb-8 text-gray-500 text-lg lg:text-xl font-light">
            Find everything you need to know about Banks and Financial institutions in Cameroon
          </p>

          <div className="w-full max-w-2xl bg-white rounded-full shadow-lg p-2 flex items-center mb-10 border border-gray-100">
            <form onSubmit={handleSearch} className="flex-1 flex items-center w-full">
              <input
                type="text"
                className="flex-1 px-6 py-3 text-gray-700 bg-transparent focus:outline-none text-lg placeholder-gray-400"
                placeholder="Search Banks, services, products......"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-800 text-white p-4 rounded-full transition duration-300 flex-shrink-0"
              >
                <FiSearch fontSize="24px" />
              </button>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => handleQuickAccess("atms")}
              className="flex items-center gap-3 px-6 py-3 bg-sky-100 text-sky-900 rounded-full hover:bg-sky-200 transition font-medium"
            >
              <FiMapPin className="text-xl" />
              <span>ATMs</span>
            </button>

            <button
              onClick={() => handleQuickAccess("cards")}
              className="flex items-center gap-3 px-6 py-3 bg-sky-100 text-sky-900 rounded-full hover:bg-sky-200 transition font-medium"
            >
              <FiCreditCard className="text-xl" />
              <span>Credit cards</span>
            </button>

            <button
              onClick={() => handleQuickAccess("loans")}
              className="flex items-center gap-3 px-6 py-3 bg-sky-100 text-sky-900 rounded-full hover:bg-sky-200 transition font-medium"
            >
              <FiDollarSign className="text-xl" />
              <span>Loans</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
