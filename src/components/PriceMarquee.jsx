import React, { useState, useEffect } from "react";

const PriceMarquee = () => {
  // const [marketData, setMarketData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://quotes-api.tickertape.in/quotes?sids=.NSEI,.NSEBANK,BJFN,BRTI,HDBK,HLL,INGL,ITC,MRTI,RELI,SBI,TCS');
  //       const data = await response.json();
  //       setMarketData(data.data);
  //     } catch (error) {
  //       console.error('Error fetching market data:', error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 30000); // Update every 30 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // const formatPrice = (price) => {
  //   return new Intl.NumberFormat('en-IN', {
  //     maximumFractionDigits: 2,
  //     minimumFractionDigits: 2
  //   }).format(price);
  // };

  // const getChangeColor = (change) => {
  //   return change >= 0 ? 'text-green-600' : 'text-red-600';
  // };

  // return (
  //   <div className="w-full bg-white py-4 shadow-md overflow-hidden">
  //     <div className="marquee">
  //       <div className="marquee-content text-gray-800 text-sm font-semibold flex space-x-12">
  //         {marketData.map((item, index) => (
  //           <span key={index} className="flex items-center gap-2">
  //             <span>{item.sid}</span>
  //             <span>{formatPrice(item.price)}</span>
  //             <span className={getChangeColor(item.change)}>
  //               {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(2)}
  //             </span>
  //           </span>
  //         ))}
  //         {/* Duplicate for smooth scrolling */}
  //         {marketData.map((item, index) => (
  //           <span key={`dup-${index}`} className="flex items-center gap-2">
  //             <span>{item.sid}</span>
  //             <span>{formatPrice(item.price)}</span>
  //             <span className={getChangeColor(item.change)}>
  //               {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(2)}
  //             </span>
  //           </span>
  //         ))}
  //       </div>
  //     </div>

  //     <style jsx="true">{`
  //       .marquee {
  //         overflow: hidden;
  //         white-space: nowrap;
  //       }
  //       .marquee-content {
  //         display: inline-block;
  //         padding-left: 100%;
  //         animation: marquee 30s linear infinite;
  //       }
  //       @keyframes marquee {
  //         0% {
  //           transform: translateX(0%);
  //         }
  //         100% {
  //           transform: translateX(-100%);
  //         }
  //       }
  //     `}</style>
  //   </div>
  // );
};

export default PriceMarquee;