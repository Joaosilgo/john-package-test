function comment(){

   

    var c = document.createComment("    When I wrote this, only God and I understood what I was doing,");
    var b = document.createComment("    Now, God only knows                                           ");
    var a = document.createComment("    - João Gomes : https://joaosilgo.github.io/joaogomes/         ");
    document.body.insertBefore(a, document.body.firstChild);
    document.body.insertBefore(b, document.body.firstChild);
    document.body.insertBefore(c, document.body.firstChild);




} 


function consola(){
    let hex = "🔰".codePointAt(0).toString(16);
    let emo = String.fromCodePoint("0x"+hex);
    
    const  waves = String.fromCodePoint(0x1F44B);

    const  i = String.fromCodePoint(0x1F604);

    

console.log( emo , waves);
    

    console.log('%cHello World!'+ i , 'color: darkseagreen; font-size: 30px;');


    console.log(' “Once more into the fray, into the last good fight I’ll ever know. Live and die on this day, live and die on this day”');
    console.log('https://joaosilgo.github.io/joaogomes/');
    
/**
* For the brave souls who get this far: You are the chosen ones,
* the valiant knights of programming who toil away, without rest,
* fixing our most awful code. To you, true saviors, kings of men,
* I say this: never gonna give you up, never gonna let you down,
* never gonna run around and desert you. Never gonna make you cry,
* never gonna say goodbye. Never gonna tell a lie and hurt you.
*/

}



module.exports.comment = comment;

module.exports.consola = consola;