import { Carousel } from 'react-bootstrap';

export function Header() {
    return (
<Carousel>
    <Carousel.Item>
      <img
        className="header-image"
        src="https://320ryg19rh2bhqo6vqdmrneq-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/shutterstock_1272191479-768x512.jpg"
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="header-image"
        src="https://viralsolutions.net/wp-content/uploads/2019/03/shutterstock_501095686.jpg"
        alt="Second slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="header-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfv6-smiO-PMma9IYwsMyHJAcq2GK6Vphikw&usqp=CAU"
        alt="Third slide"
      />
    </Carousel.Item>
    </Carousel>
    )
  }