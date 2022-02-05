function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log("hello".toUpperCase());
}
function logWhisper(string){
    console.log("hello".toLowerCase());   
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
  }
  else if (string === string.toUpperCase()) {
      return "YES INDEED!";
  } else if ('Let\'s have dinner together.') {
    return 'I would love to!';
  }}

/*
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase) {return `I can\'t hear you!`;}
    else if (string === string.toUpperCase()) {return `YES INDEED!`;}
}
     
   /* if (whisper) {return `I can\'t hear you!`;} 
    else if (shout) {return `YES INDEED!`;}

    if (string.toLowerCase()) { return `I can\'t hear you!`;}
    else if (string.toUpperCase()) {return `YES INDEED!`;}
    */
    

