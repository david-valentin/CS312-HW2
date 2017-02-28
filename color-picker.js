const createSlider = function(){
      const slider = {
        value: 0,
        node: undefined,
        oninput:(evt)=>{}
      };


      const block = document.createElement('div')

      const range = document.createElement('input');
      range.type="range";
      range.min = 0;
      range.max = 255;
      range.value = slider.value;
      block.appendChild(range);

      const label = document.createElement('span');
      label.innerHTML = slider.value;
      block.appendChild(label);

      slider.node = block;

      range.oninput = (evt)=>{
        slider.value = range.value;
        label.innerHTML = slider.value;
        slider.oninput(evt);
      };

      return slider;
    };

const createColorPicker = function(){
  const picker = {
    red: 0,
    green: 0,
    blue: 0,
    node: undefined,
    oninput:(evt)=>{}
  };

  const block = document.createElement("div");
  block.style.display = "block";


  const colorBox = document.createElement("div");
  colorBox.style.width="100px";
  colorBox.style.height = "100px";
  colorBox.style.border = " 1px solid black";

  block.appendChild(colorBox);


    const red = createSlider();
    const green = createSlider();
    const blue = createSlider();

    block.appendChild(red.node);
    block.appendChild(green.node);
    block.appendChild(blue.node);

    picker.node = block;



    const update = () =>{
        picker.red = red.value;
        picker.green = green.value;
        picker.blue = blue.value
        colorBox.style.background = `rgb(${red.value},${green.value},${blue.value})`;
        picker.oninput()
      };


    red.oninput =update;
    green.oninput = update;
    blue.oninput = update;

    update();

  return picker;




};

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
    document.body.appendChild(btn);


    btn.onclick = function() {
        //  console.log(myButton);
        const colorPicker = document.getElementsByTagName('div')[0];
        btn.innerHTML = btnProps['alt_text'];
        btn.style.color = updateBtnColor();


         if (colorPicker.style.display == 'block') {
           colorPicker.style.display = 'none';
           btn.innerHTML = btnProps['alt_text'];
           console.log('Yergh');
         } else {
           colorPicker.style.display = 'block';
          //  console.log(myButton.innerHTML);
          btn.innerHTML = btnProps['text'];
           btn.style.color = updateBtnColor();

           console.log("Nergh");

         }
         return btn;
    }

    const updateBtnColor = function() {
      const getColorPropsArray = document.getElementsByTagName('input');
      const red = getColorPropsArray[0].value;
      const green = getColorPropsArray[1].value;
      const blue = getColorPropsArray[2].value;

      btn.style.color = `rgb(${red},${green},${blue})`;

      return btn
    }

    // appends the rest to the document - DOM
};
