import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button  } from 'react-bootstrap';
import Rating from '../componenets/Rating';
import products from '../products'

const ProductScreen = () => {
    const { id:productid } = useParams();
    const product = products.find(product => product._id === productid);
  
  return <>
<Link to='/' className='btn btn-outline-secondary btn-lg my-3'>Go Back</Link>
<Row>
    <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
    </Col>
    <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
           <ListGroup.Item>
            <p>{product.description}</p>
           </ListGroup.Item>
        </ListGroup>
    </Col>
    <Col md={3}>
    <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>${product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <h4>{`Stock: 0${product.countInStock} left`}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
               <Button className='btn ' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
        </ListGroup>
    </Card>
    </Col>
</Row>
    </>
}

export default ProductScreen