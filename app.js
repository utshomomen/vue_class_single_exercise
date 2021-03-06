const app = Vue.createApp({

    name:'App',
data(){
  
    return {
        name:'utsho',
        volume:0,

      num :0
    }
},
methods: {
    changeName(){
        alert("сложно всё делать")
    }
},

computed:{

},

watch:{

    volume( newValue){
       
          

                for (newValue=1; newValue<100; newValue++) {

                    if(newValue%3 === 0 && newValue%6 !== 0) {
                        alert("moloko");
                    } 
                
                    else if (newValue%6 === 0 && newValue%3 !== 0) {
                        alert("kofe");
                    }
                
                    else if (newValue%6 === 0 && !newValue%3 === 0) {
                        alert("kapuchino");
                    }
                    else {
                        alert(newValue); 
                    }
                }
               
            


            //    if (!(i % 3))
            //    alert("молоко")
            //    if (!(i % 6))
            //    alert("кофе")

            //    else if (newValue%3 === 0) 
            //    alert("Делится на 3 капучино ")
            //    else if (newValue%6 === 0) 
            //    alert("Делится на 6 капучино ")

            // }
            

            
            
           
        
    
        // if(newValue===3){
        //     alert("divided by 3 ")
        // }
    }
}

})


app.mount('#app')