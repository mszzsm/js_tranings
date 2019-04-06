var employee = {
    id: 37,
    name: "Hanna",  
    Posotion: "Project manager",
    salary: 1000
 };

 function promote({name, position, salary}) 
 {
   return name; 
 }

 promote(employee);

