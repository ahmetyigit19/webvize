document.querySelector("#button1").addEventListener("click",getdatapi0);
document.querySelector("#button2").addEventListener("click",getdatapi1);
document.querySelector("#button3").addEventListener("click",getdatapi2);
document.querySelector("#button4").addEventListener("click",getdatapi3);
document.querySelector("#button5").addEventListener("click",getdatapi4);
document.querySelector("#button6").addEventListener("click",getdatapi5);




function getdatapi0(){
    fetch("https://jsonplaceholder.typicode.com/users") .then(function name(response) {
    return response.json();
}).then(function name(users) {
    let output = "<ul>";
    
    users.foreach(function(users) {

output +=`<li>album ıd ${users.id}<\li>`

    })

        output += "<\ul>";
        document.getElementById("output").innerHTML += output;
    });







    function getdatapi1(){
        fetch("https://jsonplaceholder.typicode.com/albums") .then(function name(response) {
        return response.json();
    }).then(function name(users) {
        let output = "<ul>";
        
        users.foreach(function(users) {
    
    output +=`<li>album title ${users.name}<\li>`
    
        })
    
            output += "<\ul>";
            document.getElementById("output").innerHTML += output;
        });
    
    
     
function getdatapi2(){
        fetch("https://jsonplaceholder.typicode.com/users") .then(function name(response) {
        return response.json();
    }).then(function name(users) {
        let output = "<ul>";
        
        users.foreach(function(users) {
    
    output +=`<li>user name ${users.username}<\li>`
    
        })
    
            output += "<\ul>";
            document.getElementById("output").innerHTML += output;
        });
    



        function getdatapi3(){
            fetch("https://jsonplaceholder.typicode.com/users") .then(function name(response) {
            return response.json();
        }).then(function name(users) {
            let output = "<ul>";
            
            users.foreach(function(users) {
        
        output +=`<li>user email ${users.  email}<\li>`
        
            })
        
                output += "<\ul>";
                document.getElementById("output").innerHTML += output;
            });
        


            function getdatapi4(){
                fetch("https://jsonplaceholder.typicode.com/users") .then(function name(response) {
                return response.json();
            }).then(function name(users) {
                let output = "<ul>";
                
                users.foreach(function(users) {
            
            output +=`<li>User Company Name ${users.company name}<\li>`
            
                })
            
                    output += "<\ul>";
                    document.getElementById("output").innerHTML += output;
                });



                function getdatapi5(){
                    fetch("https://jsonplaceholder.typicode.com/users") .then(function name(response) {
                    return response.json();
                }).then(function name(users) {
                    let output = "<ul>";
                    
                    users.foreach(function(users) {
                
                output +=`<li>User WebSite ${users.WebSite}<\li>`
                
                    })
                
                        output += "<\ul>";
                        document.getElementById("output").innerHTML += output;
                    });
    
    