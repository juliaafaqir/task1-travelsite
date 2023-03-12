function myFunction() {
    var color = prompt("What color would you like the site Theme to be?");
    switch (color){
        case 'red':
            document.querySelector(".top-footer").style.backgroundColor = 'red';
            document.querySelector(".bottom-footer").style.backgroundColor = 'pink';
            break;

        case 'blue':
            document.querySelector(".top-footer").style.backgroundColor = 'blue';
            document.querySelector(".bottom-footer").style.backgroundColor = 'lightblue';
            break;

        case 'green':
            document.querySelector(".top-footer").style.backgroundColor = 'green';
            document.querySelector(".bottom-footer").style.backgroundColor = 'gray';
            break;  
            
        case 'purple':
            break;          

    }
    // document.querySelector(".top-footer").style.backgroundColor = color
    // document.querySelector(".bottom-footer").style.backgroundColor = color.opacity(0.1);
    // document.querySelector(".header").style.backgroundImage = "url('../assets/images/green.png')";
  }
