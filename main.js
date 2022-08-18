
let encriptbtn= document.getElementById('encrip-btn')
let desencriptbtn= document.getElementById('desencrip-btn')
let inputtextencript= document.getElementById('text-input')
let messageClipboard= document.getElementById('message-clipboard')
let cliboardText= document.getElementById('clipboard-text')
let cliboardTextContent= document.getElementById('clipboard-text-encripted')
let copibtn= document.getElementById('copi-btn')
let figura = document.getElementById('figura')
let keys={a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"}

cliboardText.classList.add("active")

window.addEventListener('resize',()=>{
  if(window.innerWidth<1024){
    document.getElementById('figura').hidden=true
  }else{
    document.getElementById('figura').hidden=false
  }
})

if(inputtextencript.value ==''){
  document.getElementById('encrip-btn').disabled=true
  document.getElementById('desencrip-btn').disabled=true
}
let regex = /[A-Z\u00C0-\u017F]/g
inputtextencript.oninput=(e)=>{
  let textvalidation=e.target.value.search(/[A-Z\u00C0-\u017F]/g) > -1
  if(textvalidation){
    inputtextencript.style.border='1px solid red'
    document.getElementById('encrip-btn').disabled=true
    document.getElementById('desencrip-btn').disabled=true
  }else{
    inputtextencript.style.border='none'
    document.getElementById('encrip-btn').disabled=false
    document.getElementById('desencrip-btn').disabled=false
  } 
  if(inputtextencript.value===''){
    document.getElementById('encrip-btn').disabled=true
    document.getElementById('desencrip-btn').disabled=true
  }
}

encriptbtn.onclick=()=>{
  let textToencript=inputtextencript.value.split("")
  for(let val in textToencript){
    if(keys.hasOwnProperty(textToencript[val])){
      textToencript[val]= keys[textToencript[val]]
    }
  }
  messageClipboard.classList.add('active')
  figura.classList.add('active')
  cliboardText.classList.remove('active')
  cliboardTextContent.textContent=textToencript.join("")
  setTimeout(()=>{document.getElementById('text-input').value=""},1000)
}
desencriptbtn.onclick=()=>{
  let text= inputtextencript.value
  let reverseKeys={ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"}
  for (let key in reverseKeys){
    text= text.replace(new RegExp(key,'g'),reverseKeys[key])
  }
  messageClipboard.classList.add('active')
  figura.classList.add('active')
  cliboardText.classList.remove('active')
  cliboardTextContent.textContent=text
  setTimeout(()=>{
    document.getElementById('text-input').value="";
    figura.classList.remove('active')
    messageClipboard.classList.remove('active')
    cliboardText.classList.add('active')
},10000)
}

copibtn.onclick=()=>{
  if(cliboardTextContent.textContent !== ''){
    navigator.clipboard.writeText(cliboardTextContent.textContent)
    .then(e=>{
      cliboardTextContent.textContent=''
      alert("Copied text")
      figura.classList.remove('active')
      messageClipboard.classList.remove('active')
      cliboardText.classList.add('active')
    })
  }
}

