import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  return (
    <div className="App">
      <ShopingCarts />

    </div>
  );
}

function ShopingCarts() {
  return (
<div className='container'>
<Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        Cart
</ Button>

<div className="shopping-container">
<div className='box'>
  <img className='shopping-poster' src='https://media.nationalgeographic.org/assets/photos/119/306/59c1ae6c-30e9-4f00-ad77-7c98de37aaa9.jpg' alt="lizard" />
<div>
  <h2 style={{textAlign: 'center'}}>Fancy Product</h2>
</div>
<div style={{textAlign: 'center'}}>
    $40.00 - $80.00
</div>
<br />
<div>
<Button style={{margin:'auto', display:'block'}} variant="outlined">View Options</Button>
</div>
</div>

<div className='box'>
  <img className='shopping-poster' src='https://media.nationalgeographic.org/assets/photos/119/306/59c1ae6c-30e9-4f00-ad77-7c98de37aaa9.jpg' alt="lizard" />
<div>
  <h2 style={{textAlign: 'center'}}>Special Item</h2>
</div>
<div style={{textAlign: 'center'}}>
    $20.00 $18.00
</div>
<br />
<div>
<Button style={{margin:'auto', display:'block'}} variant="outlined">Add to cart</Button>
</div>
</div>

<div className='box'>
  <img className='shopping-poster' src='https://media.nationalgeographic.org/assets/photos/119/306/59c1ae6c-30e9-4f00-ad77-7c98de37aaa9.jpg' alt="lizard" />
<div>
  <h2 style={{textAlign: 'center'}}>Special Item</h2>
</div>
<div style={{textAlign: 'center'}}>
    $20.00 $18.00
</div>
<br />
<div>
<Button style={{margin:'auto', display:'block'}} variant="outlined">Add to cart</Button>
</div>
</div>

<div className='box'>
  <img className='shopping-poster' src='https://media.nationalgeographic.org/assets/photos/119/306/59c1ae6c-30e9-4f00-ad77-7c98de37aaa9.jpg' alt="lizard" />
<div>
  <h2 style={{textAlign: 'center'}}>Special Item</h2>
</div>
<div style={{textAlign: 'center'}}>
    $20.00 $18.00
</div>
<br />
<div>
<Button style={{margin:'auto', display:'block'}} variant="outlined">Add to cart</Button>

</div>
</div>

</div>
</div>
  )
}

// function ShoppingCartBox() {
//   return (
//     <div className='shopping-cart-box'>
//     sdsi
//       </div>
//   )
// }