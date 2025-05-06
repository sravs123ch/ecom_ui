import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, subtotal } = useCart();
  
  // Placeholder states for shipping and payment details
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    // Implement order placement logic (e.g., API call)
  };

  return (
    <>
      <Helmet>
        <title>Checkout | ShopHub</title>
        <meta name="description" content="Review your order and complete your purchase" />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Checkout</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Review */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Order Review</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.color}-${item.size}`} className="flex items-center mb-4">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover object-center rounded-md mr-4" 
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{item.product.name}</p>
                      <p className="text-sm text-slate-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-slate-500">Price: ${item.product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-900">Subtotal</span>
                    <span className="text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Shipping Details</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                <form>
                  <input
                    type="text"
                    name="name"
                    value={shippingDetails.name}
                    onChange={handleShippingChange}
                    placeholder="Full Name"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleShippingChange}
                    placeholder="Address"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleShippingChange}
                    placeholder="City"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="state"
                    value={shippingDetails.state}
                    onChange={handleShippingChange}
                    placeholder="State"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="zip"
                    value={shippingDetails.zip}
                    onChange={handleShippingChange}
                    placeholder="Zip Code"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleShippingChange}
                    placeholder="Country"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Payment Details</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <form>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="Card Number"
                  className="w-full p-3 mb-4 border border-slate-300 rounded"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    value={paymentDetails.expiry}
                    onChange={handlePaymentChange}
                    placeholder="Expiry Date"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentChange}
                    placeholder="CVV"
                    className="w-full p-3 mb-4 border border-slate-300 rounded"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 flex justify-between">
            <span className="text-lg font-bold text-slate-900">Total</span>
            <span className="text-lg font-bold text-indigo-600">${(subtotal + (subtotal >= 75 ? 0 : 5.99) + (subtotal * 0.08)).toFixed(2)}</span>
          </div>

          <div className="mt-6">
            <Button onClick={handlePlaceOrder} size="lg" fullWidth>
              Place Order
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
