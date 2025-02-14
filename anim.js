// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 { text: "Well, you done done me in, you bet I felt it", time: 10},
  { text: "I tried to be chill, but you're so hot that I melted", time:15 },
  { text: "I fell right through the cracks", time: 19 },
  { text: "Now I'm trying to get back", time: 22 },
  { text: "Before the cool done run out: 25 },
  { text: "I'll be giving it my bestest", time: 27 },
  { text: "And nothing's gonna stop me but divine intervention", time:29 },
  { text: "I reckon it's again my turn", time: 32 },
  { text: "To win some or learn some", time: 35 },
  { text: "But I won't hesitate no more, no more", time: 38 },
  { text: "It cannot wait, I'm yours", time: 45 },
  { text: "Hmm (hey, hey)", time: 54 },
  { text: "Well, open up your mind and see like me", time: 64 },
  { text: "Open up your plans and, damn, you're free", time: 68 },
  { text: "Look into your heart and you'll find love, love, love, love", time: 71 },
  { text: "Listen to the music of the moment, people dance ", time: 77 },
  { text: "And sing We're just one big family", time: 80 },
  { text: "And it's our God-forsaken right to be loved, loved, loved, loved, loved", time: 84 },
  { text: "So I won't hesitate no more, no more", time: 91 },
  { text: "It cannot wait, I'm sure", time: 99 },
  { text: "There's no need to complicate", time: 105 },
  { text: "Our time is short", time: 109 },
  { text: "This is our fate, I'm yours", time: 112 },
 { text: " I'm yours", time: 115 },
  { text: "Do, do, do, do you, but do you, do you, do, do, but do you want to come on", time: 118 },
  { text: "Scooch on over closer, dear?", time: 122 },
  { text: "And I will nibble your ear", time: 125 },
  { text: "A-soo-da-ba-ba-ba-ba-bum", time: 130 },
  { text: "Whoa-oh-oh", time: 133 },
  { text: "Whoa-oh-oh-oh-oh-whoa-whoa-whoa", time: 135 },
  { text: "Uh-huh, mmm-hmm", time: 140 },
  { text: "I've been spending way too long checking my tongue in the mirror", time: 142 },
  { text: "And bending over backwards just to try to see it clearer", time: 145 },
  { text: "But my breath fogged up the glass", time: 150 },
  { text: "And so I drew a new face and I laughed", time: 152 },
  { text: "I guess what I be saying is there ain't no better reason", time: 156 },
  { text: "To rid yourself of vanities and just go with the seasons", time: 158 },
  { text: "It's what we aim to do", time: 162 },
  { text: "Our name is our virtue", time: 165 },
  { text: "But I won't hesitate no more, no more", time: 168 },
  { text: "It cannot wait, I'm yours", time: 176 },
  { text: "Well, open up your mind and see like me (I won't hesitate)", time: 182 },
  { text: "Open up your plans and, damn, you're free (no more, no more)", time: 185 },
  { text: "And look into your heart, and you'll find (it cannot wait)", time: 188 },
  { text: "That the sky is yours (I'm sure)", time: 191 },
  { text: "So please don't, please don't, please don't (no need to complicate)", time: 193 },
  { text: "There's no need to complicate (our time is short)", time: 196 },
  { text: "'Cause our time is short (this is)", time: 200 },
  { text: "This, oh this, this is our fate (our fate)", time: 202 },
  { text: "I'm yours", time: 204 },
  { text: "Bra-bop-mm, da-bap-bop-mm-day", time: 212 },
  { text: "Do-do-do-do, do-do-do-do, do-do-do, mm-mm-mm-mm (hey, hey)", time: 214 },
  { text: "Oh, I'm yours", time: 222 },
  { text: "Oh, whoa, baby, do you believe I'm yours?", time: 228 },
  { text: "You best believe, you best believe I'm yours, mmm-hmm", time: 234 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
