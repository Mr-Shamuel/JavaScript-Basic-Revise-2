 

  
        // recursion 

      //   function sum(i){
      //    console.log(i);
      //    if(i==1){
      //       return 1;
      //    }

      //    return i+sum(--i);
      //   }
      //   console.log(sum(5));
         
       
      var Students =[
         { fname:'Abir', Lname:'Sheikh',age:25},
         { fname:'Shamuel', Lname:'Molla',age:26},
         { fname:'RanA', Lname:'khan',age:22},
         { fname:'rani ran', Lname:'khan',age:30},
         { fname:'rony ran', Lname:'khan',age:52},
         { fname:'shawon ran', Lname:'khan',age:72},
         ];



      
         //search by name 
          const data =[];
         function searchName(txt){
            for(student of Students){
               //   if(student.fname=='Abir'){
                 if(student.fname.includes(txt)){
                  data.push(student);
                 }
               }
               return data;
         }
      const result = searchName('ran');
      console.log(result);

var store = []
      for(age of Students){
        if(age.age>30){
       break;
        }
        else{
         store.push(age.age);
         
        }
       
      }
      console.log(store);



      