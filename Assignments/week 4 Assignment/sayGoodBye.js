(function (window){
    var speakWord = "Good Bye! "
    var students = ["Yaakov", "John", "jen", "Jason", "Paul", "frank", "Larry", "Paula", "Laura", "Jim"];
    var speakGoodBye  = {}
    speakGoodBye.sayGoodbye = function(){
        for(var prop in students){
            var firstChar = students[prop].charAt()
            firstChar = firstChar.toUpperCase();
            if(firstChar !== 'J'){
                console.log(speakWord+" Mr. "+ students[prop])
            }
        }
    }   
    window.speakGoodBye = speakGoodBye; 
})(window);
