
let ika; 

document.getElementById("ika_btn").onclick = function(){
    ika = document.getElementById("ika").value;
    console.log(ika);
    document.getElementById("koira_ika").textContent = ika * 7;
}