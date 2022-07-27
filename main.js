function TienCap(){

    


    //đầu vào
    var khachhang = document.getElementById("khanhhang").value ;
    var MKH = document.getElementById("MKH").value ;
    var kenh = document.getElementById("kenh").value*1 ;
    var ketnoi = document.getElementById("ketnoi").value*1
       var thue_Kenh = (7.5 * kenh)*1;
    // xử lý
    switch (khachhang){
        case "Pick" :{
            var result = "<p> Nhập khách hàng" +"</p>"
        }
        case "ND" : {
            
             var result = (4.5 + 20.5 + thue_Kenh)*1;
        }
    
        case "DN" : {
            if(kenh <= 10){
              var result =  (15 + 75 +ketnoi*50)*1;
            }
            if( kenh > 10){
                var result = (15 +75 + kenh*5 + ketnoi*50)*1
            }
            
        }
    // đầu ra 
    document.getElementById("Tiencap").innerHTML = result;
}
}
