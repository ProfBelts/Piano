// Refactor the code using jQuery

let numberOfKeys= document.querySelectorAll(".key").length;

    for (let i=0; i<numberOfKeys; i++) {
        document.querySelectorAll(".key")[i].addEventListener("click", function(){

           let keyInnerHTML= this.getAttribute("data-key");

            makeSound(keyInnerHTML);
            buttonAnimation(keyInnerHTML);


        })
    }
    
    document.addEventListener("keydown", function(event) {

        makeSound(event.key);
        buttonAnimation(event.key);
    })


    const makeSound= function(key) {

        switch(key) {
            case "a":
                let c= new Audio("tunes/a.wav");
                c.play(); 
            break;

            case "w":
                let cSharp= new Audio("tunes/w.wav");
                cSharp.play();
            break;

            case "s":
                let d= new Audio("tunes/s.wav");
                d.play();
            break;

            case "e":
                let dSharp= new Audio("tunes/e.wav");
                dSharp.play();
            break;

            case "d":
                let e= new Audio("tunes/d.wav");
                e.play();
            break;

            case "f":
                let f= new Audio("tunes/f.wav");
                f.play();
            break;

            case "t":
                let fSharp= new Audio("tunes/t.wav");
                fSharp.play();
            break;
            
            case "g":
                let g= new Audio("tunes/g.wav");
                g.play();
            break;
            
            case "y":
                let gSharp= new Audio("tunes/y.wav");
                gSharp.play();
            break;

            case "h":
                let a= new Audio("tunes/h.wav");
                a.play();
            break;

            case "u":
                let aSharp= new Audio("tunes/u.wav");
                aSharp.play();
            break;

            case "j":
                let b= new Audio("tunes/j.wav");
                b.play();
            break;

            case "k":
                let c2= new Audio("tunes/k.wav");
                c2.play();
            break;

            case "o":
                let cSharp2= new Audio("tunes/o.wav");
                cSharp2.play();
            break;

            case "l":
                let d2= new Audio("tunes/l.wav");
                d2.play();
            break;

            case "p":
                let dSharp2= new Audio("tunes/p.wav");
                dSharp2.play();
            break;

            case ";":
                let e2= new Audio("tunes/;.wav");
                e2.play();
            break;

        }

    }

    const buttonAnimation= function (currentKey) {

        let activeButton = document.querySelector(`[data-key="${currentKey}"]`);

        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }