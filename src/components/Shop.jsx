import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./shop.css"

const Shop = () => {

    let [product, setProduct] = useState([])

    let getdata = () =>{

        axios.get("https://dummyjson.com/products").then((response)=>{
            setProduct(response.data.products);
        })
    }

    useEffect(()=>{
        getdata()
    },[])

    console.log(product);

  return (
    <>
    <Container>
        <Row>
            {product.map((item) =>(
            <Col lg={4}>
                <div className="two">
                <h2>{item.title}</h2>
                <img className='w-100' src={item.thumbnail}  alt="" />
                <p>{item.description}</p>
                <h3> $ :{item.price}</h3>
                <h5> stock :{item.stock}</h5>
                </div>
            </Col>
            ))}
        </Row>
       
    </Container>
    </>
  )
}

export default Shop
