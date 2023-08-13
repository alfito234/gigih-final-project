import React from "react";

function Product({ product }) {
  return (
    <div className='relative flex-none max-w-[150px] mr-5 min-w-24 xl:mx-0 xl:mb-5 group rounded-lg p-3'>
      {/* Rest of the product rendering code */}
      <div className='overflow-hidden bg-gray-100 rounded-md aspect-h-2 aspect-w-2'>
        <img
          src={product.thumbnail_url}
          alt={product.name}
          className='object-cover object-center'
        />
        <div
          className='flex items-end p-4 opacity-0 group-hover:opacity-100'
          aria-hidden='true'
        >
          <div className='w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#03AC0E] bg-opacity-100 rounded-md backdrop-blur backdrop-filter'>
            View Product
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center mt-4 text-[12px] font-medium text-gray-900'>
        <p>
          <a href={product.product_link} className='font-bold'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.name}
          </a>
        </p>
        <p className='font-normal'>Rp. {product.price}</p>
      </div>
    </div>
  );
}

export default Product;
