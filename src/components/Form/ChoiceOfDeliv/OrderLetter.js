export const letterGuestHTML = (orderGuestData, productsOrderForGuest, updatedFormData, formattedDeliveryDate) => `
  <div>
    <h1>Your order is placed.</h1>
    <h3>Hello ${orderGuestData.firstName} ${orderGuestData.lastName}</h3>
    <p>We wanted to inform you that your order has been successfully completed. Thank you for shopping with PROTECT.</p>
    ${
      productsOrderForGuest &&
      productsOrderForGuest.map(
        (item) =>
          `<div style="display: flex; gap: 20px;">
            <div style="max-width: 150px;">
              <img style="width: 150px;" src="${item.product.imageUrls[0]}" />
            </div>
            <div> 
              <div style="display: flex;"> 
                <p>Name:</p>
                <p>${item.product.name}</p>
              </div>
              <div style="display: flex;"> 
                <p>Product No:</p>
                <p>${item.product.itemNo}</p>
              </div>
              <div style="display: flex;"> 
                <p>Color:</p>
                <p>${item.product.color}</p>
              </div>
              <div style="display: flex;"> 
                <p>Quantity:</p>
                <p>${item.cartQuantity}</p>
              </div>
              <div style="display: flex;"> 
                <p>Price:</p>
                <p>$${item.product.currentPrice}</p>
              </div>
            </div>
          </div>`
      )
    }
    <p>The following items will be delivered to ${updatedFormData.deliveryAddress.address} ${updatedFormData.deliveryAddress.postal} ${updatedFormData.deliveryAddress.city}.</p>
    You will receive this product on ${formattedDeliveryDate}
    <p>Delivery is paid according to the carrier's tariff.</p>
    <p>If you didn't receive your order in time, which is unlikely, or the information provided is incorrect, please contact us by phone or with "call me out" on our <a href="https://protect-shop-pmdi.vercel.app/">page</a>.</p>
  </div>
`;

export const letterUserHTML = (order, basketUser, updatedFormData, formattedDeliveryDate) => `
  <div>
    <h1>Your order is placed.</h1>
    <h3>Hello ${order.firstName} ${order.lastName}</h3>
    <p>We wanted to inform you that your order has been successfully completed. Thank you for shopping with PROTECT.</p>
    ${
      basketUser.products &&
      basketUser.products.map(
        (item) =>
          `<div style="display: flex; gap: 20px;">
            <div style="max-width: 150px;">
              <img style="width: 150px;" src="${item.product.imageUrls[0]}" />
            </div>
            <div> 
              <div style="display: flex;"> 
                <p>Name:</p>
                <p>${item.product.name}</p>
              </div>
              <div style="display: flex;"> 
                <p>Product No:</p>
                <p>${item.product.itemNo}</p>
              </div>
              <div style="display: flex;"> 
                <p>Color:</p>
                <p>${item.product.color}</p>
              </div>
              <div style="display: flex;"> 
                <p>Quantity:</p>
                <p>${item.cartQuantity}</p>
              </div>
              <div style="display: flex;"> 
                <p>Price:</p>
                <p>$${item.product.currentPrice}</p>
              </div>
            </div>
          </div>`
      )
    }
    <p>The following items will be delivered to ${updatedFormData.deliveryAddress.address} ${updatedFormData.deliveryAddress.postal} ${updatedFormData.deliveryAddress.city}.</p>
    You will receive this product on ${formattedDeliveryDate}
    <p>Delivery is paid according to the carrier's tariff.</p>
    <p>If you didn't receive your order in time, which is unlikely, or the information provided is incorrect, please contact us by phone or with "call me out" on our <a href="https://protect-shop-pmdi.vercel.app/">page</a>.</p>
  </div>
`;
