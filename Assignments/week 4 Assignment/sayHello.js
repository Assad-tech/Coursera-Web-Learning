(function (window){
    var speakWord = "Hello!"
    var students = ["Yaakov", "John", "jen", "Jason", "Paul", "frank", "Larry", "Paula", "Laura", "Jim"];
    var speakHello  = {};
    speakHello.sayHello = function(){
            for(var prop in students){
            var firstChar = students[prop].charAt()
            firstChar = firstChar.toUpperCase();
            if(firstChar === 'J'){
                console.log(speakWord+" Mr. "+ students[prop])
            } 
        }
    }   
    //  This line is coded to expose the aslamGreetings on Window.
    window.speakHello = speakHello; 
})(window);
