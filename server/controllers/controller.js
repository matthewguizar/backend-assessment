
module.exports = {
    randomCompliment: (req, res) => {
         const compliments = ["Gee, you're a smart cookie!",
                            "Cool shirt!",
                            "Your Javascript skills are stellar.",
         ];
       
         // choose random compliment
         let randomIndex = Math.floor(Math.random() * compliments.length);
         let randomCompliment = compliments[randomIndex];
       
         res.status(200).send(randomCompliment);
         
     },
 
     randomFortune: (req, res) => {
 
         const fortunes = [
     'you are who you choose to be',
     'disbelief destroys the magic',
     'do not make extra work for yourself',
     'dont just spend time. invest it',
     'dont let friends impose on you, work calmly and silently',
     'all will go well with your new project'                    
     ];
     let rngFortune = Math.floor(Math.random() * fortunes.length)
     let randomFortune = fortunes[rngFortune]
     res.status(200).send(randomFortune)
     
     }
 
     
 }
