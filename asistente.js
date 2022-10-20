/*
Programa creado por youtube.com/ElTallerDeTD
20/2/20
https://github.com/imTDB
*/
var startAssistant = document.getElementById('startAssistant');
let isChecked;
startAssistant.addEventListener('click', function () {
  if (!annyang) {
    return alert('Lo siento, tu navegador no soporta el reconocimiento de voz :(');
  }
  if (document.getElementById('startAssistant').checked);
  {
    // Variable para almacenar las voces de nuestro sistema.
    var voices;

    // Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.111111;
    utter.lang = 'es-MX';

    // Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
      voices = window.speechSynthesis.getVoices();
      console.log(voices);
    };

    // Definimos los comandos a utilizar.
    var commands = {
      'hola maria': function () {
        utter.text = 'Hola usuario';
        // Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[1];
        window.speechSynthesis.speak(utter);
      },
      'open youtube': function () {
        utter.text = 'abriendo Youtube';
        utter.voice = voices[1];
        window.speechSynthesis.speak(utter);
        window.open('https://www.youtube.com', '_blank');

        // Setea la voz que queremos usar en base a nuestra lista.
      },
      'open facebook': function () {
        utter.text = 'abriendo facebook';
        utter.voice = voices[1];
        window.speechSynthesis.speak(utter);
        window.open('https://www.facebook.com', '_blank');

        // Setea la voz que queremos usar en base a nuestra lista.
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
        // Guarda el nombre que le decimos por voz.
        annyang.addCallback('result', function (phrases) {
          // Imprime el nombre por consola.
          console.log('Nombre: ', phrases[0]);
          // Para el evento result.
          annyang.removeCallback('result');
          // Nos dice hola + el nombre que le digamos por voz.
          utter.text = 'Hola, ' + phrases[0];
          window.speechSynthesis.speak(utter);
        });
      },
      // Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
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

    // Esto nos sirve para ver que escucha el programa en tiempo real.

    annyang.addCallback('result', function (phrases) {
      console.log('I think the user said: ', phrases);
      console.log('But then again, it could be any of the following: ', phrases);

      var userSaid = document.getElementById('userIsSaying');
      userSaid.innerHTML = phrases[0];
    });

    // Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);
    // Establecer el idioma
    // annyang.setLanguage("es-US");
    // Annyang comienza a escuchar.
    annyang.start();
  }
});
