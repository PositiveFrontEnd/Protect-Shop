import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorGetAllOrders } from "../../store/selectors";
import "./ProfilePageStyle.scss"
const OrderInfo = () =>{
    const { orderNum } = useParams();
    const allOrders = useSelector(selectorGetAllOrders);
    const order = allOrders.find(order => order.orderNo === orderNum);
    return(
        <div className="container">
           {order.products.map((product,index)=>{
           return <div className="order_info_product" key={index}>
            <div className="info_product">
         <img className="info_product_img" src={product.product.imageUrls[0]} alt="" />
         <div className="info_product_name">
        <p>{product.product.name}</p> 
         <p>{product.product.brand}</p>
         <p>{product.product.color} / {product.product.size} </p> 
         </div>
         </div>
         <div className="info_product_allPrice" >
        <p>{product.product.currentPrice}$</p>
        <p className="info_product_counter">x{product.cartQuantity}</p>
         </div> 
      </div>
         })}
         <ul className="order_contact_info">
            <li>
         <h3 className="contact_info_nameInfo">Payment Information</h3>
          <div className="contact_info_user">
          <p>{order.firstName} {order.lastName} {orderNum}</p>
         <p>{order.email} / {order.mobile}</p>
         <div>
         <p>{order.deliveryAddress.address}</p>
         <p>{order.deliveryAddress.city} {order.deliveryAddress.country} {order.deliveryAddress.postal}</p>
         </div>
         </div>
            </li>
            <li>
         <h3 className="contact_info_nameInfo">Information Delivery</h3>
          <div className="contact_info_user">
          <p>{order.firstName} {order.lastName} {orderNum}</p>
         <p>{order.email} / {order.mobile}</p>
         <div>
         <p>{order.deliveryAddress.address}</p>
         <p>{order.deliveryAddress.city} {order.deliveryAddress.country} {order.deliveryAddress.postal}</p>
         </div>
         </div>
            </li>
            <li>
         <h3 className="contact_info_nameInfo">Delivery method</h3>
          <div className="contact_info_user">
        <p>{order.products[0].product.delivery}</p>
         </div>
            </li>
            <li>
         <h3 className="contact_info_nameInfo">Payment methods</h3>
          <div className="contact_info_user">
        <p>{order.paymentInfo}</p>
         </div>
            </li>
         </ul>
        <p className="order_total_price">{order.totalSum} $</p>
        </div>
         
        
    )
}

export default OrderInfo