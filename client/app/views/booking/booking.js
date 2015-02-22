/**
 * Created by srini on 22/2/15.
 */
Template.bookingTemplate.events({
   'click #bookCustomer':function(e,templ){
       e.preventDefault();


           var name = $("#customerName").val();
          var phoneNumber = Number($("#customerPhoneNumber").val());

           // alert(phoneNumber);

          if(name.length <= 0){
              alert("Please enter your name");
              return
          }
          if(phoneNumber == 0){

              alert("Please enter your phone number");
              return
          }
       Booking.insert({customerName:name,customerPhoneNumber:phoneNumber});
       alert("Thanks for registering. We will contact you soon");
       $('.myContactModal').modal('hide');


   }
});