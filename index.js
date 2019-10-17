document.querySelector(".btn").addEventListener("click" , function() {
  var hotelObject = {
    price1 : Number(document.querySelector(".htl1").value),
    price2 : Number(document.querySelector(".htl2").value),
    price3 : Number(document.querySelector(".htl3").value),
    price4 : Number(document.querySelector(".htl4").value),
    total() {
      console.log(this.price1);
    }
  };
  hotelObject.total();
});
