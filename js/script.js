var sizePrice =[8000,6500,5000]
var deliverPrices=[0,1000];
$(document).ready(function(){
 $('form#myform').submit(function(event){
     event.preventDefault();
     
     var pizzaSize=parseInt($('#size').val());
     var pizzaCrust=$('#crust').val();
     var pizzaTop=$('#topping').val();
     var pizzaQty=parseInt($('#quantity').val());
     var pizzaPick=parseInt($('#delivery').val());

     var price=sizePrice[pizzaSize-1];

     var DeliveryCost=deliverPrices[pizzaPick-1];

     newOrder=new Order(pizzaSize,pizzaCrust,pizzaTop);
     newTotal=new Total(price,pizzaQty,DeliveryCost);

     if (pizzaPick===1){
         alert(" ckeckout"+newOrder.fullOrder() + " click ok ");
         alert(" your bill is "+newTotal.finalTotal() + " your pizza is already");
     }
     else{
         if(pizzaPick===2){
             prompt("enter location where you want your pizza to be delivered");
             alert("your order has been received and it will be delivered,click ok to see full information of your order");
             alert(" ckeckout" +newOrder.fullOrder() + "click ok");
             alert(" your bill is " +newTotal.finalTotal() + "your pizza will be delivered in 30-45 minutes");
         }
     }
 }) ;  
});
function Order(size,crust,topping){
    this.size=size;
    this.crust=crust;
    this.topping=topping;
}
Order.prototype.fullOrder=function(){
    return this.topping + " is topping of your pizza " + " and " + this.crust +" as crust ";

};
function Total(price,quantity,delivery){
    this.price=price;
    this.quantity=quantity;
    this.delivery=delivery;

}
Total.prototype.finalTotal=function(){
    return this.price*this.quantity+this.delivery;
};