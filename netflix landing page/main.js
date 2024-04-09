function hideShow(questionId) {
    var answerElements = document.getElementsByClassName('answer');
    for(var i =0; i < answerElements.length;i++){
        var answerElement = answerElements[i];
        if(answerElement.id===questionId){
           if(answerElement.style.display==='block'){
            answerElement.style.display = 'none'
           }
           else{
            answerElement.style.display = 'block'
           }
        }
        else {
            answerElement.style.display = 'none';
        }
    }}
