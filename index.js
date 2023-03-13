function chooseTheme() {
    var color = prompt("What color would you like the site Theme to be?");
    switch (color){
        case 'red':
            document.querySelector(".top-footer").style.backgroundColor = '#DF3737';
            document.querySelector(".bottom-footer").style.backgroundColor = '#A70C0C';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/red-bg.jpg)";
            break;

        case 'blue':
            document.querySelector(".top-footer").style.backgroundColor = '#6B94A0';
            document.querySelector(".bottom-footer").style.backgroundColor = '#92C9DA';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/blue-bg.jpg)";

            break;

        case 'green':
            document.querySelector(".top-footer").style.backgroundColor = '#BCE8A0';
            document.querySelector(".bottom-footer").style.backgroundColor = '#5EA460';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/green-bg.jpg)";

            break;  
            
        case 'purple':
            break;          

    }
    
  }
