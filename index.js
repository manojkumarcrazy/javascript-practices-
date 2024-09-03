///
   



     /// 1. Function practice


     // 1. Function Decleration
    
     //add(10,20); // hoisting function 
        function add(  a ,  b){ // parameters
            this. a = a;
            this. b = b;
            // this .t =t;     //Function Decleration
            
            const g = (a+b)*b;
            console.log( g);
        }
                   
       add(10,20);// arguments 

        // Return Type Function 

        function ret(c,d){
         return c-d;
        }
         const x  = ret(30,40);   // Return Type Function
         console.log(  x)
        // function app() {
        //  console.log(a+b);
        // }
        // app(); 

       //  3.  Expression  Function

       let my = function(v){
        return (console.log(v));

        }
        console.log(my(40));


        // 4.  Arrow Function 

   const u = b => "hello " +b ;

   console.log(u(20));  // Type 1
      
   
   const i = (j,k,l ) => 
    {
        return ("the value is " + (j+k+l));
    }
   const y = i(2,3,4);
 console.log(y);   // Type 2
        

    // 5. Default parameters
    
    let o = function(name = "manoj"){
        return name;

    }
    const p = o ("kumar");
    console.log(p);
    // const w = o();
    // console.log(w);  // Default parameter

    // 6.  Anonymous Function


     // Type 1 
     const v = function(ppl){
 console.log('hello there !'+ ppl);
     }
     const pp = v(8+8);
    

     // Type 2 

   
        (function(name){
           console.log("Hi "+ name );
     })("manoj");
    
      // Type 3 
      // Anonymous Arrow Function
      const  g = (name ) => console.log(name);

      g('kumar');

       // Type 4 
       setTimeout(function(){
        console.log("Hello World");  // Anonymous Function and a callback 
       },1000);

       // Type 5

       (() =>{
        //  Immediately Invoked Function Expression 
        console.log("hello");


       })();


       // 6. Constructor Function 

       function person(name ,add){
            this .name = name ;
            this . add  = add;
             this . adds = function() {
                 console.log('Hello');
                
             };
            

       }
       const   kl = new person('Manoj',(7+9));
       console.log (kl.name);
       console.log (kl.add);
       kl .adds();
      // console.log (kl.adds);

