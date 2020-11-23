// Set up datepicker toggle functionality

$("#datepicker").hide();

$("#btn").click(function(){
    
    $("#datepicker").toggle();
}); 

$("#datepicker").datepicker({ 
      onSelect: function(value, date) { 
         alert('The chosen date is ' + value); 
         $("#datepicker").hide(); 
      } 
});