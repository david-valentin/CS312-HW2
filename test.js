const createSlider = function() {
      const btn = {
        text: "Hide Color Picker",
        node: undefined,
        onclick:(evt)=>{}
        color : "black" ;
      };


      const block = document.createElement('div');

      const btn = document.createElement('btn');
      block.appendChild(btn);

      const label = document.createElement('span');
      label.innerHTML = ;
      block.appendChild(label);

      slider.node = block;

      range.oninput = (evt)=>{
        slider.value = range.value;
        label.innerHTML = slider.value;
        slider.oninput(evt);
      };

      return slider;
    };
