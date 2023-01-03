var arr = [{ dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "your story", },
{ dp: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1615212814093-f56085658024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "model_0", },
{ dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1517246375798-77649c539a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "angel_1", },
{ dp: "https://images.unsplash.com/photo-1615212049275-95561aebe1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "priya_avi", },
{ dp: "https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",name:"kittu",  },
{ dp: "https://images.unsplash.com/photo-1517805686688-47dd930554b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "anbhavi", },
{ dp: "https://images.unsplash.com/photo-1615212123996-f21711429486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1616501470925-5aa85c62679e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "ismita_😍", },
]
var clutter = "";
arr.forEach(function (elem, index) {
    clutter += ` <div id="story1" class="a">
    <div id="image0" class="imagee">
 <img id = "${index}" src="${elem.dp}"alt=""></img>
    </div>
     <h4>${elem.name}</h4>
    </div>`
})
document.querySelector("#story").innerHTML = clutter;
var timer = 0;
document.querySelector("#story").addEventListener("click", function (dets) {
    document.querySelector("#fs").style.display = "initial";
    document.querySelector("#fs").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function () {
        document.querySelector("#fs").style.display = "none";
    }, 2000);
    if (timer <= 100) {
        setInterval(function () {
            document.querySelector("#growth").style.width = `${timer++}%`
        }, 20)
    } else {
        timer = 0
    }
})
var array = [{ profiles: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1628565210854-2974e7a89772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbCUyMHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "current_affair" },
{ profiles: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1667156553044-3dc5cef22e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", name: "animal_lover" },
{ profiles: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "nature_beauty" },
{ profiles: "https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "gk_facts" },
{ profiles: "https://images.unsplash.com/photo-1517805686688-47dd930554b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1670100053465-aacb32bf96ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "aispirants" },
{ profiles: "https://images.unsplash.com/photo-1615212123996-f21711429486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", posts: "https://images.unsplash.com/photo-1603029084766-3ddc1c5c7e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGlhcyUyMHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name: "lbsnaaquotes" },]
var clutter1 = "";
array.forEach(function (val, idx) {
    clutter1 += ` 
    <div class = "post-div"> 
    <div id="menu">
    <div id="content">
         <h4>${val.name} <span> song </span></h4>
     </div>
     <div id="items">
         <i class="ri-more-2-fill"></i>
     </div>
    <div id="profile">
         <img ${idx} src="${val.profiles}"
             alt="">
     </div>
 </div>
 <div class="post">
 <div class="heart">
 <img src="kindpng_3242169.png" alt="">
</div>
     <img ${idx} src="${val.posts}"
         alt="">
 </div>
 <div id="likes">
     <div id="leftl"> <i  class="ri-heart-line post-like"></i>
         <i class="ri-chat-3-line"></i>
         <i class="ri-send-plane-line"></i>
     </div>
     <div id="rightr"><i class="ri-bookmark-line"></i>
     </div>
 </div>
 </div> `
})
document.querySelector("#box").innerHTML = clutter1;
var instalike = document.querySelectorAll(".post");
var postLike = document.querySelectorAll('.post-like');
instalike.forEach((elem) => {
    elem.addEventListener('dblclick', function (dets) {
        dets.path[2].children[2].children[0].children[0].classList.remove("ri-heart-line")
        dets.path[2].children[2].children[0].children[0].classList.add("ri-heart-fill")
        dets.path[2].children[2].children[0].children[0].style.color = "red";
               dets.target.parentElement.children[0].style.display = "initial";
        setTimeout(function () {
            dets.target.parentElement.children[0].style.display = "none";
        }, 1000)
    })
})
// var flag = 0;
// var stry = document.querySelector("#story")
// for (let flag = 0; flag < Infinity; flag++) {
   

//     // document.querySelector("#fs").style = "infinite"
//   }