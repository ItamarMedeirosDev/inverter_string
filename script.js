$(document).ready(function() {
  $('#inverter').click(function() {
      var str = $('#inputString').val();
      var invertedStr = "";

      
      for (var i = str.length - 1; i >= 0; i--) {
          invertedStr += str[i];
      }

      $('#resultado').text('String invertida: ' + invertedStr);
  });
});
