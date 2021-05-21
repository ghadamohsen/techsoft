//in egyp  without  fr and sat

var phone_call_1 = "01277773580";//åÇÊÝ ãä ÇáÇÍÏ ááÎãíÓ ÏÇÎá ãÕÑ
var phone_whatsapp_1 = "01018974222";// æÇÊÓ ÇÈ ãä ÇáÇÍÏ ááÎãíÓ ÏÇÎá ãÕÑ

// ayman = 01018974222
//mfa= 01011888279
//noura = 01000937412
//01277773580


// fr and sat
//in egyp

var phone_call_2 = "01277773580";//åÇÊÝ ÌãÚÉ æÓÈÊ ÏÇÎá ãÕÑ
var phone_whatsapp_2 = "01277773580";//æÇÊÓ ÇÈ ÌãÚÉ æÓÈÊ ÏÇÎá ãÕÑ


// without fr and sat
//out egyp 01022976796
var phone_call_3 = "+201277773580";//åÇÊÝ ÌãÚÉ æÓÈÊ ÎÇÑÌ ãÕÑ
var phone_whatsapp_3 = "01022976796";//æÇÊÓ ÇÈ ÌãÚÉ æÓÈÊ ÎÇÑÌ ãÕÑ



// fr and sat
//out egyp
//201011888279
//01018974222
//  01022976796

var phone_call_4 = "+201277773580";//åÇÊÝ ãä ÇáÇÍÏ ááÎãíÓ ÎÇÑÌ ãÕÑ
var phone_whatsapp_4 = "01022976796⁩";//æÇÊÓ ÇÈ ãä ÇáÇÍÏ ááÎãíÓ ÎÇÑÌ ãÕÑ

var phone_call_5 = "+201277773580";//åÇÊÝ ãä ÇáÇÍÏ ááÎãíÓ ÎÇÑÌ ãÕÑ
var phone_whatsapp_5 = "01022976796";//æÇÊÓ ÇÈ ãä ÇáÇÍÏ ááÎãíÓ ÎÇÑÌ ãÕÑ





$.ajax({
    dataType: "json",
    type: "GET",
    url: 'https://ipinfo.io',
    success: function (data) {
        console.log(data);
        var country = data.country;
        var call;
        var whatsapp;
        var arrOne = [0, 1, 2, 3 ]; //ЦД гАгмо гАЛ гАнЦМс
        var arrTwo = [ 6 ,  5 , 4   ]; // гАлЦзЕ Ф гАсхй
        var myDate = new Date();
        if (country == 'EG') {
//                        myDate.setFullYear(2009);
//                        myDate.setMonth(7);
//                        myDate.setDate(25);

            console.log(myDate.getDay());

            if (arrOne.indexOf(myDate.getDay()) != -1) {
                call = phone_call_1;
                whatsapp = phone_whatsapp_1;
            } else if (arrTwo.indexOf(myDate.getDay()) != -1) {
                call = phone_call_2;
                whatsapp = phone_whatsapp_2;
            }

        } else  if (country == 'SA') {
//                        myDate.setFullYear(2009);
//                        myDate.setMonth(7);
//                        myDate.setDate(25);

            console.log(myDate.getDay());

          if (arrOne.indexOf(myDate.getDay()) != -1) {
                call = phone_call_3;
                whatsapp = phone_whatsapp_3;
            } else if (arrTwo.indexOf(myDate.getDay()) != -1) {
                call = phone_call_4;
                whatsapp = phone_whatsapp_4;
            }

        }   else {
           if (arrOne.indexOf(myDate.getDay()) != -1) {
                call = phone_call_5;
                whatsapp = phone_whatsapp_5;
            } else if (arrTwo.indexOf(myDate.getDay()) != -1) {
                call = phone_call_5;
                whatsapp = phone_whatsapp_5;
            }
        }
        $('.call').attr('href', 'tel:' + call);
        $('.whats-app').attr('href', 'https://wa.me/2' + whatsapp);
        $('.call-text').html(call);
        $('.whats-app-text').html(whatsapp);
        $('.whats-app2').attr('href', 'https://wa.me/2' + whatsapp);

    },
    error: function (xhr, textStatus, errorThrown) {

    },
});
