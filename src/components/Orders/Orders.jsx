import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './Orders.scss'

function Orders() {
  const { order, setOrder} = useContext(Context)


  const delOrder = (evn)=>{
    setOrder(order.filter((e)=> e.id != evn))
  }
  return (
    <div className='orders'>
        <h2>Orders #34562</h2>
        <div className="orders__btns">
          <button>Dine In</button>
          <button>To Go</button>
          <button>Delivery</button>
        </div>

        <ul className="order__list">
          {
            order?.map((e,i)=>(
              <li key={i} className='order__item'>
              <div className='item__left'>
                <div>
                  <img src={e.img} alt="" />
                  <span>
                    <b>{e.title}</b>
                    <p>$ {e.price}</p>
                  </span>
                  <p className='order__num'>{e.number}</p>
                </div>
                <input type="text" placeholder='Please, just a little bit spicy only.' />
              </div>
              <div className='item__right'>
                <span>$ {e.number * e.price}</span>
                <button onClick={()=>delOrder(e.id)}><i className="bi bi-trash"></i></button>
              </div>
            </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Orders 