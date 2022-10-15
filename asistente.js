/*
Programa creado por youtube.com/ElTallerDeTD
20/2/20
https://github.com/imTDB
*/
 
function alerta(){
 

if (annyang) {
  //Variable para almacenar las voces de nuestro sistema.
  var voices;

  //Inicializamos utter.
  var utter = new SpeechSynthesisUtterance();
  utter.rate = 1;
  utter.pitch = 0.111111;
  utter.lang = 'es';

  //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
  };

  function RunFile() {
    WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("c:/windows/system32/notepad.exe", 1, false);
  }

  //Definimos los comandos a utilizar.
  var commands = {
    'hola maria': function () {
      utter.text = 'Hola usuario';
      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
    'open youtube': function () {
      utter.text = 'opening youtube mother fuckers';
      window.open('https://www.youtube.com', '_blank');

      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
    'open facebook': function () {
      utter.text = 'opening facebook son of a bitch';
      window.open('https://www.facebook.com', '_blank');

      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
    'open app': function () {
      utter.text = 'get out of here';
      RunFile();

      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
    'como estas': function () {     
      utter.text = 'Muy bien!';
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
    hola: function () {
      utter.text = 'hola, cual es tu nombre?';
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
      //Guarda el nombre que le decimos por voz.
      annyang.addCallback('result', function (phrases) {
        //Imprime el nombre por consola.
        console.log('Nombre: ', phrases[0]);
        //Para el evento result.
        annyang.removeCallback('result');
        //Nos dice hola + el nombre que le digamos por voz.
        utter.text = 'Hola, ' + phrases[0];
        window.speechSynthesis.speak(utter);
      });
    },
    //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
    'cuentame un chiste': function () {
      chistes = [
        
        'que es lo unico blanco que tiene un negro,... el dueño',
        'que es lo unico blanco que tiene un negro,... el dueño',
        'que es lo unico blanco que tiene un negro,... el dueño',
        'que es lo unico blanco que tiene un negro,... el dueño',
        'que es lo unico blanco que tiene un negro,... el dueño',
        'que es lo unico blanco que tiene un negro,... el dueño',
        
        
      ];
      utter.text = chistes[Math.floor(Math.random() * chistes.length)];
      utter.voice = voices[1];
      window.speechSynthesis.speak(utter);
    },
  };

  //Esto nos sirve para ver que escucha el programa en tiempo real.
  
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       

  //Sumamos todos los comandos a annyang.
  annyang.addCommands(commands);

  //Annyang comienza a escuchar.
  annyang.start();
}

}

