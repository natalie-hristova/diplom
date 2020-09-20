// Get the modal
var modal = document.getElementById("destinationModal");

$(function(){

    $('.js-modal-toggler').on('click', function(e){        
        if ($('#destinationModal').hasClass('closed')){
                $('#destinationModal').removeClass('closed')
                $('#destinationModal').addClass('open')
        } else {
            $('#destinationModal').removeClass('open')
            $('#destinationModal').addClass('closed')
        }

$.getJSON("../json/"+$(this).data('location')+".json", function(data){
    document.getElementById("demo").innerHTML="";
            var locations = data;
            locations.forEach(myFunction);

function myFunction(item) {
  document.getElementById("demo").innerHTML += item.name + "<img src= assets/img/" + item.photo + " width=100 height=60>"+ "<br>"; 
}
           
        })

        $('.js-modal--location').text(
        //  $(this).data('location');
            )
    })

    $('.js-close-modal').on('click', function(e){
        $('#destinationModal').removeClass('open')
        $('#destinationModal').addClass('closed')
    })

})