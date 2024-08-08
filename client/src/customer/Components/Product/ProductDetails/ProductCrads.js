import React, { useState } from 'react';

const smartphones = [
  { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
  { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
  { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
  { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
  { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
  { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
  { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
  { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
  { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
  { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
  { name: 'Galaxy S22 Ultra', price: '₹67999', originalPrice: '₹85999', image: 'dummy-image-5.jpg' },
  { name: 'Galaxy S22 Ultra', price: '₹32999', originalPrice: '₹74999', image: 'dummy-image-1.jpg' },
  { name: 'Galaxy M13 (4GB | 64 GB)', price: '₹10499', originalPrice: '₹14999', image: 'dummy-image-2.jpg' },
  { name: 'Galaxy M33 (4GB | 64 GB)', price: '₹16999', originalPrice: '₹24999', image: 'dummy-image-3.jpg' },
  { name: 'Galaxy M53 (4GB | 64 GB)', price: '₹31999', originalPrice: '₹40999', image: 'dummy-image-4.jpg' },
];

const ProductCards = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const displayedSmartphones = showAll ? smartphones : smartphones.slice(0, 5);

  return (
    <div className="p-8">
      <div className='flex row gap-40 justify-between'>
        <h2 className="text-2xl font-bold mb-4">
          Grab the best deal on <span className="text-orange-500">Smartphones</span>
        </h2>
        <button onClick={handleViewAllClick} className="text-orange-500 ml-30">
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <hr className="border-t-2 border-orange-500 flex-grow mr-2" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {displayedSmartphones.map((phone, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-lg ${index === 1 ? 'border-2 border-orange-500' : ''}`}
          >
            <img src={phone.image} alt={phone.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{phone.name}</h3>
            <div className="text-xl font-bold text-green-600">{phone.price}</div>
            <div className="text-gray-500 line-through">{phone.originalPrice}</div>
            <button className="mt-2 text-green-600">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
