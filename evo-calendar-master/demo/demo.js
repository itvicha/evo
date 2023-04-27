
var today = new Date();

var active_events = [];

var week_date = [];

function getRandom(a) {
    return Math.floor(Math.random() * a);
}


/*{
  id: "sKn89hi",
  name: "1-Week Coding Bootcamp",
  description: "Lorem ipsum dolor sit amet.",
  badge: "5-day event",
  date: [ today.getMonth() + 1 + "/" + week_date.start + "/" + today.getFullYear(), today.getMonth() + 1 + "/" + week_date.end + "/" + today.getFullYear() ],
  type: "event",
  everyYear: !0
},*/
$(document).ready(function() {
    $("#demoEvoCalendar").evoCalendar({
        format: "MM dd, yyyy",
        titleFormat: "MM",
        calendarEvents: [
            //รวมวันหยุดที่มีทุกปีไม่เปลี่ยนแปลง
        {
            id: "13042566",
            name: "วันสงกราน",
            badge: "วันหยุดราชการ",
            description: "วันประเพณีสงกราน",
            date: ["4/13/2566","4/15/2566"],
            type: "event",
            everyYear: true
        }, 
        {
            id: "01012566",
            name: "วันขึ้นปีใหม่",
            badge: "วันหยุดราชการ",
            description: "วันขึ้นปีใหม่",
            date: "1/1/2566",
            type: "event",
            everyYear: true
        }, 
        {
            id: "06042566",
            name: "วันจักรี",
            badge: "วันหยุดราชการ",
            description: "วันจักรี",
            date: "4/6/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "01052566",
            name: "วันแรงงาน",
            badge: "วันหยุดราชการ",
            description: "วันแรงงาน",
            date: "5/1/2566",
            type: "event",
            everyYear: true
        },
        {
          id: "04052566",
          name: "วันฉัตรมงคล",
          badge: "วันหยุดราชการ",
          description: "วันฉัตรมงคล",
          date: "5/4/2566",
          type: "event",
          everyYear: true
        },
        {
            id: "28072566",
            name: "วันเฉลิมฯ ร.10",
            badge: "วันหยุดราชการ",
            description: "วันเฉลิมฯ ร.10",
            date: "7/28/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "12082566",
            name: "วันเแม่",
            badge: "วันหยุดราชการ",
            description: "วันแม่",
            date: "8/12/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "13102566",
            name: "วันคล้ายวันสวรรคต ร.9",
            badge: "วันหยุดราชการ",
            description: "วันคล้ายวันสวรรคต ร.9",
            date: "10/13/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "23102566",
            name: "วันปิยมหาราช",
            badge: "วันหยุดราชการ",
            description: "วันปิยมหาราช",
            date: "10/23/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "05122566",
            name: "วันพ่อ",
            badge: "วันหยุดราชการ",
            description: "วันพ่อ",
            date: "12/5/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "10122566",
            name: "วันรัฐธรรมนูญ",
            badge: "วันหยุดราชการ",
            description: "วันรัฐธรรมนูญ",
            date: "12/10/2566",
            type: "event",
            everyYear: true
        },
        {
            id: "31122566",
            name: "วันสิ้นปี",
            badge: "วันหยุดราชการ",
            description: "วันสิ้นปี",
            date: "12/31/2566",
            type: "event",
            everyYear: true
        },
        //รวมวันหยุดที่มีทุกปีเปลี่ยนแปลงตามฤกษ์
        //ปี 2566/2566
        {id: "06032566",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "3/6/2566",type: "event",everyYear: false},
        {id: "17052566",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2566",type: "event",everyYear: false},
        {id: "03062566",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "6/3/2566",type: "event",everyYear: false},
        {id: "01082566",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "8/1/2566",type: "event",everyYear: false},
        {id: "02082566",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "8/2/2566",type: "event",everyYear: false},
        //ปี2567/2024
        {id: "24022024",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "2/24/2024",type: "event",everyYear: false},
        {id: "17052024",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2024",type: "event",everyYear: false},
        {id: "22052024",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "5/22/2024",type: "event",everyYear: false},
        {id: "20072024",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "7/20/2024",type: "event",everyYear: false},
        {id: "21072024",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "7/21/2024",type: "event",everyYear: false},
        //ปี2568/2025
        {id: "12022025",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "2/12/2025",type: "event",everyYear: false},
        {id: "17052025",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2025",type: "event",everyYear: false},
        {id: "11052025",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "5/11/2025",type: "event",everyYear: false},
        {id: "10072025",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "7/10/2025",type: "event",everyYear: false},
        {id: "11072025",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "7/11/2025",type: "event",everyYear: false},
        //ปี2569/2026
        {id: "03032026",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "3/3/2026",type: "event",everyYear: false},
        {id: "17052026",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2026",type: "event",everyYear: false},
        {id: "31052026",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "5/31/2026",type: "event",everyYear: false},
        {id: "29072026",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "7/29/2026",type: "event",everyYear: false},
        {id: "30072026",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "7/30/2026",type: "event",everyYear: false},        
        //ปี2570/2027
        {id: "21022027",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "2/21/2027",type: "event",everyYear: false},
        {id: "17052027",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2027",type: "event",everyYear: false},
        {id: "20052027",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "5/20/2027",type: "event",everyYear: false},
        {id: "18072027",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "7/18/2027",type: "event",everyYear: false},
        {id: "19072027",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "7/19/2027",type: "event",everyYear: false},

        //ปี2571/2028
        {id: "10022028",name: "วันมาฆบูชา",badge: "วันหยุดราชการ",description: "วันมาฆบูชา",date: "2/10/2028",type: "event",everyYear: false},
        {id: "17052028",name: "วันพืชมงคล",badge: "วันหยุดราชการ",description: "วันพืชมงคล",date: "5/17/2028",type: "event",everyYear: false},
        {id: "08052028",name: "วันวิสาขบูชา",badge: "วันหยุดราชการ",description: "วันวิสาขบูชา",date: "5/8/2028",type: "event",everyYear: false},
        {id: "06072028",name: "วันอาสาฬหบูชา",badge: "วันหยุดราชการ",description: "วันอาสาฬหบูชา",date: "7/6/2028",type: "event",everyYear: false},
        {id: "07072028",name: "วันเข้าพรรษา",badge: "วันหยุดราชการ",description: "วันเข้าพรรษา",date: "7/7/2028",type: "event",everyYear: false},

        //รวมวันพระเปลี่ยนแปลงตามฤกษ์
        //ปี 2566/2566
        //มกรา
        {id: "bd06012566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 2",date: "1/6/2566",type: "holiday",everyYear: false},
        {id: "bd14012566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 2",date: "1/14/2566",type: "holiday",everyYear: false},
        {id: "bd21012566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 2",date: "1/21/2566",type: "holiday",everyYear: false},
        {id: "bd29012566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 3",date: "1/29/2566",type: "holiday",everyYear: false},
        //กุมภา
        {id: "bd05022566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 3",date: "2/5/2566",type: "holiday",everyYear: false},
        {id: "bd13022566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 3",date: "2/13/2566",type: "holiday",everyYear: false},
        {id: "bd19022566",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 3",date: "2/19/2566",type: "holiday",everyYear: false},
        {id: "bd27022566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 4",date: "2/27/2566",type: "holiday",everyYear: false},
        //มีนา
        {id: "bd06032566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 4",date: "3/6/2566",type: "holiday",everyYear: false},
        {id: "bd14032566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 4",date: "3/14/2566",type: "holiday",everyYear: false},
        {id: "bd21032566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 4",date: "3/21/2566",type: "holiday",everyYear: false},
        {id: "bd29032566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 5",date: "3/29/2566",type: "holiday",everyYear: false},
        //เมษา
        {id: "bd05042566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 5",date: "4/5/2566",type: "holiday",everyYear: false},
        {id: "bd13042566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 5",date: "4/13/2566",type: "holiday",everyYear: false},
        {id: "bd19042566",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 5",date: "4/19/2566",type: "holiday",everyYear: false},
        {id: "bd27042566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 6",date: "4/27/2566",type: "holiday",everyYear: false},
        //พฤษภา
        {id: "bd04052566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 6",date: "5/4/2566",type: "holiday",everyYear: false},
        {id: "bd12052566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 6",date: "5/12/2566",type: "holiday",everyYear: false},
        {id: "bd19052566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 6",date: "5/19/2566",type: "holiday",everyYear: false},
        {id: "bd27052566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 7",date: "5/27/2566",type: "holiday",everyYear: false},
        //มิถุนา
        {id: "bd03062566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 7",date: "6/3/2566",type: "holiday",everyYear: false},
        {id: "bd11062566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 7",date: "6/11/2566",type: "holiday",everyYear: false},
        {id: "bd17062566",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 7",date: "6/17/2566",type: "holiday",everyYear: false},
        {id: "bd25062566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 8",date: "6/25/2566",type: "holiday",everyYear: false},
        //กรกฎา
        {id: "bd02072566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 6",date: "7/2/2566",type: "holiday",everyYear: false},
        {id: "bd10072566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 6",date: "7/10/2566",type: "holiday",everyYear: false},
        {id: "bd17072566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 6",date: "7/17/2566",type: "holiday",everyYear: false},
        {id: "bd25072566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 7",date: "7/25/2566",type: "holiday",everyYear: false},
        //สิงหา
        {id: "bd01082566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 8",date: "8/1/2566",type: "holiday",everyYear: false},
        {id: "bd02082566",name: "วันพระ",description: "แรม 1 ค่ำ เดือน 8",date: "8/2/2566",type: "holiday",everyYear: false},
        {id: "bd09082566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 8",date: "8/9/2566",type: "holiday",everyYear: false},
        {id: "bd16082566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 8",date: "8/16/2566",type: "holiday",everyYear: false},
        {id: "bd24082566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 9",date: "8/24/2566",type: "holiday",everyYear: false},
        {id: "bd31082566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 9",date: "8/31/2566",type: "holiday",everyYear: false},
        //กันยา
        {id: "bd08092566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 9",date: "9/8/2566",type: "holiday",everyYear: false},
        {id: "bd14092566",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 9",date: "9/14/2566",type: "holiday",everyYear: false},
        {id: "bd22092566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 10",date: "9/22/2566",type: "holiday",everyYear: false},
        {id: "bd29092566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 10",date: "9/29/2566",type: "holiday",everyYear: false},
        //ตุลา
        {id: "bd07102566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 10",date: "10/7/2566",type: "holiday",everyYear: false},
        {id: "bd14102566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 10",date: "10/14/2566",type: "holiday",everyYear: false},
        {id: "bd22102566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 11",date: "10/22/2566",type: "holiday",everyYear: false},
        {id: "bd29102566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 11",date: "10/29/2566",type: "holiday",everyYear: false},
        //พฤษจิกา
        {id: "bd06112566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 11",date: "11/6/2566",type: "holiday",everyYear: false},
        {id: "bd12112566",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 11",date: "11/12/2566",type: "holiday",everyYear: false},
        {id: "bd20112566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 12",date: "11/20/2566",type: "holiday",everyYear: false},
        {id: "bd27112566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 12",date: "11/27/2566",type: "holiday",everyYear: false},
        //ธันวา
        {id: "bd05122566",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 10",date: "12/5/2566",type: "holiday",everyYear: false},
        {id: "bd12122566",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 10",date: "12/12/2566",type: "holiday",everyYear: false},
        {id: "bd20122566",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 1",date: "12/20/2566",type: "holiday",everyYear: false},
        {id: "bd27122566",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 1",date: "12/27/2566",type: "holiday",everyYear: false},

        //ปี 2567/2024
        //มกรา
        {id: "bd04012024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 1",date: "1/4/2024",type: "holiday",everyYear: false},
        {id: "bd10012024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 1",date: "1/10/2024",type: "holiday",everyYear: false},
        {id: "bd18012024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 2",date: "1/18/2024",type: "holiday",everyYear: false},
        {id: "bd25012024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 2",date: "1/25/2024",type: "holiday",everyYear: false},
        //กุมภา
        {id: "bd02022024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 2",date: "2/2/2024",type: "holiday",everyYear: false},
        {id: "bd09022024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 2",date: "2/9/2024",type: "holiday",everyYear: false},
        {id: "bd17022024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 3",date: "2/17/2024",type: "holiday",everyYear: false},
        {id: "bd24022024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 3",date: "2/24/2024",type: "holiday",everyYear: false},
        //มีนา
        {id: "bd03032024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 3",date: "3/3/2024",type: "holiday",everyYear: false},
        {id: "bd09032024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 3",date: "3/9/2024",type: "holiday",everyYear: false},
        {id: "bd17032024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 4",date: "3/17/2024",type: "holiday",everyYear: false},
        {id: "bd24032024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 4",date: "3/24/2024",type: "holiday",everyYear: false},
        //เมษา
        {id: "bd01042024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 4",date: "4/1/2024",type: "holiday",everyYear: false},
        {id: "bd08042024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 4",date: "4/8/2024",type: "holiday",everyYear: false},
        {id: "bd16042024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 5",date: "4/16/2024",type: "holiday",everyYear: false},
        {id: "bd23042024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 5",date: "4/23/2024",type: "holiday",everyYear: false},
        //พฤษภา
        {id: "bd01052024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 5",date: "5/1/2024",type: "holiday",everyYear: false},
        {id: "bd07052024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 5",date: "5/7/2024",type: "holiday",everyYear: false},
        {id: "bd15052024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 6",date: "5/15/2024",type: "holiday",everyYear: false},
        {id: "bd22052024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 6",date: "5/22/2024",type: "holiday",everyYear: false},
        {id: "bd30052024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 6",date: "5/30/2024",type: "holiday",everyYear: false},
        //มิถุนา
        {id: "bd06062024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 6",date: "6/6/2024",type: "holiday",everyYear: false},
        {id: "bd14062024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 7",date: "6/14/2024",type: "holiday",everyYear: false},
        {id: "bd21062024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 7",date: "6/21/2024",type: "holiday",everyYear: false},
        {id: "bd29062024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 7",date: "6/29/2024",type: "holiday",everyYear: false},
        //กรกฎา
        {id: "bd05072024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 7",date: "7/5/2024",type: "holiday",everyYear: false},
        {id: "bd13072024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 8",date: "7/13/2024",type: "holiday",everyYear: false},
        {id: "bd20072024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 8",date: "7/20/2024",type: "holiday",everyYear: false},
        {id: "bd21072024",name: "วันพระ",description: "แรม 1 ค่ำ เดือน 8",date: "7/21/2024",type: "holiday",everyYear: false},
        {id: "bd28072024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 8",date: "7/28/2024",type: "holiday",everyYear: false},
        //สิงหา
        {id: "bd04082024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 8",date: "8/4/2024",type: "holiday",everyYear: false},
        {id: "bd12082024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 9",date: "8/12/2024",type: "holiday",everyYear: false},
        {id: "bd19082024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 9",date: "8/19/2024",type: "holiday",everyYear: false},
        {id: "bd27082024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 9",date: "8/27/2024",type: "holiday",everyYear: false},
        //กันยา
        {id: "bd02092024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 9",date: "9/2/2024",type: "holiday",everyYear: false},
        {id: "bd10092024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 10",date: "9/10/2024",type: "holiday",everyYear: false},
        {id: "bd17092024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 10",date: "9/17/2024",type: "holiday",everyYear: false},
        {id: "bd25092024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 10",date: "9/25/2024",type: "holiday",everyYear: false},
        //ตุลา
        {id: "bd02102024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 10",date: "10/2/2024",type: "holiday",everyYear: false},
        {id: "bd10102024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 11",date: "10/10/2024",type: "holiday",everyYear: false},
        {id: "bd17102024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 11",date: "10/17/2024",type: "holiday",everyYear: false},
        {id: "bd25102024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 11",date: "10/25/2024",type: "holiday",everyYear: false},
        {id: "bd31102024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 11",date: "10/31/2024",type: "holiday",everyYear: false},
        //พฤษจิกา
        {id: "bd08112024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 12",date: "11/8/2024",type: "holiday",everyYear: false},
        {id: "bd15112024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 12",date: "11/15/2024",type: "holiday",everyYear: false},
        {id: "bd23112024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 12",date: "11/23/2024",type: "holiday",everyYear: false},
        {id: "bd30112024",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 12",date: "11/30/2024",type: "holiday",everyYear: false},
        //ธันวา
        {id: "bd08122024",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 1",date: "12/8/2024",type: "holiday",everyYear: false},
        {id: "bd15122024",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 1",date: "12/15/2024",type: "holiday",everyYear: false},
        {id: "bd23122024",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 1",date: "12/23/2024",type: "holiday",everyYear: false},
        {id: "bd29122024",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 1",date: "12/29/2024",type: "holiday",everyYear: false},

        //ปี 2568/2025
        //มกรา
        {id: "bd06012025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 2",date: "1/6/2025",type: "holiday",everyYear: false},
        {id: "bd13012025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 2",date: "1/13/2025",type: "holiday",everyYear: false},
        {id: "bd21012025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 2",date: "1/21/2025",type: "holiday",everyYear: false},
        {id: "bd28012025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 2",date: "1/28/2025",type: "holiday",everyYear: false},
        //กุมภา
        {id: "bd05022025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 3",date: "2/5/2025",type: "holiday",everyYear: false},
        {id: "bd12022025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 3",date: "2/12/2025",type: "holiday",everyYear: false},
        {id: "bd20022025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 3",date: "2/20/2025",type: "holiday",everyYear: false},
        {id: "bd26022025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 3",date: "2/26/2025",type: "holiday",everyYear: false},
        //มีนา
        {id: "bd06032025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 4",date: "3/6/2025",type: "holiday",everyYear: false},
        {id: "bd13032025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 4",date: "3/13/2025",type: "holiday",everyYear: false},
        {id: "bd21032025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 4",date: "3/21/2025",type: "holiday",everyYear: false},
        {id: "bd28032025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 4",date: "3/28/2025",type: "holiday",everyYear: false},
        //เมษา
        {id: "bd02042025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 5",date: "4/5/2025",type: "holiday",everyYear: false},
        {id: "bd12042025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 5",date: "4/12/2025",type: "holiday",everyYear: false},
        {id: "bd20042025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 5",date: "4/20/2025",type: "holiday",everyYear: false},
        {id: "bd26042025",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 5",date: "4/26/2025",type: "holiday",everyYear: false},
        //พฤษภา
        {id: "bd04052025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 6",date: "5/4/2025",type: "holiday",everyYear: false},
        {id: "bd11052025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 6",date: "5/11/2025",type: "holiday",everyYear: false},
        {id: "bd19052025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 6",date: "5/19/2025",type: "holiday",everyYear: false},
        {id: "bd26052025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 6",date: "5/26/2025",type: "holiday",everyYear: false},
        //มิถุนา
        {id: "bd03062025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 7",date: "6/3/2025",type: "holiday",everyYear: false},
        {id: "bd10062025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 7",date: "6/10/2025",type: "holiday",everyYear: false},
        {id: "bd18062025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 7",date: "6/18/2025",type: "holiday",everyYear: false},
        {id: "bd25062025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 7",date: "6/25/2025",type: "holiday",everyYear: false},
        //กรกฎา
        {id: "bd03072025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 8",date: "7/3/2025",type: "holiday",everyYear: false},
        {id: "bd10072025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 8",date: "7/10/2025",type: "holiday",everyYear: false},
        {id: "bd11072025",name: "วันพระ",description: "แรม 1 ค่ำ เดือน 8",date: "7/11/2025",type: "holiday",everyYear: false},
        {id: "bd19072025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 8",date: "7/18/2025",type: "holiday",everyYear: false},
        {id: "bd25072025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 8",date: "7/25/2025",type: "holiday",everyYear: false},
        //สิงหา
        {id: "bd02082025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 9",date: "8/2/2025",type: "holiday",everyYear: false},
        {id: "bd09082025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 9",date: "8/9/2025",type: "holiday",everyYear: false},
        {id: "bd17082025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 9",date: "8/17/2025",type: "holiday",everyYear: false},
        {id: "bd23082025",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 9",date: "8/23/2025",type: "holiday",everyYear: false},
        {id: "bd31082025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 10",date: "8/31/2025",type: "holiday",everyYear: false},
        //กันยา
        {id: "bd07092025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 10",date: "9/7/2025",type: "holiday",everyYear: false},
        {id: "bd15092025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 10",date: "9/15/2025",type: "holiday",everyYear: false},
        {id: "bd22092025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 10",date: "9/22/2025",type: "holiday",everyYear: false},
        {id: "bd30092025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 11",date: "9/30/2025",type: "holiday",everyYear: false},
        //ตุลา
        {id: "bd07102025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 11",date: "10/7/2025",type: "holiday",everyYear: false},
        {id: "bd15102025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 11",date: "10/15/2025",type: "holiday",everyYear: false},
        {id: "bd21102025",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 11",date: "10/21/2025",type: "holiday",everyYear: false},
        {id: "bd29102025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 12",date: "10/29/2025",type: "holiday",everyYear: false},
        //พฤษจิกา
        {id: "bd05112025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 12",date: "11/5/2025",type: "holiday",everyYear: false},
        {id: "bd13112025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 12",date: "11/13/2025",type: "holiday",everyYear: false},
        {id: "bd20112025",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 12",date: "11/20/2025",type: "holiday",everyYear: false},
        {id: "bd28112025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 1",date: "11/28/2025",type: "holiday",everyYear: false},
        //ธันวา
        {id: "bd05122025",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 1",date: "12/5/2025",type: "holiday",everyYear: false},
        {id: "bd13122025",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 1",date: "12/13/2025",type: "holiday",everyYear: false},
        {id: "bd19122025",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 1",date: "12/19/2025",type: "holiday",everyYear: false},
        {id: "bd27122025",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 2",date: "12/27/2025",type: "holiday",everyYear: false},
        
        //ปี 2569/2026 
        //มกรา
        {id: "bd06012026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 2",date: "1/6/2026",type: "holiday",everyYear: false},
        {id: "bd13012026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 2",date: "1/13/2026",type: "holiday",everyYear: false},
        {id: "bd21012026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 2",date: "1/21/2026",type: "holiday",everyYear: false},
        {id: "bd28012026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 2",date: "1/28/2026",type: "holiday",everyYear: false},
        //กุมภา
        {id: "bd05022026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 3",date: "2/5/2026",type: "holiday",everyYear: false},
        {id: "bd12022026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 3",date: "2/12/2026",type: "holiday",everyYear: false},
        {id: "bd20022026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 3",date: "2/20/2026",type: "holiday",everyYear: false},
        {id: "bd26022026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 3",date: "2/26/2026",type: "holiday",everyYear: false},
        //มีนา
        {id: "bd06032026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 4",date: "3/6/2026",type: "holiday",everyYear: false},
        {id: "bd13032026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 4",date: "3/13/2026",type: "holiday",everyYear: false},
        {id: "bd21032026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 4",date: "3/21/2026",type: "holiday",everyYear: false},
        {id: "bd28032026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 4",date: "3/28/2026",type: "holiday",everyYear: false},
        //เมษา
        {id: "bd02042026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 5",date: "4/5/2026",type: "holiday",everyYear: false},
        {id: "bd12042026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 5",date: "4/12/2026",type: "holiday",everyYear: false},
        {id: "bd20042026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 5",date: "4/20/2026",type: "holiday",everyYear: false},
        {id: "bd26042026",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 5",date: "4/26/2026",type: "holiday",everyYear: false},
        //พฤษภา
        {id: "bd04052026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 6",date: "5/4/2026",type: "holiday",everyYear: false},
        {id: "bd11052026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 6",date: "5/11/2026",type: "holiday",everyYear: false},
        {id: "bd19052026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 6",date: "5/19/2026",type: "holiday",everyYear: false},
        {id: "bd26052026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 6",date: "5/26/2026",type: "holiday",everyYear: false},
        //มิถุนา
        {id: "bd03062026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 7",date: "6/3/2026",type: "holiday",everyYear: false},
        {id: "bd10062026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 7",date: "6/10/2026",type: "holiday",everyYear: false},
        {id: "bd18062026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 7",date: "6/18/2026",type: "holiday",everyYear: false},
        {id: "bd25062026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 7",date: "6/25/2026",type: "holiday",everyYear: false},
        //กรกฎา
        {id: "bd03072026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 8",date: "7/3/2026",type: "holiday",everyYear: false},
        {id: "bd10072026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 8",date: "7/10/2026",type: "holiday",everyYear: false},
        {id: "bd11072026",name: "วันพระ",description: "แรม 1 ค่ำ เดือน 8",date: "7/11/2026",type: "holiday",everyYear: false},
        {id: "bd19072026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 8",date: "7/18/2026",type: "holiday",everyYear: false},
        {id: "bd25072026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 8",date: "7/25/2026",type: "holiday",everyYear: false},
        //สิงหา
        {id: "bd02082026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 9",date: "8/2/2026",type: "holiday",everyYear: false},
        {id: "bd09082026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 9",date: "8/9/2026",type: "holiday",everyYear: false},
        {id: "bd17082026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 9",date: "8/17/2026",type: "holiday",everyYear: false},
        {id: "bd23082026",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 9",date: "8/23/2026",type: "holiday",everyYear: false},
        {id: "bd31082026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 10",date: "8/31/2026",type: "holiday",everyYear: false},
        //กันยา
        {id: "bd07092026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 10",date: "9/7/2026",type: "holiday",everyYear: false},
        {id: "bd15092026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 10",date: "9/15/2026",type: "holiday",everyYear: false},
        {id: "bd22092026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 10",date: "9/22/2026",type: "holiday",everyYear: false},
        {id: "bd30092026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 11",date: "9/30/2026",type: "holiday",everyYear: false},
        //ตุลา
        {id: "bd07102026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 11",date: "10/7/2026",type: "holiday",everyYear: false},
        {id: "bd15102026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 11",date: "10/15/2026",type: "holiday",everyYear: false},
        {id: "bd21102026",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 11",date: "10/21/2026",type: "holiday",everyYear: false},
        {id: "bd29102026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 12",date: "10/29/2026",type: "holiday",everyYear: false},
        //พฤษจิกา
        {id: "bd05112026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 12",date: "11/5/2026",type: "holiday",everyYear: false},
        {id: "bd13112026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 12",date: "11/13/2026",type: "holiday",everyYear: false},
        {id: "bd20112026",name: "วันพระ",description: "แรม 15 ค่ำ เดือน 12",date: "11/20/2026",type: "holiday",everyYear: false},
        {id: "bd28112026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 1",date: "11/28/2026",type: "holiday",everyYear: false},
        //ธันวา
        {id: "bd05122026",name: "วันพระ",description: "ขึ้น 15 ค่ำ เดือน 1",date: "12/5/2026",type: "holiday",everyYear: false},
        {id: "bd13122026",name: "วันพระ",description: "แรม 8 ค่ำ เดือน 1",date: "12/13/2026",type: "holiday",everyYear: false},
        {id: "bd19122026",name: "วันพระ",description: "แรม 14 ค่ำ เดือน 1",date: "12/19/2026",type: "holiday",everyYear: false},
        {id: "bd27122026",name: "วันพระ",description: "ขึ้น 8 ค่ำ เดือน 2",date: "12/27/2026",type: "holiday",everyYear: false},

        //รวมวันสำคัญแห่งชาติและสากล
        //มีทุกปีไม่เปลี่ยน
        //มกรา
        {id: "DD16082566",name: "วันครู",description: "",date: "1/16/2566",type: "birthday",everyYear: true},
        {id: "DD17082566",name: "วันพ่อขุนรามฯ",description: "",date: "1/17/2566",type: "birthday",everyYear: true},
        {id: "DD18082566",name: "วันกองทัพไทย และ วันสมเด็จพระนเรศวรมหาราช",description: "",date: "1/18/2566",type: "birthday",everyYear: true},
        //กุมภา
        {id: "DD02022566",name: "วันเกษตรแห่งชาติ",description: "",date: "2/2/2566",type: "birthday",everyYear: true},
        {id: "DD03022566",name: "วันทหารผ่านศึก",description: "",date: "2/3/2566",type: "birthday",everyYear: true},
        {id: "DD14022566",name: "วัน Valentine",description: "",date: "2/14/2566",type: "birthday",everyYear: true
        },
        //มีนา
        {id: "DD08032566",name: "วันสตรีสากล",description: "",date: "3/8/2566",type: "birthday",everyYear: true},
        {id: "DD31032566",name: "วันพระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว",description: "",date: "3/31/2566",type: "birthday",everyYear: true},
        //เมษา
        {id: "DD01042566",name: "วันเลิกทาส",description: "วันเลิกทาส",date: "4/1/2566",type: "birthday",everyYear: true},       
        {id: "DD14042566",name: "วันครอบครัว",description: "วันครอบครัว",date: "4/14/2566",type: "birthday",everyYear: true},
        //พฤษภา
        {id: "DD08052566",name: "วันกาชาดสากล",description: "วันกาชาดสากล",date: "5/8/2566",type: "birthday",everyYear: true},
        {id: "DD31052566",name: "วันงดสูบบุหรี่โลก",description: "วันงดสูบบุหรี่โลก",date: "5/31/2566",type: "birthday",everyYear: true},
        //มิถุนา
        {id: "DD05062566",name: "วันสิ่งแวดล้อมโลก",description: "วันสิ่งแวดล้อมโลก",date: "6/5/2566",type: "birthday",everyYear: true},
        {id: "DD26062566",name: "วันสุนทรภู่ และ วันต่อต้านยาเสพติดโลก",description: "วันสุนทรภู่ และ วันต่อต้านยาเสพติดโลก",date: "6/26/2566",type: "birthday",everyYear: true},
        //กรกฎา
        {id: "DD01072566",name: "วันลูกเสือแห่งชาติ",description: "วันลูกเสือแห่งชาติ",date: "7/1/2566",type: "birthday",everyYear: true},       
        {id: "DD28072566",name: "วันเฉลิมพระชนมพรรษา ในหลวง รัชกาลที่ 10",description: "วันเฉลิมพระชนมพรรษา ในหลวง รัชกาลที่ 10",date: "7/28/2566",type: "birthday",everyYear: true},
        //สิงหา
        //
        //กันยา
        {id: "DD20092566",name: "วันเยาวชนแห่งชาติ",description: "วันเยาวชนแห่งชาติ",date: "9/20/2566",type: "birthday",everyYear: true},       
        {id: "DD24092566",name: "วันมหิดล",description: "วันมหิดล",date: "9/24/2566",type: "birthday",everyYear: true},       
        //ตุลา
        {id: "DD13102566",name: "วันตำรวจ",description: "วันตำรวจ",date: "10/13/2566",type: "birthday",everyYear: true}, 
        {id: "DD31102566",name: "วัน Haloween",description: "วัน Haloween",date: "10/31/2566",type: "birthday",everyYear: true}, 
        //พฤษจิกา

        //ธันวา
        {id: "DD01122566",name: "วันต้านเอดส์โลก",description: "วันต้านเอดส์โลก",date: "12/1/2566",type: "birthday",everyYear: true}, 
        {id: "DD25122566",name: "วัน Christmas",description: "วัน Christmas",date: "12/25/2566",type: "birthday",everyYear: true},
        
        //รวมวันสำคัญแห่งชาติและสากล
        //มีทุกปีเปลี่ยนตามฤกษ์
        //ปี 2566/2566
        //มกรา
        {id: "DD14012566",name: "วันเด็ก",description: "",date: "1/14/2566",type: "birthday",everyYear: false},
        {id: "DD2202566",name: "วันตรุษจีน",description: "",date: "1/22/2566",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082566",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2566",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD29102566",name: "วันออกพรรษา",description: "วันออกพรรหษา",date: "10/29/2566",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD27112566",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/27/2566",type: "birthday",everyYear: false},
        
        //ปี 2567/2024
        //มกรา
        {id: "DD13012024",name: "วันเด็ก",description: "",date: "1/13/2024",type: "birthday",everyYear: false},
        {id: "DD22082024",name: "วันตรุษจีน",description: "",date: "1/22/2024",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082024",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2024",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD17102024",name: "วันออกพรรษา",description: "วันออกพรรษา",date: "10/17/2024",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD15112024",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/15/2024",type: "birthday",everyYear: false},

        //ปี 2568/2025
        //มกรา
        {id: "DD11012025",name: "วันเด็ก",description: "",date: "1/11/2025",type: "birthday",everyYear: false},
        {id: "DD22082025",name: "วันตรุษจีน",description: "",date: "1/22/2025",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082025",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2025",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD07102025",name: "วันออกพรรษา",description: "วันออกพรรษา",date: "10/7/2025",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD05112025",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/5/2025",type: "birthday",everyYear: false},

        //ปี 2569/2026
        //มกรา
        {id: "DD10012026",name: "วันเด็ก",description: "",date: "1/10/2026",type: "birthday",everyYear: false},
        {id: "DD22082026",name: "วันตรุษจีน",description: "",date: "1/22/2026",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082026",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2026",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD26102026",name: "วันออกพรรษา",description: "วันออกพรรษา",date: "10/26/2026",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD24112026",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/24/2026",type: "birthday",everyYear: false},

        //ปี 2570/2027
        //มกรา
        {id: "DD09012027",name: "วันเด็ก",description: "",date: "1/9/2027",type: "birthday",everyYear: false},
        {id: "DD22082027",name: "วันตรุษจีน",description: "",date: "1/22/2027",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082027",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2027",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD15102027",name: "วันออกพรรษา",description: "วันออกพรรษา",date: "10/15/2027",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD13112027",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/13/2027",type: "birthday",everyYear: false},

        //ปี 2571/2028
        //มกรา
        {id: "DD08012028",name: "วันเด็ก",description: "",date: "1/8/2028",type: "birthday",everyYear: false},
        {id: "DD22082028",name: "วันตรุษจีน",description: "",date: "1/22/2028",type: "birthday",everyYear: false},
        //สิงหา
        {id: "DD30082028",name: "วันสารทจีน",description: "วันสารทจีน",date: "8/30/2028",type: "birthday",everyYear: false},       
        //ตุลา
        {id: "DD03102028",name: "วันออกพรรษา",description: "วันออกพรรษา",date: "10/3/2028",type: "birthday",everyYear: false}, 
        //พฤษจิกา
        {id: "DD01112028",name: "วันลอยกระทง",description: "วันลอยกระทง",date: "11/1/2028",type: "birthday",everyYear: false}
    ]
    });


});
