Schemas = {};
Booking = new Mongo.Collection('booking');
Schemas.Booking = new SimpleSchema({
   customerName:{
       type:String,
       optional:true,
       label:"Customer Name"
   } ,
    customerEmailId:{
        type:String,
        optional:false,
        label:"Customer Email Id"
    },
    customerMesage:{
        type:String,
        optional:false,
        label:"Customer Message"
    }
});




Booking.attachSchema(Schemas.Booking);
