module.exports = {
  // Disables the aggressive element highlighting that causes the text to vanish
  highlight: false,
  
  // Stops the server from injecting tracking code into every HTML element you touch
  injectBody: true, 
  
  // Prevents instant updates while mid-type; waits for you to actually pause or save
  delay: 500,
  
  // Ignores rapid configuration/JSON updates so the page doesn't crash mid-edit
  ignore: [/\.json$/]
};