// makes logo class a constant
const logoElement = document.querySelector('.logo')

// checks for JMR in the link
const checkChange = setInterval(()=> {
  if(logoElement.innerText === 'JMR') {
    // adds hint(unable to see text unless they check the bottom of the page and highlight it)
    document.getElementById("hope").innerHTML +=
       "<h3 style='padding-left:20px;'>This is the text which has been inserted by JS</h3>";
      alert('Element exists!');
      // stops check
    clearTimeout(checkChange)
  }
}, 500)
