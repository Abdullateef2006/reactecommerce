import React from 'react'
import { Productdata } from './Productdata'
import { NavLink } from 'react-router-dom'


function Products({produce}) {
    return (
        <>
            <div className='cart'>
                {Productdata.filter(user=>user.brand.toLowerCase().includes(produce) || user.title.toLowerCase().includes(produce)).map((item)  => {
                    return (
                        <>
                            <div className='productBody'>
                                <div key={item.id} className={item.cName}>
                                    <div className='img'>
                                        {item.img}
                                    </div>
                                    <div className='info'>
                                        <div className='productName'>
                                            <p><NavLink to="/Order">{item.title}</NavLink></p>
                                        </div>
                                        <div className='productBrand'>
                                            <h4>{item.brand}</h4>
                                        </div>
                                        <div className='productPrice'>
                                            <h4>${item.price}</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </>

                    )
                })}


            </div>

        </>
    )
}

export default Products