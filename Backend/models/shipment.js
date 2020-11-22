const mongoose=require('mongoose');
//const {Schema }= mongoose;

// const shipmentSchema= new mongoose.Schema({
    // awbno:{
    //     type:Number,
    //     required:true,
    // },
    // transporter:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    // source:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    // destination:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    // brand:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    // startdate:{
    //     type:Date,
    //     require:true,
    // },
    // etd:{
    //     type:Date,
    //     require:true
    // },
    // status:{
    //     type:String,
    //     require:true,
    //     trim:true
    // }

     
        
    const ShipmentDetail= mongoose.model("ShipmentDetail",{id:{ 
        type:Number
    },
    awbno: {
        type:String,
        require:true
    },
    carrier:{
        type:String,
        required:true,
        trim:true
    },
    pickup_date:{
        type:Date
    } ,
    current_status: {
        type:String,
        trim:true
    },
    current_status_code: {
        type:String},
    order_data: {
        type:Date
    },
    recipient: {
        type:String
    },
    extra_fields: {
        expected_delivery_date: {
            type:String
        }
    },
    from: {
        type:String
    },
    to:{
        type:String
    },
    time:{
        type:String
    } ,
    scan: [
        {
            time:{
                type:String
            } ,
            location:{
                type:String
            },
            status_detail:{
                type:String
            } 
        }
    ],
    tracking_url: {
        type:String
    },
    createdAt:{
        type:String
    }



});

