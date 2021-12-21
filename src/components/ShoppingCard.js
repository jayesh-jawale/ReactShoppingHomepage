import {Rate} from './StarRating';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import {useState} from "react";

const card_details = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/41sGASjc4-L.jpg',
        product: 'Item 1',
        price: '$18.00'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz1uxFIkE7XUcZ-HCg3Bd1ljo9t0LbSOuFQ&usqp=CAU',
        product: 'Item 2',
        price: '$20.00'
    },
    {
        id: 3,
        image: 'https://www.lg.com/in/images/mobile-phones/md07519000/thumbnail/LMK315IM-350-03.jpg',
        product: 'Item 3',
        price: '$25.00'
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/41sGASjc4-L.jpg',
        product: 'Item 4',
        price: '$40.00'
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Q1resWtFUGw2afg1zSy1hmtcKH1Eekmrxg&usqp=CAU',
        product: 'Item 5',
        price: '$45.00'
    }
]

export function ShoppingCards({ image, product, price, cart, setCart }) {

    const [individualCartValue, setIndividualCartValue] = useState(0);
    const [display, setDisplay] = useState("none");

    const add = () => {
        setCart(cart + 1)
        setIndividualCartValue(individualCartValue + 1);
        setDisplay("add")
    }

    const addButton = () => {
        setCart(cart + 1)
        setIndividualCartValue(individualCartValue + 1);
    }

    const removeButton = () => {
        if(individualCartValue > 1) {
            setCart(cart - 1)
            setIndividualCartValue(individualCartValue - 1);
        } else if (individualCartValue === 1) {
            setDisplay("none")
            setCart(cart - 1)
            setIndividualCartValue(individualCartValue - 1);
        }  
    }

    const styles = {display: display === 'add' ? 'none' : 'block'}
    const btnGroup = {display : display === 'add' ? 'flex' : 'none'}

    return (
        <Card className='shopping-container'>
            <Card.Img variant="top" src={image} />
            <Card.Body className='product-details'>
            <Card.Title>{product}</Card.Title>
                <p><b>{price}</b></p>
                <Rate />
                <Button style={styles} onClick={add} variant="primary">Add to cart</Button>{' '}
                <ButtonGroup style={btnGroup}>
					<Button onClick={removeButton} className="btn btn-primary cartValue">
						-
					</Button>
					<span className="value">{individualCartValue}</span>
					<Button onClick={addButton} className="btn btn-primary cartValue">
						+
					</Button>
				</ButtonGroup>
            </ Card.Body>
        </Card>
    )
}

export function ShoppingCardLists({cart, setCart}){
    return (
        <div className='card-lists'>
            {card_details.map(({ image, product, price }) => (
                <ShoppingCards image= {image} product= {product} price= {price} cart= {cart} setCart= {setCart} />
            ))}
        </div>   
    )
}