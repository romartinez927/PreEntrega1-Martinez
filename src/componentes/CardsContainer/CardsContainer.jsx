import "bootstrap/dist/css/bootstrap.css"
import Card from "./Card"

function CardsContainer() {
    return(
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center">
            <Card img="./imagenes/card1.png" nombre="Remera clásica" precio="1200"/>
            <Card img="./imagenes/card2.jpeg" nombre="Remera gris" precio="1200"/>
            <Card img="./imagenes/card3.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card4.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card5.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card6.png" nombre="Remera gris" precio="1200"/>
            <Card img="./imagenes/card7.png" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card8.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card9.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card10.jpeg" nombre="Remera gris" precio="1200"/>
            <Card img="./imagenes/card11.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card13.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card14.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card15.jpeg" nombre="Remera gris" precio="1200"/>
            <Card img="./imagenes/card16.jpeg" nombre="Short Negro" precio="2100"/>
            <Card img="./imagenes/card17.jpeg" nombre="Short Negro" precio="2100"/>
        </div>
    )
}

export default CardsContainer