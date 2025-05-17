import React, { useState } from 'react'
import Menu from '/images/icon-menu.svg'
import Logo from '/images/logo.svg'
import Cart from '/images/icon-cart.svg'
import Profile from '/images/image-avatar.png'
import Close from '/images/icon-close.svg'
import Previous from '/images/icon-previous.svg'
import Next from '/images/icon-next.svg'
import Plus from '/images/icon-plus.svg'
import Minus from '/images/icon-minus.svg'
import Delete from '/images/icon-delete.svg'
import { data } from './data'

const ProductPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
 const [quantity, setQuantity] = useState(0)
const [showCart, setShowCart] = useState(false)
const [showBox, setShowBox] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
    setShowBox(true)
  }

  const increaseQty = () => setQuantity((q) => q + 1)
  const decreaseQty = () => setQuantity((q) => (q > 0 ? q - 1 : 0))
  const total = () => (125 * quantity)

  return (
    <main>
      <header className="max-w-full flex justify-between items-center p-3">
        {/* Left: Menu and Logo */}
        <div className="flex gap-4 items-center">
          <img
            src={Menu}
            alt="menu-bar"
            className="w-3 h-3 md:w-3 md:h-3 cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
          <img src={Logo} alt="logo" className="h-3 md:h-4" />
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col w-36 bg-white absolute left-0 top-0 p-5 h-full z-10 shadow-lg lg:flex lg:flex-row lg:static lg:h-auto lg:bg-transparent lg:w-auto`}
        >
          <img
            src={Close}
            alt="close-button"
            className="h-2 w-3 mb-6 cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <ul className="mt-6 lg:mt-0 lg:flex lg:gap-6">
            <li className="my-3 lg:my-0 cursor-pointer hover:font-bold">Collection</li>
            <li className="my-3 lg:my-0 cursor-pointer hover:font-bold">Men</li>
            <li className="my-3 lg:my-0 cursor-pointer hover:font-bold">Women</li>
            <li className="my-3 lg:my-0 cursor-pointer hover:font-bold">About</li>
            <li className="my-3 lg:my-0 cursor-pointer hover:font-bold">Contact</li>
          </ul>
        </nav>

        {/* Right: Cart and Profile */}
        <div className="relative flex gap-4 items-center">
           <div className="relative">
             <img src={Cart} alt="cart-logo" className="w-6 h-6" />
              {quantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                 {quantity}
                </span>
              )}
           </div>
        {/* Profile Avatar */}
           <img src={Profile} alt="dp" className="w-6 h-6 rounded-full" />
        </div>

      </header>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="opacity-50 w-full h-full fixed top-0 left-0 z-0"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Product Section */}
      <section className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Image Gallery */}
        <div className="relative flex flex-col items-center">
          <img
            src={data[currentIndex].mainImage}
            alt="main product"
            className="w-sm md:w-md"
          />

          {/* Prev/Next buttons on mobile */}
          <div className="flex justify-between items-center w-sm md:w-md absolute top-1/2 transform -translate-y-1/2 px-4 lg:hidden">
            <button aria-label="Previous image" 
              onClick={handlePrevious}
              className="bg-white rounded-2xl p-2"
            >
              <img src={Previous} alt="previous-button" />
            </button>
            <button aria-label="Next image"
              onClick={handleNext}
              className="bg-white rounded-2xl p-2"
            >
              <img src={Next} alt="next-button" />
            </button>
          </div>

          {/* Thumbnails: visible only on desktop */}
          <div className="hidden lg:flex gap-4 mt-4">
            {data.map((item, index) => (
              <img
                key={item.id}
                src={item.thumbnail}
                alt={`thumbnail-${item.id}`}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                  index === currentIndex
                    ? 'border-orange-500'
                    : 'border-transparent'
                } hover:opacity-60`}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-orange-500 uppercase text-sm font-bold mb-2">
            Sneaker Company
          </h2>
          <h1 className="text-2xl font-bold mb-4">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-gray-600 mb-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

         <div>
        <div className="flex items-center justify-between gap-4 mb-2 w-full p-1">
           <div className="flex items-center gap-4">
             <span className="text-xl font-bold">$125.00</span>
            <span className="bg-orange-100 text-orange-500 font-bold px-2 rounded">
              50%
            </span>
           </div>
             <span className="line-through text-gray-400 mb-6">$250.00</span> 
          </div>
         
        </div>
        {/* Quantity added to  cart */}
        <div className="flex flex-col gap-4">
            <div className="bg-amber-50 flex justify-between items-center px-4 py-2 rounded-md w-full">
              <button type="button" onClick={decreaseQty} aria-label="Decrease quantity"><img src={Minus} alt="minus-icon" className="h-1" /></button>
              <span className="font-bold">{quantity}</span>
              <button type="button" onClick={increaseQty} aria-label="Increase quantity"><img src={Plus} alt="plus-icon" className="h-3" /></button>
            </div>
      
          <button type="submit" onClick={() => setShowCart(!showCart)} className="bg-amber-600 text-black outline-0 w-full flex items-center justify-center gap-2 p-2 rounded-xl">
          <img src={Cart} alt="cart-icon" className="h-4" />
          <span>Add to Cart</span>
         </button>

         </div>
        </div>

        
  
  
      </section>

 {showCart && (
      <div className='absolute w-72 h-50 lg:w-80 lg:h-60 transition-opacity duration-300 rounded-2xl p-2 bg-white shadow-2xl top-1/12 lg:left-8/12'>
        <h2 className="font-bold p-2 border-b align-top mb-5">Cart</h2>
       {/* Empty cart */}
       {quantity <= 0 && (
       <div>
        <p>Cart is Empty</p>
       </div>
       )}

       {quantity > 0 && (
        <div className='p-2'>
         <div className='flex justify-between my-4'>
         <span>
          <img
            src={data[currentIndex].thumbnail}
            alt="main product"
            className="w-10"
          />
         </span>
         <span className='grid grid-cols-1 align-content-start'>
          <small>Fall Limited Edition Sneakers</small>
           <small>
          $125.00 x {quantity} <b className="ml-2">${total().toFixed(2)}</b>
           </small>

         </span>
         <img src={Delete} alt="delete" onClick={() => setQuantity(0)} className="cursor-pointer w-4 h-4" />
          </div>
      
          <span className='mt-10'>
         <button className="bg-orange-500 text-white font-bold rounded-md mx-4 mb-4 py-2 w-[90%]">
         Checkout
         </button>
         </span>
        </div>
       )}
     
      </div>
        )}

        {showBox && (
          <>
             <div className="fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-10 z-30" onClick={() => setShowBox(false)}></div>

           <div className="fixed w-md top-1/3 left-1/3 flex flex-col z-50 items-center">
          <img
            src={data[currentIndex].mainImage}
            alt="main product"
            className="w-full md:w-80"
          />

          {/* Prev/Next buttons on mobile */}
          <div className="flex justify-between items-center w-full absolute top-1/2 transform -translate-y-1/2 px-4">
            <button aria-label="Previous image" 
              onClick={handlePrevious}
              className="bg-white rounded-2xl p-1"
            >
              <img src={Previous} alt="previous-button" />
            </button>
            <button aria-label="Next image"
              onClick={handleNext}
              className="bg-white rounded-2xl p-1"
            >
              <img src={Next} alt="next-button" />
            </button>
          </div>

          {/* Thumbnails: visible only on desktop */}
          <div className="hidden lg:flex gap-4 mt-4">
            {data.map((item, index) => (
              <img
                key={item.id}
                src={item.thumbnail}
                alt={`thumbnail-${item.id}`}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                  index === currentIndex
                    ? 'border-orange-500'
                    : 'border-transparent'
                } hover:opacity-60`}
              />
            ))}
          </div>
           <span onClick={() => setShowBox(false)}
          className="relative top-2 right-2"
          aria-label="Close"><img src={Close} alt="close-button" /></span>
        </div>
          </>
        )}

    </main>
  )
}

export default ProductPage
