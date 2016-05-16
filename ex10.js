var net = require('net');

function addZero(number){

    var str_no = "" + number;

    if(str_no.length==1)
      return "0" + str_no;

    else
      return str_no;

}

var server = net.createServer(function(socket){

                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth() + 1;
                var day = today.getDate();
                var hours = today.getHours();
                var mins = today.getMinutes();

                var str_month = addZero(month);
                var str_day = addZero(day);
                var str_hours = addZero(hours);
                var str_mins = addZero(mins);

                socket.write("" + year + "-" + str_month + "-" + str_day + " " + str_hours + ":" + str_mins + "\n");

                socket.end();

            });

server.listen(process.argv[2]);
