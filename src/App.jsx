import React, { useState } from 'react'
import Navebar from './commponends/Navebar'
import Header from './commponends/Header'
import Footer from './commponends/Footer'
import Main from './commponends/Main'
function App() {
    let [cart,setCart] = useState(0)
    let data = [
        {
          sale : "sale",
          tittle : "Motorola razr | 2023 |",
          price : "$599.00",
          offer : "$499.00",
          banner : "https://m.media-amazon.com/images/I/514YogjIWpL._AC_SR480%2C570_.jpg"
          
        },
        {
            sale : "sale",
            tittle : "Samsung Galaxy A15",
            price : "$255",
            offer : "$$135",
            banner : "https://m.media-amazon.com/images/I/51rp0nqaPoL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          },
          {
            sale : "sale",
            tittle : "Acer Aspire 3 A315-24P-R7VH Slim Laptop ",
            price : "$629",
            offer : "$529.39",
            banner : "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY218_.jpg"
          },
          {
            sale : "sale",
            tittle : "Apple iPhone 13 Pro Max",
            price : "$649.69",
            offer : "$529.39",
            banner : "https://m.media-amazon.com/images/I/51UtM-A3fdL._AC_UL320_.jpg"
          },
          {
            sale : "sale",
            tittle : "Apple 2024 MacBook Air 13-inch Laptop ",
            price : "$1119",
            offer : "$989",
            banner : "https://m.media-amazon.com/images/I/71YG+VrvrTL._AC_SX466_.jpg"
          },
          {
            sale : "sale",
            tittle : "A15 Pro Max",
            price : "$599.00",
            offer : "$499.00",
            banner : "https://m.media-amazon.com/images/I/71aGs+ZlfML._AC_UY218_.jpg"
            
          },
          {
              sale : "sale",
              tittle : "Oppo A96 ",
              price : "$185",
              offer : "$135",
              banner : "https://m.media-amazon.com/images/I/51GJG48mvQL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            },
            {
              sale : "sale",
              tittle : "One Plus 12",
              price : "$799",
              offer : "$599",
              banner : "https://m.media-amazon.com/images/I/71NW2QaIzlL._AC_UY218_.jpg"
            }
      ]
  return<>
  <Navebar cart={cart}/>
  <Header/>
      

  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                
                    {
                        data.map((e,i)=>{
                            return <Main cart={cart} setCart={setCart}
                             key={i} data={e}/>
                        })
                    }
                 
                </div>
            </div>
        </section>

       <Footer/>
  
  </>
}

export default App