/**
 * Created by srini on 22/2/15.
 */
Template.bookingTemplate.events({
   'click #bookCustomer':function(e,templ){
       e.preventDefault();


           var name = $("#customerName").val();
          var emailId = $("#customerEmail").val();
            var message = $("#customerMessage").val();

           // alert(phoneNumber);

          if(name.length <= 0){
              alert("Please enter your name");
              return
          }
          if(emailId <= 0){

              alert("Please enter your Email Id, So that we can reply you back");
              return
          }
        if(message<=0){
            alert("Please enter your message Or Enter your feedback");
            return
        }
       Booking.insert({customerName:name,customerEmailId:emailId,customerMessage:message});
       alert("Thanks for registering. We will contact you soon");
       $('.myContactModal').modal('hide');


   }
});