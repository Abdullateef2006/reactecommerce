import React from 'react'
import './Cart.css'
import "./Orderpage.css"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
  import { usePaystackPayment } from 'react-paystack';

function Cart() {
        // payment
        const price = 300
    const [order, setOrder] = useState(1)

    function add() {
        setOrder(order + 1)

    }

    function minus() {
        setOrder(order - 1)

    }


    // Paymnet Start
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "ojugbelelateef2006@gmail.com",
        amount: price * order *100 *700,
        publicKey: 'pk_test_703cae17d166a3e3f615b7794d4db5c9ed1677a0',
    };

    const onSuccess = (reference) => {
        console.log(reference);
      };
    
    
      const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button  className='orderbtn' onClick={() => {
                  initializePayment(onSuccess, onclose)
              }}>Make payment</button>
          </div>
        );
    };

    // Payment ends
    
    return (
        <>
            <div className='carts'>
                <div className='shoeCart'>
                    <div className='cartLeft'>
                        <img src={require("../Assets/shoe1-3.jpg")} alt='' className='cartImg' />
                        <p className='totalPrices'>Your price is <strong>${order * price}</strong> </p>


                    </div>
                    <div className='cartCenter'>
                        <h2>Nike</h2>
                        <p>Air Jordan for any occassion</p>
                    </div>
                    <div className='cartRight'>
                    <div className='choose'>
                            <button className='boxMinus'><h2 className='minus' onClick={minus}>-</h2></button>
                            <div className='boxMid'><h2>{order}</h2></div>
                            <button className='boxPlus'><h2 className='add' onClick={add}>+</h2></button>
                        </div>
                    </div>
                    
                </div>

                <div className='delivery'>
                            <h2>Delivery</h2>
                            <h3 className='locations'>Choose your location</h3>
                            <div className='selectLocation'>
                                <div class="search_categories">
                                    <div class="select">
                                        <select name="search_categories" id="search_categories">
                                            <option>Abia</option>
                                            <option >Adamawa</option>
                                            <option >Akwa Ibom</option>
                                            <option>Anambra</option>
                                            <option>Bauchi</option>
                                            <option>Cross River</option>
                                            <option>Bayelsa</option>
                                            <option>Delta</option>
                                            <option>Lagos</option>
                                            <option>Abuja</option>
                                            <option>Oyo</option>
                                            <option>Ogun</option>
                                            <option>Osun</option>
                                            <option>Kano</option>
                                            <option>Kaduna</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="search_categories">
                                    <div class="select">
                                        <select name="search_categories" id="search_categories">
                                            <option>Alimosho</option>
                                            <option>Ikeja</option>
                                            <option>Agege</option>
                                            <option>Epe</option>
                                            <option>Ikorodu</option>
                                            <option>Ajah</option>
                                            <option>Lagos Island</option>
                                            <option>Victoria Island</option>
                                            <option>Surulere</option>
                                            <option>Ojo</option>
                                            <option>yaba</option>
                                            <option>Ojota</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <PaystackHookExample />


                        </div>

                    </div>

        </>
    )
}

export default Cart