Schemas = {};
Booking = new Mongo.Collection('booking');
Schemas.Booking = new SimpleSchema({
   customerName:{
       type:String,
       optional:false,
       label:"Customer Name"
   } ,
    customerPhoneNumber:{
        type:String,
        optional:false,
        label:"Customer Phone Number"
    }
});




Booking.attachSchema(Schemas.Booking);