// ShipmentDetail.insertMany(
//     [
//     {
//         "_id": "5d309ea2048c0a3321692de9",
//         "awbno": "68816235",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Out for Delivery",
//         "current_status_code": "OOD",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-18 02:13:57",
//         "scan": [
//             {
//                 "time": "2019-07-18 02:13:57",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 23:02:24",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-17 03:59:19",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 18:49:46",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 04:14:20",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759772/68816235",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de8",
//         "awbno": "68816237",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SURAJPUR",
//         "time": "2019-07-15 09:16:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:16:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759785/68816237",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de7",
//         "awbno": "68816240",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-16 02:02:47",
//         "scan": [
//             {
//                 "time": "2019-07-16 02:02:47",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 14:16:35",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 03:38:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759791/68816240",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de6",
//         "awbno": "68816241",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "DHARMATALA",
//         "time": "2019-07-15 10:27:22",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:27:22",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759795/68816241",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de5",
//         "awbno": "258134612",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "D",
//         "extra_fields": {
//             "destination_pincode": "140307",
//             "update_by": "MOHALI",
//             "quantity": "15",
//             "weight": "375",
//             "expected_delivery_date": "2019-07-19 00:00:00"
//         },
//         "from": "XSKR (SOUKYA ROAD)",
//         "to": "XMHL(MOHALI)",
//         "time": "2019-07-17 10:02:00",
//         "scan": [
//             {
//                 "time": "2019-07-17 10:02:00",
//                 "location": "XAMH (AMBALA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 14:22:00",
//                 "location": "XNLH (NALMANGLA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:04:00",
//                 "location": "XSKR (SOUKYA ROAD)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759742/258134612",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de4",
//         "awbno": "68816232",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "RITHALA",
//         "time": "2019-07-17 07:04:07",
//         "scan": [
//             {
//                 "time": "2019-07-17 07:04:07",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759768/68816232",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de3",
//         "awbno": "68816235",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Out for Delivery",
//         "current_status_code": "OOD",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-18 02:13:57",
//         "scan": [
//             {
//                 "time": "2019-07-18 02:13:57",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 23:02:24",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-17 03:59:19",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 18:49:46",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 04:14:20",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759772/68816235",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de2",
//         "awbno": "68816236",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NORTH 24 PGS",
//         "time": "2019-07-15 08:44:19",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:44:19",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759775/68816236",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de1",
//         "awbno": "68816240",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-16 02:02:47",
//         "scan": [
//             {
//                 "time": "2019-07-16 02:02:47",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 14:16:35",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 03:38:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759791/68816240",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692de0",
//         "awbno": "68816237",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SURAJPUR",
//         "time": "2019-07-15 09:16:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:16:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759785/68816237",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692ddf",
//         "awbno": "68815044",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GURGAON",
//         "time": "2019-07-17 09:24:46",
//         "scan": [
//             {
//                 "time": "2019-07-17 09:24:46",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-16 20:38:00",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-16 10:19:05",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-14 07:51:34",
//                 "location": "Consignment Arrived at GURGAON",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 04:06:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 22:21:27",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 06:59:10",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759823/68815044",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dde",
//         "awbno": "68815115",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KOLKATA",
//         "time": "2019-07-15 08:31:47",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:31:47",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 08:14:48",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759825/68815115",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692ddd",
//         "awbno": "68815020",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "RAIPUR",
//         "time": "2019-07-13 10:27:23",
//         "scan": [
//             {
//                 "time": "2019-07-13 10:27:23",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 04:57:15",
//                 "location": "Consignment Arrived at RAIPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Consignment Delivered :- 13-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-11 12:58:03",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759827/68815020",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692ddc",
//         "awbno": "68815043",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SHAKARPUR",
//         "time": "2019-07-15 10:11:48",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:11:48",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 07:41:52",
//                 "location": "Consignment Arrived at DELHI EAST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:48:17",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759829/68815043",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692ddb",
//         "awbno": "68815052",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GHAZIABAD",
//         "time": "2019-07-15 10:36:59",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:36:59",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 02:46:23",
//                 "location": "Consignment Arrived at GHAZIABAD",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 23:04:01",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759831/68815052",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dda",
//         "awbno": "68815053",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KOLKATA",
//         "time": "2019-07-15 11:51:19",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:51:19",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759834/68815053",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd9",
//         "awbno": "68815055",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NAYAGANJ",
//         "time": "2019-07-16 09:15:28",
//         "scan": [
//             {
//                 "time": "2019-07-16 09:15:28",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:49:35",
//                 "location": "Consignment Arrived at KANPUR CITY",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 07:25:26",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:19:48",
//                 "location": "Consignment Arrived at KANPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 16:20:51",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759837/68815055",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd8",
//         "awbno": "68815094",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-15 09:33:33",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:33:33",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:40:27",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759841/68815094",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd7",
//         "awbno": "68815114",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KOLKATA",
//         "time": "2019-07-16 09:26:32",
//         "scan": [
//             {
//                 "time": "2019-07-16 09:26:32",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 08:01:53",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 10:27:22",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759839/68815114",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd6",
//         "awbno": "68815098",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GHAZIABAD",
//         "time": "2019-07-15 13:22:34",
//         "scan": [
//             {
//                 "time": "2019-07-15 13:22:34",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 02:46:23",
//                 "location": "Consignment Arrived at GHAZIABAD",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 23:04:01",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759845/68815098",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd5",
//         "awbno": "258136443",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "D",
//         "extra_fields": {
//             "destination_pincode": "160063",
//             "update_by": "MOHALI",
//             "quantity": "1",
//             "weight": "25",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XSKR (SOUKYA ROAD)",
//         "to": "XMHL(MOHALI)",
//         "time": "2019-07-17 09:51:00",
//         "scan": [
//             {
//                 "time": "2019-07-17 09:51:00",
//                 "location": "XAMH (AMBALA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 14:22:00",
//                 "location": "XNLH (NALMANGLA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:04:00",
//                 "location": "XSKR (SOUKYA ROAD)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759847/258136443",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd4",
//         "awbno": "68815103",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GREATER NOIDA",
//         "time": "2019-07-15 10:55:55",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:55:55",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759846/68815103",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd3",
//         "awbno": "68815093",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "FARIDABAD",
//         "time": "2019-07-15 10:59:51",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:59:51",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 23:10:23",
//                 "location": "Consignment Arrived at FARIDABAD",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 20:17:30",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 14:51:48",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 14:14:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759849/68815093",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd2",
//         "awbno": "68815091",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "DELHI",
//         "time": "2019-07-15 09:33:33",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:33:33",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:40:27",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759848/68815091",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd1",
//         "awbno": "68815152",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SERAMPORE",
//         "time": "2019-07-16 09:45:25",
//         "scan": [
//             {
//                 "time": "2019-07-16 09:45:25",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 22:06:57",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 16:57:01",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759850/68815152",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dd0",
//         "awbno": "68815154",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GANGANAGAR",
//         "time": "2019-07-15 13:52:47",
//         "scan": [
//             {
//                 "time": "2019-07-15 13:52:47",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 11:44:24",
//                 "location": "Consignment Arrived at SRI GANGANAGAR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 19:58:28",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 16:40:36",
//                 "location": "Consignment Arrived at JAIPUR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:31:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759851/68815154",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dcf",
//         "awbno": "68815160",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Out for Delivery",
//         "current_status_code": "OOD",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "UDHAMPUR",
//         "time": "2019-07-18 15:54:46",
//         "scan": [
//             {
//                 "time": "2019-07-18 15:54:46",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-18 11:58:29",
//                 "location": "Consignment Arrived at UDHAMPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-17 18:19:05",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 01:04:42",
//                 "location": "Consignment Arrived at JAMMU",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 20:50:17",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 06:35:42",
//                 "location": "Consignment Arrived at AMBALA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 12:50:17",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759853/68815160",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dce",
//         "awbno": "68815159",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "MIRZAPUR",
//         "time": "2019-07-17 14:27:04",
//         "scan": [
//             {
//                 "time": "2019-07-17 14:27:04",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 16:53:00",
//                 "location": "Consignment Arrived at MIRZAPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 09:25:41",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 02:59:41",
//                 "location": "Consignment Arrived at VARANASI",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 07:56:20",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 21:49:05",
//                 "location": "Consignment Arrived at DHULE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 09:22:47",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759852/68815159",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dcd",
//         "awbno": "68815079",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Undelivered",
//         "current_status_code": "UND",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "ELECTRONIC CITY (NDA)",
//         "time": "2019-07-16 14:02:49",
//         "scan": [
//             {
//                 "time": "2019-07-16 14:02:49",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-16 09:44:00",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759854/68815079",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dcc",
//         "awbno": "68815054",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NORTH 24 PGS",
//         "time": "2019-07-15 10:48:26",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:48:26",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 08:14:48",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759856/68815054",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dcb",
//         "awbno": "68815046",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "AMRAVATI",
//         "time": "2019-07-15 13:55:44",
//         "scan": [
//             {
//                 "time": "2019-07-15 13:55:44",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 17:06:48",
//                 "location": "Consignment Arrived at AMRAVATI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 03:57:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 21:49:05",
//                 "location": "Consignment Arrived at DHULE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 09:22:47",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759855/68815046",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dca",
//         "awbno": "68815072",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "ELECTRONIC CITY (NDA)",
//         "time": "2019-07-15 17:48:49",
//         "scan": [
//             {
//                 "time": "2019-07-15 17:48:49",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 08:05:09",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759857/68815072",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc9",
//         "awbno": "68815145",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BATHNAHA",
//         "time": "2019-07-17 14:44:04",
//         "scan": [
//             {
//                 "time": "2019-07-17 14:44:04",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 18:51:12",
//                 "location": "Consignment Arrived at MUZAFFARPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 01:17:52",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 15:16:33",
//                 "location": "Consignment Arrived at PATNA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 10:59:35",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759858/68815145",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc8",
//         "awbno": "68815138",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "JODHPUR CITY",
//         "time": "2019-07-16 10:39:21",
//         "scan": [
//             {
//                 "time": "2019-07-16 10:39:21",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 19:12:54",
//                 "location": "Consignment Arrived at JODHPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 08:54:16",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 21:49:05",
//                 "location": "Consignment Arrived at DHULE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 09:22:47",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759859/68815138",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc7",
//         "awbno": "68815028",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NORTH 24 PGS",
//         "time": "2019-07-15 11:28:02",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:28:02",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 08:14:48",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759861/68815028",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc6",
//         "awbno": "68815077",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "DELHI",
//         "time": "2019-07-15 10:12:47",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:12:47",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 07:43:57",
//                 "location": "Consignment Arrived at DELHI NORTH",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 04:52:33",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759860/68815077",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc5",
//         "awbno": "68815076",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "UDAIPUR",
//         "time": "2019-07-16 11:03:03",
//         "scan": [
//             {
//                 "time": "2019-07-16 11:03:03",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 13:52:47",
//                 "location": "Consignment Arrived at UDAIPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 00:26:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 16:40:36",
//                 "location": "Consignment Arrived at JAIPUR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:31:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759863/68815076",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc4",
//         "awbno": "68815029",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "HOWRAH",
//         "time": "2019-07-15 09:37:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:37:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759862/68815029",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc3",
//         "awbno": "68815035",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "CHANDIGARH",
//         "time": "2019-07-15 09:06:50",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:06:50",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 07:26:32",
//                 "location": "Consignment Arrived at CHANDIGARH",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 04:00:37",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 19:14:09",
//                 "location": "Consignment Arrived at AMBALA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 11:15:23",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759864/68815035",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc2",
//         "awbno": "68815040",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GURGAON",
//         "time": "2019-07-16 07:06:00",
//         "scan": [
//             {
//                 "time": "2019-07-16 07:06:00",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 07:51:34",
//                 "location": "Consignment Arrived at GURGAON",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 04:06:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 22:21:26",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 06:59:10",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759865/68815040",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc1",
//         "awbno": "68815117",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BHILWARA CITY",
//         "time": "2019-07-16 12:14:35",
//         "scan": [
//             {
//                 "time": "2019-07-16 12:14:35",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 12:18:15",
//                 "location": "Consignment Arrived at BHILWARA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 03:44:23",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 16:40:36",
//                 "location": "Consignment Arrived at JAIPUR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:31:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759866/68815117",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dc0",
//         "awbno": "68815120",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BARAKPUR",
//         "time": "2019-07-15 10:33:44",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:33:44",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 08:14:48",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759867/68815120",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dbf",
//         "awbno": "68815105",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "MEERUT CANTT",
//         "time": "2019-07-15 14:34:38",
//         "scan": [
//             {
//                 "time": "2019-07-15 14:34:38",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:01:31",
//                 "location": "Consignment Arrived at MEERUT",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 04:04:22",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759868/68815105",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dbe",
//         "awbno": "68815164",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SODPUR",
//         "time": "2019-07-15 10:33:44",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:33:44",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 08:14:48",
//                 "location": "Consignment Arrived at KOLKATA CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759869/68815164",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dbd",
//         "awbno": "68815166",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "ALIPUR",
//         "time": "2019-07-15 09:13:36",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:13:36",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 07:22:38",
//                 "location": "Consignment Arrived at KOLKATA SOUTH",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 04:52:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:05",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759870/68815166",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dbc",
//         "awbno": "68815032",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "ROSHNABAD",
//         "time": "2019-07-16 09:34:36",
//         "scan": [
//             {
//                 "time": "2019-07-16 09:34:36",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 16:02:42",
//                 "location": "Consignment Arrived at HARIDWAR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 01:11:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 19:14:09",
//                 "location": "Consignment Arrived at AMBALA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 11:15:23",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759871/68815032",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dbb",
//         "awbno": "68815088",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "JHARSUGUDA",
//         "time": "2019-07-15 17:59:50",
//         "scan": [
//             {
//                 "time": "2019-07-15 17:59:50",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 15:56:45",
//                 "location": "Consignment Arrived at JHARSUGUDA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 18:55:54",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 05:26:41",
//                 "location": "Consignment Arrived at BHUBANESHWAR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 08:57:07",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 01:15:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759872/68815088",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dba",
//         "awbno": "68815104",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "JAIGAON",
//         "time": "2019-07-17 17:28:46",
//         "scan": [
//             {
//                 "time": "2019-07-17 17:28:46",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 16:50:33",
//                 "location": "Consignment Arrived at JAIGAON",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-17 04:03:15",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-16 01:51:42",
//                 "location": "Consignment Arrived at SILIGURI",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 20:54:56",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 17:00:52",
//                 "location": "Consignment Arrived at NAGPUR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 10:51:12",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759874/68815104",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db9",
//         "awbno": "68815049",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-15 09:33:33",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:33:33",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:40:27",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759873/68815049",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db8",
//         "awbno": "68815133",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-15 08:21:09",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:21:09",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:40:27",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:28",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759876/68815133",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db7",
//         "awbno": "258136410",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "In Transit",
//         "current_status_code": "INT",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "destination_pincode": "145001",
//             "quantity": "2",
//             "weight": "50",
//             "expected_delivery_date": "2019-07-17 00:00:00"
//         },
//         "from": "XSKR (SOUKYA ROAD)",
//         "to": "XPTK(PATHANKOT)",
//         "time": "2019-07-17 17:34:00",
//         "scan": [
//             {
//                 "time": "2019-07-17 17:34:00",
//                 "location": "XAMH (AMBALA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 20:19:00",
//                 "location": "XNLH (NALMANGLA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 19:52:00",
//                 "location": "XSKR (SOUKYA ROAD)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759875/258136410",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db6",
//         "awbno": "68815141",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "SURAJPUR",
//         "time": "2019-07-15 10:55:55",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:55:55",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759740/68815141",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db5",
//         "awbno": "68815150",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "MANESAR",
//         "time": "2019-07-15 09:44:25",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:44:25",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 13:24:20",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 10:38:31",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 07:51:34",
//                 "location": "Consignment Arrived at GURGAON",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 04:06:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 22:21:27",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 06:59:10",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759878/68815150",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db4",
//         "awbno": "68815142",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "In Transit",
//         "current_status_code": "INT",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BARPARA",
//         "time": "2019-07-17 16:11:08",
//         "scan": [
//             {
//                 "time": "2019-07-17 16:11:08",
//                 "location": "Consignment Arrived at BONGAIGAON",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-17 03:48:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 02:17:37",
//                 "location": "Consignment Arrived at GUWAHATI",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 09:05:01",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759877/68815142",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db3",
//         "awbno": "68815036",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GHAZIABAD",
//         "time": "2019-07-15 10:12:20",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:12:20",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 02:46:23",
//                 "location": "Consignment Arrived at GHAZIABAD",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 23:04:01",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759880/68815036",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db2",
//         "awbno": "68815033",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KOLKATA",
//         "time": "2019-07-15 09:30:37",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:30:37",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 07:22:38",
//                 "location": "Consignment Arrived at KOLKATA SOUTH",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 04:52:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759879/68815033",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db1",
//         "awbno": "68815147",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BIJNOR",
//         "time": "2019-07-15 07:57:21",
//         "scan": [
//             {
//                 "time": "2019-07-15 07:57:21",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 12:58:22",
//                 "location": "Consignment Arrived at GAJRAULA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 06:05:46",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 16:58:38",
//                 "location": "Consignment Arrived at UP WEST HUB",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 05:02:25",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:17:39",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759882/68815147",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692db0",
//         "awbno": "68815065",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "DHARMATALA",
//         "time": "2019-07-15 10:27:22",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:27:22",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759881/68815065",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692daf",
//         "awbno": "68815163",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "MAU",
//         "time": "2019-07-15 11:16:30",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:16:30",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:01:34",
//                 "location": "Consignment Arrived at Maunath Bhanjan",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 03:02:12",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 00:19:48",
//                 "location": "Consignment Arrived at KANPUR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 16:20:51",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759883/68815163",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dae",
//         "awbno": "68815097",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "PANIPAT CITY",
//         "time": "2019-07-15 10:00:51",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:00:51",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 08:50:51",
//                 "location": "Consignment Arrived at PANIPAT",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 04:25:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 06:35:42",
//                 "location": "Consignment Arrived at AMBALA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 12:50:17",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759885/68815097",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dad",
//         "awbno": "258136421",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "D",
//         "extra_fields": {
//             "destination_pincode": "160056",
//             "update_by": "MOHALI",
//             "quantity": "1",
//             "weight": "25",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XSKR (SOUKYA ROAD)",
//         "to": "XMHL(MOHALI)",
//         "time": "2019-07-17 09:51:00",
//         "scan": [
//             {
//                 "time": "2019-07-17 09:51:00",
//                 "location": "XAMH (AMBALA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-16 14:22:00",
//                 "location": "XNLH (NALMANGLA-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 23:04:00",
//                 "location": "XSKR (SOUKYA ROAD)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759884/258136421",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dac",
//         "awbno": "68815721",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "JAIPUR",
//         "time": "2019-07-15 10:50:22",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:50:22",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 07:27:51",
//                 "location": "Consignment Arrived at SANGANER",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 04:54:56",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:40:36",
//                 "location": "Consignment Arrived at JAIPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-12 05:31:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 23:12:23",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759886/68815721",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692dab",
//         "awbno": "68816268",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NAGPUR CITY",
//         "time": "2019-07-15 11:13:36",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:13:36",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 09:41:22",
//                 "location": "Consignment Arrived at NAGPUR CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 07:57:52",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:43:14",
//                 "location": "Consignment Arrived at NAGPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 10:47:28",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759887/68816268",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692daa",
//         "awbno": "68816276",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "In Transit",
//         "current_status_code": "INT",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "INDORE",
//         "time": "2019-07-13 09:20:27",
//         "scan": [
//             {
//                 "time": "2019-07-13 09:20:27",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759888/68816276",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da9",
//         "awbno": "68816268",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NAGPUR CITY",
//         "time": "2019-07-15 11:13:36",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:13:36",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 09:41:22",
//                 "location": "Consignment Arrived at NAGPUR CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 07:57:52",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:43:14",
//                 "location": "Consignment Arrived at NAGPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 10:47:28",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759887/68816268",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da8",
//         "awbno": "68816276",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "In Transit",
//         "current_status_code": "INT",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "INDORE",
//         "time": "2019-07-13 09:20:27",
//         "scan": [
//             {
//                 "time": "2019-07-13 09:20:27",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759888/68816276",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da7",
//         "awbno": "68816276",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "In Transit",
//         "current_status_code": "INT",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "INDORE",
//         "time": "2019-07-13 09:20:27",
//         "scan": [
//             {
//                 "time": "2019-07-13 09:20:27",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759888/68816276",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da6",
//         "awbno": "68816268",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NAGPUR CITY",
//         "time": "2019-07-15 11:13:36",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:13:36",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 09:41:22",
//                 "location": "Consignment Arrived at NAGPUR CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 07:57:52",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:43:14",
//                 "location": "Consignment Arrived at NAGPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 10:47:28",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759887/68816268",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da5",
//         "awbno": "67704002",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "RAIPUR",
//         "time": "2019-07-15 09:46:48",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:46:48",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 16:41:32",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 10:27:23",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 04:57:14",
//                 "location": "Consignment Arrived at RAIPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 12:58:03",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759890/67704002",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da4",
//         "awbno": "68816339",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-12 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NAGPUR",
//         "time": "2019-07-15 11:13:03",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:13:03",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 09:41:22",
//                 "location": "Consignment Arrived at NAGPUR CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 07:57:52",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:43:14",
//                 "location": "Consignment Arrived at NAGPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 10:47:28",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759744/68816339",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da3",
//         "awbno": "67704011",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KOLKATA",
//         "time": "2019-07-15 10:27:22",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:27:22",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759892/67704011",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da2",
//         "awbno": "67704005",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-15 11:05:52",
//         "scan": [
//             {
//                 "time": "2019-07-15 11:05:52",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 09:40:26",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:27",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759891/67704005",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da1",
//         "awbno": "67704997",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "HOWRAH",
//         "time": "2019-07-15 08:58:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:58:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759893/67704997",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692da0",
//         "awbno": "67704010",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Undelivered",
//         "current_status_code": "UND",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NEW DELHI",
//         "time": "2019-07-15 14:55:11",
//         "scan": [
//             {
//                 "time": "2019-07-15 14:55:11",
//                 "location": "Waybill Undelivered",
//                 "status_detail": "UN-DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 08:21:09",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-14 09:40:26",
//                 "location": "Consignment Arrived at DELHI WEST",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 03:52:50",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 20:41:27",
//                 "location": "Consignment Arrived at DELHI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 07:01:53",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759895/67704010",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9f",
//         "awbno": "67704007",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "NORTH 24 PGS",
//         "time": "2019-07-15 08:44:19",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:44:19",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 00:55:04",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-11 10:48:06",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:22:16",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759894/67704007",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9e",
//         "awbno": "67704031",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-12 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GUNTUR",
//         "time": "2019-07-13 15:35:44",
//         "scan": [
//             {
//                 "time": "2019-07-13 15:35:44",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 10:59:28",
//                 "location": "Consignment Arrived at GUNTUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 09:31:47",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Consignment Delivered :- 13-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-12 23:49:00",
//                 "location": "Consignment Arrived at VIJAYAWADA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 07:36:18",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             },
//             {
//                 "time": "2019-07-11 22:21:52",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759896/67704031",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9d",
//         "awbno": "67704031",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-12 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "GUNTUR",
//         "time": "2019-07-13 15:35:44",
//         "scan": [
//             {
//                 "time": "2019-07-13 15:35:44",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-13 10:59:28",
//                 "location": "Consignment Arrived at GUNTUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 09:31:47",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Consignment Delivered :- 13-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-12 23:49:00",
//                 "location": "Consignment Arrived at VIJAYAWADA",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 07:36:18",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             },
//             {
//                 "time": "2019-07-11 22:21:52",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759896/67704031",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9c",
//         "awbno": "408884582",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-09 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "DLY",
//         "extra_fields": {
//             "destination_pincode": "440002",
//             "update_by": "VARDHAMAN(NAGPUR)",
//             "quantity": "1",
//             "weight": "15",
//             "expected_delivery_date": "2019-07-15 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XVDM(VARDHAMAN)",
//         "time": "2019-07-13 20:30:00",
//         "scan": [
//             {
//                 "time": "2019-07-13 20:30:00",
//                 "location": "XRWH (REWARI-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 02:24:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759897/408884582",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9b",
//         "awbno": "408884604",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-09 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "FL",
//         "extra_fields": {
//             "destination_pincode": "401104",
//             "update_by": "MIRA(MUMBAI)",
//             "quantity": "1",
//             "weight": "15",
//             "expected_delivery_date": "2019-07-15 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XMIR(MIRA)",
//         "time": "2019-07-13 11:37:00",
//         "scan": [
//             {
//                 "time": "2019-07-13 11:37:00",
//                 "location": "XMBH (TALOJA-MUMBAI-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 14:31:00",
//                 "location": "XRWH (REWARI-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 02:24:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759899/408884604",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d9a",
//         "awbno": "408887135",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "R",
//         "extra_fields": {
//             "destination_pincode": "201301",
//             "update_by": "NOIDA-MAHARSHINAGAR(NOIDA)",
//             "quantity": "2",
//             "weight": "30",
//             "expected_delivery_date": "2019-07-15 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XNDM(NOIDA-MAHARSHINAGAR)",
//         "time": "2019-07-13 06:23:00",
//         "scan": [
//             {
//                 "time": "2019-07-13 06:23:00",
//                 "location": "XNDH (NOIDA HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 17:42:00",
//                 "location": "XRWH (REWARI-HUB)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 23:05:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759898/408887135",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d99",
//         "awbno": "408886133",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "OK",
//         "extra_fields": {
//             "destination_pincode": "110085",
//             "update_by": "SANJAY GANDHI TRANSPORT N(NEW_DELHI)",
//             "quantity": "1",
//             "weight": "15",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XSGT(SANJAY GANDHI TRANSPORT N)",
//         "time": "2019-07-14 07:56:00",
//         "scan": [
//             {
//                 "time": "2019-07-14 07:56:00",
//                 "location": "XDEL (DELHI-AIR)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 23:14:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759900/408886133",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d98",
//         "current_status": "No Information Yet",
//         "current_status_code": "NFI",
//         "carrier": "TCI Express",
//         "from": null,
//         "to": null,
//         "customer_name": "FUTURE LIFESTYLE",
//         "order_data": "",
//         "pickup_date": null,
//         "time": null,
//         "awbno": "37012723",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d97",
//         "awbno": "408886192",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "OK",
//         "extra_fields": {
//             "destination_pincode": "110085",
//             "update_by": "SANJAY GANDHI TRANSPORT N(NEW_DELHI)",
//             "quantity": "1",
//             "weight": "15",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XSGT(SANJAY GANDHI TRANSPORT N)",
//         "time": "2019-07-14 07:56:00",
//         "scan": [
//             {
//                 "time": "2019-07-14 07:56:00",
//                 "location": "XDEL (DELHI-AIR)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 23:14:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759902/408886192",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d96",
//         "current_status": "No Information Yet",
//         "current_status_code": "NFI",
//         "carrier": "TCI Express",
//         "from": null,
//         "to": null,
//         "customer_name": "FUTURE LIFESTYLE",
//         "order_data": "",
//         "pickup_date": null,
//         "time": null,
//         "awbno": "37012723",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d95",
//         "awbno": "408886203",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "OK",
//         "extra_fields": {
//             "destination_pincode": "110037",
//             "update_by": "MAHIPALPUR(NEW_DELHI)",
//             "quantity": "2",
//             "weight": "30",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XMPL(MAHIPALPUR)",
//         "time": "2019-07-14 08:32:00",
//         "scan": [
//             {
//                 "time": "2019-07-14 08:32:00",
//                 "location": "XDEL (DELHI-AIR)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 23:14:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759903/408886203",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d94",
//         "awbno": "408886203",
//         "carrier": "TCI Express",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "OK",
//         "extra_fields": {
//             "destination_pincode": "110037",
//             "update_by": "MAHIPALPUR(NEW_DELHI)",
//             "quantity": "2",
//             "weight": "30",
//             "expected_delivery_date": "2019-07-16 00:00:00"
//         },
//         "from": "XBPG (BILASPUR GURGAON)",
//         "to": "XMPL(MAHIPALPUR)",
//         "time": "2019-07-14 08:32:00",
//         "scan": [
//             {
//                 "time": "2019-07-14 08:32:00",
//                 "location": "XDEL (DELHI-AIR)",
//                 "status_detail": "IN TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 23:14:00",
//                 "location": "XBPG (BILASPUR GURGAON)",
//                 "status_detail": "IN TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759903/408886203",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d93",
//         "current_status": "No Information Yet",
//         "current_status_code": "NFI",
//         "carrier": "TCI Express",
//         "from": null,
//         "to": null,
//         "customer_name": "FUTURE LIFESTYLE",
//         "order_data": "",
//         "pickup_date": null,
//         "time": null,
//         "awbno": "37012726",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d92",
//         "awbno": "68815198",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KARIMNAGAR",
//         "time": "2019-07-17 10:29:07",
//         "scan": [
//             {
//                 "time": "2019-07-17 10:29:07",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-17 00:00:00",
//                 "location": "Consignment Delivered :- 17-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 13:15:04",
//                 "location": "Consignment Arrived at RAMAGUNDAM",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 01:58:37",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 02:58:14",
//                 "location": "Consignment Arrived at HYDERABAD",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 07:05:33",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759905/68815198",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d91",
//         "awbno": "68815195",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "INDORE",
//         "time": "2019-07-15 10:29:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:29:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 12:37:03",
//                 "location": "Consignment Arrived at INDORE",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 00:57:52",
//                 "location": "Consignment Arrived at BANGALORE CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             },
//             {
//                 "time": "2019-07-12 23:41:44",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759906/68815195",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d90",
//         "awbno": "68816245",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "TAURU",
//         "time": "2019-07-15 08:23:33",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:23:33",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-13 22:21:27",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 06:59:10",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 01:15:25",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759907/68816245",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8f",
//         "awbno": "68816246",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "TAURU",
//         "time": "2019-07-15 08:23:33",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:23:33",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 14:51:48",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 14:14:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 03:05:26",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759908/68816246",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8e",
//         "awbno": "68815195",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "INDORE",
//         "time": "2019-07-15 10:29:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 10:29:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 12:37:03",
//                 "location": "Consignment Arrived at INDORE",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 00:57:52",
//                 "location": "Consignment Arrived at BANGALORE CITY",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             },
//             {
//                 "time": "2019-07-12 23:41:44",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759906/68815195",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8d",
//         "awbno": "68815183",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "JAIPUR",
//         "time": "2019-07-15 08:58:39",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:58:39",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 16:40:36",
//                 "location": "Consignment Arrived at JAIPUR",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-12 05:31:40",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 23:12:23",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759909/68815183",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8c",
//         "awbno": "68815189",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BHOPAL",
//         "time": "2019-07-15 09:14:24",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:14:24",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:03:23",
//                 "location": "Consignment Arrived at BHOPAL",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 12:57:37",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 02:15:34",
//                 "location": "Consignment Arrived at INDORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 09:08:21",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 23:12:23",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759910/68815189",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8b",
//         "awbno": "68815199",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-13 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "WARANGAL",
//         "time": "2019-07-15 13:09:09",
//         "scan": [
//             {
//                 "time": "2019-07-15 13:09:09",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 12:14:01",
//                 "location": "Consignment Arrived at WARANGAL",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 02:57:56",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 02:58:14",
//                 "location": "Consignment Arrived at HYDERABAD",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 07:05:33",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:31:01",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-13 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759911/68815199",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d8a",
//         "awbno": "68588812",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "HOWRAH",
//         "time": "2019-07-15 08:58:53",
//         "scan": [
//             {
//                 "time": "2019-07-15 08:58:53",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 02:36:49",
//                 "location": "Consignment Arrived at CALCUTTA",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-12 11:20:01",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 01:20:59",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759913/68588812",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d89",
//         "awbno": "68588815",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-10 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "BALLABGARH",
//         "time": "2019-07-15 09:30:09",
//         "scan": [
//             {
//                 "time": "2019-07-15 09:30:09",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-15 00:00:00",
//                 "location": "Consignment Delivered :- 15-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-14 23:10:23",
//                 "location": "Consignment Arrived at FARIDABAD",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-14 20:17:30",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-14 14:51:48",
//                 "location": "Consignment Arrived at NCR",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 14:14:34",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 01:20:59",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-10 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759912/68588815",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d88",
//         "awbno": "68588819",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KALHER",
//         "time": "2019-07-16 10:08:31",
//         "scan": [
//             {
//                 "time": "2019-07-16 10:08:31",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 14:01:37",
//                 "location": "Consignment Arrived at GREATER MUMBAI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 16:05:59",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:09:05",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759914/68588819",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d87",
//         "awbno": "68588818",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KALHER",
//         "time": "2019-07-16 10:08:31",
//         "scan": [
//             {
//                 "time": "2019-07-16 10:08:31",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 14:01:37",
//                 "location": "Consignment Arrived at GREATER MUMBAI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 16:05:59",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:09:05",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759915/68588818",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     },
//     {
//         "_id": "5d309ea2048c0a3321692d86",
//         "awbno": "68588816",
//         "carrier": "Safexpress",
//         "pickup_date": "2019-07-11 00:00:00",
//         "current_status": "Delivered",
//         "current_status_code": "DEL",
//         "order_data": "",
//         "recipient": "",
//         "extra_fields": {
//             "expected_delivery_date": "1970-01-01 05:30:00"
//         },
//         "from": "WHITEFIELD",
//         "to": "KALHER",
//         "time": "2019-07-16 10:08:31",
//         "scan": [
//             {
//                 "time": "2019-07-16 10:08:31",
//                 "location": "Consignment Out for Delivery",
//                 "status_detail": "OUT FOR DELIVERY"
//             },
//             {
//                 "time": "2019-07-16 00:00:00",
//                 "location": "Consignment Delivered :- 16-Jul-2019",
//                 "status_detail": "DELIVERED"
//             },
//             {
//                 "time": "2019-07-15 14:01:37",
//                 "location": "Consignment Arrived at GREATER MUMBAI",
//                 "status_detail": "ARRIVED AT DESTINATION"
//             },
//             {
//                 "time": "2019-07-13 16:05:59",
//                 "location": "Consignment In Transit To Next Hub",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-12 05:09:05",
//                 "location": "Consignment Arrived at BANGALORE",
//                 "status_detail": "IN-TRANSIT"
//             },
//             {
//                 "time": "2019-07-11 00:00:00",
//                 "location": "Waybill Generated at WHITEFIELD",
//                 "status_detail": "BOOKED"
//             }
//         ],
//         "tracking_url": "https://s.shipway.in/21759916/68588816",
//         "createdAt": "2019-07-18T16:30:26.155Z"
//     }
// ])

module.exports= ShipmentDetail;