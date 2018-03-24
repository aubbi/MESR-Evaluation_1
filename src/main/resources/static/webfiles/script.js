 $(function () {
 
    $('#example1').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : false,
      'autoWidth'   : true
    })
	 $('#example2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : true
    })
	 $('.datepicker').datepicker({
      autoclose: true
    })
  })
  
   $(function () {
   //Date for the calendar events (dummy data)
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()
    $('#calendar').fullCalendar({
      header    : {
        left  : 'prev,next today',
        center: 'title',
		right:''
       
      },
      buttonText: {
        today: "aujourd'hui ",
       
       
      },
      //Random default events
      events    : [
        {
          title          : 'Dépot',
          start          : new Date(y, m, 1),
          backgroundColor: '#f56954', //red
          borderColor    : '#f56954' //red
        },
        {
          title          : 'Evaluation',
          start          : new Date(y, m, d - 5),
          end            : new Date(y, m, d - 2),
          backgroundColor: '#f39c12', //yellow
          borderColor    : '#f39c12' //yellow
        },
        {
          title          : 'Resultat',
          start          : new Date(y, m+1, d, 10, 30),
          allDay         : false,
          backgroundColor: '#0073b7', //Blue
          borderColor    : '#0073b7' //Blue
        }
      ],
      editable  : false,
      droppable : false, // this allows things to be dropped onto the calendar !!!
      drop      : function (date, allDay) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject')

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject)

        // assign it the date that was reported
        copiedEventObject.start           = date
        copiedEventObject.allDay          = allDay
        copiedEventObject.backgroundColor = $(this).css('background-color')
        copiedEventObject.borderColor     = $(this).css('border-color')

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove()
        }

      }
    })

 })
 $( document ).ready(function() {


     $("#responsabilité").click(function(){
         var resp=$( "#responsabilité" ).val();
         var autre = document.getElementById("autre");
         console.log(resp);
         if(resp==0){

             autre.style.display = "block";
         }else{
             autre.style.display = "none";
         }
     })


     $("#add1").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true' > </td><td contenteditable='true'> </td><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#one" );


     })

     $("#supp1").click(function(){

         $("#one").prev('.ligne').remove();


     })

     $("#add2").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true' > </td><td contenteditable='true'> </td><td contenteditable='true'> </td> <td contenteditable='true' colspan='2' >  </td> </tr> " ).insertBefore( "#second" );


     })

     $("#supp2").click(function(){

         $("#second").prev('.ligne').remove();


     })

     $("#add3").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'><input type='text' class='form-control pull-right datepicker'  style='border:none;'>  </td> </tr> " ).insertBefore( "#three" );


     })

     $("#supp3").click(function(){

         $("#three").prev('.ligne').remove();


     })

     $("#add4").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'> <input type='text' class='form-control pull-right datepicker'  style='border:none;'>  </td> </tr> " ).insertBefore( "#four" );


     })

     $("#supp4").click(function(){

         $("#four").prev('.ligne').remove();


     })

     $("#add5").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'><input type='text' class='form-control pull-right datepicker'  style='border:none;'>  </td> </tr> " ).insertBefore( "#five" );


     })

     $("#supp5").click(function(){

         $("#five").prev('.ligne').remove();


     })
     $("#add6").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'></td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#six" );


     })

     $("#supp6").click(function(){

         $("#six").prev('.ligne').remove();


     })
     $("#add7").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'></td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#seven" );


     })

     $("#supp7").click(function(){

         $("#seven").prev('.ligne').remove();


     })

     $("#add8").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'></td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#eight" );


     })

     $("#supp8").click(function(){

         $("#eight").prev('.ligne').remove();


     })
     $("#add9").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'></td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#nine" );


     })

     $("#supp9").click(function(){

         $("#nine").prev('.ligne').remove();


     })


     $("#add10").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#ten" );


     })

     $("#supp10").click(function(){

         $("#ten").prev('.ligne').remove();


     })

     $("#add11").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'> </td><td contenteditable='true'> </td> </tr> " ).insertBefore( "#eleven" );


     })

     $("#supp11").click(function(){

         $("#eleven").prev('.ligne').remove();


     })

     $("#add12").click(function(){

         $( " <tr class='ligne' ><td contenteditable='true'> </td> <td contenteditable='true'> </td><td contenteditable='true'> </td></tr> " ).insertBefore( "#twelve" );


     })

     $("#supp12").click(function(){

         $("#twelve").prev('.ligne').remove();


     })











 });