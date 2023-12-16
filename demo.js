let seconds=document.querySelector('#sec')
let sec=0
let minutes=document.querySelector('#mnts')
let mnts=0
let hours=document.querySelector('#hrs')
let hrs=0
let interval=0
let count=0
let timer=false
let data=[]


let greet=()=>{
    sec+=1
    sec<=9?seconds.innerHTML='0'+sec :seconds.innerHTML=sec
    if(sec===60){
        sec=0
        mnts++
        mnts<=9?minutes.innerHTML='0'+mnts :minutes.innerHTML=mnts
        if(mnts===60){
            mnts=0
            hrs++
            hrs<=9?hours.innerHTML='0'+hrs :hours.innerHTML=hrs
        }
    }
    
}

let start=document.querySelector('#start')
start.addEventListener('click',()=>{
    if(!timer){
        interval=setInterval(greet,1000)
    }
    timer=true;
})


let stop=document.querySelector('#stop')
stop.addEventListener('click',()=>{
    clearInterval(interval)
    lapTime=hours.innerHTML+ ":"+minutes.innerHTML+":"+seconds.innerHTML
    if(hours.innerHTML+minutes.innerHTML+seconds.innerHTML!='000000'){
        count+=1
        let s=document.querySelector('#tbody')
        data.push({count:`${count}`,lap:`${lapTime}`})
            let details=""
            data.forEach((emp)=>{
                details+=`
                <tr>
                    <td>${emp.count}</td>
                    <td>${emp.lap}</td>
                </tr>
                `
            })
            s.innerHTML=details;
    }
    timer=false;
})

let reset=document.querySelector('#reset')
reset.addEventListener('click',()=>{
    clearInterval(interval)
    sec='00'
    mnts='00'
    hrs='00'
    seconds.innerHTML=sec;
    minutes.innerHTML=mnts;
    hours.innerHTML=hrs;
    let s=document.querySelector('#tbody')
    s.innerHTML=`<td></td>
                <td></td>
                <td></td>`
})



