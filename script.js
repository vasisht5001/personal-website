
$(document).ready (function(){
    $("#form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
                
                
            },
           
            email:{
                required:true
        },
mob:{
    length:10
    

}
    
        }

    })
    
})
