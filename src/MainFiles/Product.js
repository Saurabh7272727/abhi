import React, { useState } from 'react'
import ApiSystem from '../Components/ApiSystem.js';
import styled from 'styled-components';
import server from './SAU.content.json';

const Product = () => {



    return (
        <Wrapper>

            {
                server.map((items) => {
                    return (<ApiSystem
                        id={items.id}
                        img={items.img}
                        description={items.description}
                        price={items.price}
                        rating={items.rating}

                    />);
                })
            }

        </Wrapper>
    )
}

const Wrapper = styled.section`
 padding:2rem 0.8rem;
 display:flex;
 gap:0.5rem;
 flex-wrap:wrap;
 justify-content:center;
 align-items:center;

 .check{
    width:100%;
    height:50vh;
    background-color:red;
 }
`;

export default Product;