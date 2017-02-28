function showColorPicker() {
   const colorPicker = document.getElementsByTagName('div')[0];
   console.log(colorPicker);
   const showAndHideButton = document.getElementById('showAndHideBtn');

   if (colorPicker.style.display === 'block') {
     colorPicker.style.display = 'none';
     showAndHideBtn.firstChild.data = "Show Color Picker Button"
     console.log("Yergh");
   } else {
     colorPicker.style.display = 'block';
     showAndHideBtn.firstChild.data = "Hide Color Picker Button"
     console.log("Nergh");
   }
}
