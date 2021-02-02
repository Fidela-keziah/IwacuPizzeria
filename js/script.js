var sizePrice =[900,600,400]
var deliverPrices=[0,100];
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
         alert(" order is "+newOrder.fullOrder() + " click ok to see your bill ");
         alert(" bill is "+newTotal.finalTotal() + "your pizza is ready,pick it");
     }
     else{
         if(pizzaPick===2){
             prompt("enter location where you want your pizza to be delivered");
             alert("your order has been received and it will be delivered,click ok to see full information of your order");
             alert(" order is " +newOrder.fullOrder() + "click ok to see your bill");
             alert(" bill is " +newTotal.finalTotal() + "your pizza will be delivered in 30minutes");
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