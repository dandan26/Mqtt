var btnConnect = document.getElementById('btn-connect')
var btnPublish = document.getElementById('btn-publish')
var btnSubscribe = document.getElementById('btn-Subscribe')


btnConnect.addEventListener('click', function (e){
  e.preventDefault();
  console.log("connect button clicked")
  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client.subscribe("mqtt/demo")
  
  client.on("connect", function(){
    document.getElementById("Stat").innerHTML += '<span>Connected!</span><br/>';  })
  
    client.on("message", function (topic, payload) {
      console.log([topic, payload].join(": "));
      //client.end();
  })


  btnSubscribe.addEventListener('click', function(e){    
  })

  btnPublish.addEventListener('click', function(e){
    e.preventDefault();
    var top1 = $("input[name='topic']").val();
    var payload1 = $("input[name='payload']").val();
    client.publish("mqtt/demo",document.getElementsByClassName("table2").innerHTML +=  $(".data-table tbody").append("<tr   data-topic='"+top1+"' data-payload='"+payload1+"'><td>"+top1+"</td><td>"+payload1+" </td><td>"+''+"</td></tr>")
    )
    $("input[name='top1']").val('');
    $("input[name='payload1']").val('');
  })
})

