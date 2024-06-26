import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductList from './product-list';
import EditProduct from './edit-product';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

export default function Products() {
  // get current location path
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const path = pathArr[pathArr.length - 1];

  return (
    <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className='nav-link'>
                  Home
                </Link>
              </Navbar.Brand>
                <Nav>
                  {path !== "add" ? <Link to="/products/add" className='nav-link'>Add Product</Link> : <Link to="/products/" className='nav-link'>Product Management</Link>}
                </Nav>
              
            </Container>
          </Navbar>
      {/* hide add link if already on add new user component */}
      
      <Container className='pt-4'>
        <Row>
          <Col md={12}>
            <div className='wrapper'>
            {path !== 'add' && path.length === 0 ? <ProductList/> : path !== 'add' && path.length > 0 ? <EditProduct id={path} /> : <h2>Add Product</h2>}

            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


