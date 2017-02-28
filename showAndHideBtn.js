const createButton = function(){
    const btnProps = {
        text : 'Hide Color Picker',
        color : "black",
        alt_text : "Show Color Picker"
    };

    //creates the button object
    const btn = document.createElement("BUTTON");
    //sets the inner Html to the value
    btn.innerHTML = btnProps['text'];


    btn.onclick = function() {
        //  console.log(myButton);
        const colorPicker = document.getElementsByTagName('div')[0];
        btn.innerHTML = btnProps['alt_text'];

         if (colorPicker.style.display == 'block') {
           colorPicker.style.display = 'none';
           btn.innerHTML = btnProps['alt_text'];
          //  showAndHideBtn.style.color = "blue";
          console.log(Yergh);
         } else {
           colorPicker.style.display = 'block';
          //  console.log(myButton.innerHTML);
          btn.innerHTML = btnProps['text'];
          //  showAndHideBtn.style.color = "red";
           console.log("Nergh");
         }
    }

    // appends the rest to the document - DOM
    document.body.appendChild(btn);

    };
