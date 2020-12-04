// Set up datepicker toggle functionality

// $("#datepicker").hide();



$("#btn").click(function () {
   $("#textbox").datepicker({
      container: "#container",
      orientation: "bottom",
      onSelect: function (value, date) {
         alert('The chosen date is ' + value);
      }
   }).focus();
});

