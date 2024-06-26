import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button  } from 'react-bootstrap';
import Rating from '../componenets/Rating';
import products from '../products'

const ProductScreen = () => {
    const [productData, setProducts] = useState([]);
    const { id:productid } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/product/${productid}`);
      
      setProducts(data);  
     
    }
    fetchProducts();
  },[productid])
    
    
  
  return <>
<Link to='/' className='btn btn-outline-secondary btn-lg my-3'>Go Back</Link>
<Row>
    <Col md={5}>
        <Image src={productData.image} alt={productData.name} fluid />
    </Col>
    <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{productData.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={productData.rating} text={`${productData.numReviews} reviews`} />
            </ListGroup.Item>
           <ListGroup.Item>
            <p>{productData.description}</p>
           </ListGroup.Item>
        </ListGroup>
    </Col>
    <Col md={3}>
    <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>${productData.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <h4>{`Stock: 0${productData.countInStock} left`}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
               <Button className='btn ' type='button' disabled={productData.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
        </ListGroup>
    </Card>
    </Col>
</Row>
    </>
}

export default ProductScreen