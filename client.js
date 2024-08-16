document.addEventListener("DOMContentLoaded", event => {
    let keyinDom = document.querySelector('#txtInput')
    let showDom = document.querySelector('#txtShow')
  
    document.querySelector("#btnSend").addEventListener('click',() => {
      let datetime = new Date()
      let txt = `${datetime.toLocaleString() }： ` + keyinDom.value;
      ws.send(txt);
    })
  
    // 建立 WebSocket
    let url = 'ws://localhost:3000'
    let ws = new WebSocket(url)
    
    // 監聽連線狀態
    ws.onopen = () => {
      console.log('open connection')
    }
    ws.onclose = () => {
      console.log('close connection');
    }
    // 接收 Server 發送的訊息
    ws.onmessage = event => {
      let txt = event.data
      if (!showDom.value) showDom.value = txt
      else showDom.value = showDom.value + "\n" + txt
      keyinDom.value = ""
    }
  });