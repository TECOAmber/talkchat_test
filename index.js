var ws

// 監聽 click 事件
document.querySelector('#connect')?.addEventListener('click', (e) => {
    console.log('[click connect]')
    connect()
})

document.querySelector('#disconnect')?.addEventListener('click', (e) => {
    console.log('[click disconnect]')
    disconnect()
})

document.querySelector('#sendBtn')?.addEventListener('click', (e) => {
    const msg = document.querySelector('#sendMsg')
    sendMessage(msg?.value)
})

function connect() { 
    // Create WebSocket connection
    ws = new WebSocket('ws://172.20.10.5') 
    // 在開啟連線時執行
    ws.onopen = () => console.log('[open connection]')
}

function disconnect() {
    ws.close()
    // 在關閉連線時執行
    ws.onclose = () => console.log('[close connection]')
}