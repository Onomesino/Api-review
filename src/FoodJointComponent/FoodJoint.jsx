import React from 'react';
import { Nav } from 'react-bootstrap';
import "./FoodJoint.css"

function FoodJoint() {
  return (
    <>
    <Nav>
        <h2>Foodjoint</h2>

        <img src="./images.png" alt="" id='bell' />
        <img src="./shopping-cart.jpg" alt="" id='cart'/>
    </Nav>
    </>
  )
}

export default FoodJoint


{/* <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav>Active</Nav>
      </Nav.Item>
    </Nav>
     */}