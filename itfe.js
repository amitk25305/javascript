////IMMIDIATELY INVOKED FUNCTIONN EXPRESSIONS (ITFe)
// IT HELPS TO EXECUTE DIRECT AND FAST
// IT ALSO IT THAT KI GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI H KAI  BAR TO USS POLLUTION KO HATANE KE LIYE ITFE KA USE KRTE H

// ()()-> approach

(function chai () {
    console.log(`DB CONNETED`);
    // named  ITFE
})();// comma dena jaruri h q ki isi se pta chalta h ki program kaha end krni h

( () => {
    console.log(`DB CONNETED two`);
    
})();


( (name) => {
    console.log(`DB CONNETED two ${name}`);
    // un named ITFE
})('amit')