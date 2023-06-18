import React from 'react'
import "./Orderpage.css"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { usePaystackPayment } from 'react-paystack';
import { NavLink } from 'react-router-dom'







function Orderpage() {



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
              <button  className='orderBtn' onClick={() => {
                  initializePayment(onSuccess, onclose)
              }}>Make payment</button>
          </div>
        );
    };

    // Payment ends

    return (
        <>
            <div className='orderPage'>
                <div className='imgOrderpage'>
                    <img className='orderImg' src={require("../Assets/shoe1-3.jpg")} alt='' />
                </div>
                <div className='orderPrices'>
                    <h1>Air Jordan For Any Occassion </h1>
                    <hr className='orderHr' />
                    <div className='prices'>
                        <h1 className='oPrice'>${price}</h1>
                        <div className='oldPriceBox'>
                            <p className='oldPrice'>$700</p>
                            <div className='discount'>-45%</div>
                        </div>
                        <div className='from'>
                            <p> -Delivering from Idowu Egba (ISHERI OLOFIN)</p>
                        </div>
                        <hr className='orderHr' />
                        <h2 className='available'>Sizes Available</h2>
                        <div className='sizes'>
                            <div className='eachSizes'> 42</div>
                            <div className='eachSizes'> 41</div>
                            <div className='eachSizes'> 40</div>
                            <div className='eachSizes'> 39</div>
                            <div className='eachSizes'> 38</div>
                            <div className='eachSizes'> 37</div>
                            <div className='eachSizes'> 36</div>
                            <div className='eachSizes'> 35</div>
                        </div>
                        <div className='choose'>
                            <button className='boxMinus'><h2 className='minus' onClick={minus}>-</h2></button>
                            <div className='boxMid'><h2>{order}</h2></div>
                            <button className='boxPlus'><h2 className='add' onClick={add}>+</h2></button>
                        </div>
                        <button className='orderBtn' onClick={() => toast.success("You have successfully added your order to cart.")}><NavLink to="/Cart">Add to cart</NavLink></button>
                        <Toaster />
                        <p className='totalPrice'>Your price is <strong>${order * price}</strong> </p>

                       
                    </div>

                </div>
                
            </div>


        </>
    )
}

export default Orderpage