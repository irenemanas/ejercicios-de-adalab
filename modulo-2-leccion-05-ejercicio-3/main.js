'use strict'

const paragraph1 = document.querySelector('.paragraph')
function showOtherParagraph() {
    console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus aut ut aliquam, corrupti eos neque quibusdam ex amet soluta commodi quis laborum repellat nesciunt quo hic corporis, dolor unde. ')  
}
paragraph1.addEventListener('mouseover', showOtherParagraph);
