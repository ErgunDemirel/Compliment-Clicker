'use strict'

const sum = document.getElementById("sum");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const resetBtn = document.getElementById("resetBtn");
let lvl = document.getElementById("lvl");
const comp = document.getElementById("comp");

let up = 0;
let count = 0;

const levelUp = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350]
const levelDown = [24, 49, 74, 99, 124, 149, 174, 199, 224, 249, 274, 299, 324, 349]

const compliments = [
    "Deine Augen sind wunderschön!",
    "Ich liebe dein Lächeln!",
    "Deine Schönheit kann man gar nicht in Worte fassen!",
    "Jedes Mal wenn ich dich sehe, verliebe ich mich wieder neu in dich!",
    "Es gibt 8 Milliarden Menschen auf der Welt, aber meine Zeit will ich nur mit dir verbringen!",
    "Immer wenn ich traurig bin, erinnere ich mich daran, dass ich so einen wundervollen Menschen wie dich an meiner Seite habe!",
    "Ich mag das Lied 'Golden Brown', weil es mich an deine gold-braunen Augen erinnert!",
    "Ich liebe dich viel zu sehr für mein eigenes Wohl!",
    "Ich wünschte, du könntest dich einmal durch meine Augen sehen, damit du verstehst, wie wunderschön du eigentlich bist!",
    "Ich nenne nicht einfach irgendwen schön, ich meine es ernst, wenn ich das sage!",
    "Meine liebe Elif",
    "Ich könnte endlos viele Gedichte über dich schreiben!",
    "Wunderschön, hübsch, süß, faszinierend, unglaublich, atemberaubend, fürsorglich, lieb, stur… meine Liebe.",
    "Geschafft! Das ist das letzte Level. Keiner dieser Komplimente beschreibt meine Liebe für dich Genug. Heirate mich einfach low key!" 
]



addBtn.addEventListener("click", function(){
    count++;
    sum.textContent = count;

    if (levelUp.includes(count)) {
        up++;
        lvl.textContent = up;
        alert("Level " + up + "!");
        const p = document.createElement("p");
        p.textContent = compliments[up - 1];
        comp.appendChild(p);
    }

    
});


subBtn.addEventListener("click", function(){
    if (count <= 0) {
        alert("Keine Minus Zahlen!")
        sum.textContent = 0;
        return;
    }
    count--;
    sum.textContent = count;

    if (levelDown.includes(count)){
        up--;
        lvl.textContent = up;
        alert("Level " + up + "!")
        
        const lastP = comp.lastElementChild;
        if (lastP) {
        comp.removeChild(lastP);
        }
    }
});


resetBtn.addEventListener("click", function(){
    count = 0;
    up = 0;
    sum.textContent = count;
    lvl.textContent = up;
    alert("Level " + up + "!");
    comp.innerHTML = "";
});