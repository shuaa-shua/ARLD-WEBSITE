// Kukunin natin yung <span> kung saan nakalagay yung text sa HTML
const typingText = document.querySelector('.typing-text');

const words = ['UX UI Designer', 'Leader', 'Music Designer', 'Main Developer'];

let wordIndex = 0; // Taga-track kung pang-ilang word na (0 = UX UI Designer)
let charIndex = 0; // Taga-track kung pang-ilang letter na
let isDeleting = false; // Taga-check kung nagbubura ba o nagta-type

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Kapag nagbubura, babawasan ng isang letra mula dulo
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Kapag nagta-type, dadagdagan ng isang letra
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Bilis ng animation (mas mabilis magbura kaysa mag-type)
    let typeSpeed = isDeleting ? 50 : 100;

    // Kapag buo na yung word (natapos na i-type lahat ng letter)
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Maghihintay ng 2 seconds bago mag-start mag erase
        isDeleting = true;
    } 
    // Kapag nabura na lahat ng letter
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++; // Lilipat na sa susunod na word
        
        // Kapag nasa dulo na ng listahan, babalik sa umpisa (loop)
        if (wordIndex === words.length) {
            wordIndex = 0; 
        }
        typeSpeed = 500; // Maghihintay ng kalahating segundo bago i-type ang susunod na salita
    }

    // Uulitin ang function gamit ang setTimeout
    setTimeout(typeEffect, typeSpeed);
}

// Uumpisahan ang animation kapag nag-load na ang buong website
document.addEventListener("DOMContentLoaded", function() {
    // Para walang delay pag ka-load ng page, simulan agad pero blangko muna
    typingText.textContent = ""; 
    setTimeout(typeEffect, 500);
});

