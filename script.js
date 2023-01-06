const btnElement = document.querySelector('.btn');


btnElement.addEventListener('mouseover', (e) => {
    console.log(e.pageX, e.pageY);
    console.log(e.pageX - btnElement.offsetLeft, e.pageY - btnElement.offsetTop);
    /* "offsetTop" give the distance from the top of 
    the page to the top of the element 

    "offsetLeft" works in the same manner*/

    const x = e.pageX - btnElement.offsetLeft;
    const y = e.pageY - btnElement.offsetTop;

    // btnElement.style.setProperty('--xPos', `${x}px`);
    // btnElement.style.setProperty('--yPos', `${y}px`);
    //* both above and below lines are same
    btnElement.style.setProperty("--xPos", x + "px");
    btnElement.style.setProperty("--yPos", y + "px");

});