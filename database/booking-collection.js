Schemas = {};
Booking = new Mongo.Collection('booking');
Schemas.Booking = new SimpleSchema({
   booked_by:{
       type:String,
       optional:false,
       label:"Booked By"
   } ,
    booked_at:{
        type:String,
        optional:false,
        label:"Booking Date"
    },
    destination:{
        type: String,
        optional:false,
        label:"Destination"
    }
});




Booking.attachSchema(Schemas.Booking);
