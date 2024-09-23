import React, { useState } from 'react'
import "./ApiSystem.css";



const ApiSystem = (props) => {


    return (
        <>


            <div className='product__section__api'>
                <div className='api__img'>
                    <img src={props.img}></img>
                </div>
                <div className='api__about'>
                    <br />
                    <p>{props.description}</p>
                    <p>Price - {props.price}</p>
                    {props.id}
                    <div className='rating'>{props.rating}</div>

                </div>

            </div>


        </>

    )
}


export default ApiSystem;