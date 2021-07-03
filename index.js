const mode=document.getElementById("mode");
// day night mode code
mode.addEventListener("click",(e)=>{
    console.log(e.target.className)
    if (e.target.className=="fas fa-sun day"){
        //changing to dark mode
        e.target.className="fas fa-moon night";
        document.getElementById("navbar").style.backgroundColor="rgb(22, 22, 23)";
        document.getElementsByClassName("content")[0].style.color="rgb(173 ,212 ,199)";
        document.getElementsByClassName("content")[1].style.color="rgb(173 ,212 ,199)";
        document.getElementsByClassName("content")[2].style.color="rgb(173 ,212 ,199)";
        document.getElementsByTagName("body")[0].style.backgroundColor="rgb(14 19 19 / 88%)";
        document.getElementById("blogcontainer").style.setProperty("background-color","#4d52522e");
        
        document.getElementById('blogCard').style.color="rgb(197 230 219)";

   

    }
    else{
        // changing to light mode
        e.target.className="fas fa-sun day";
        document.getElementById("navbar").style.setProperty("background-color","rgb(65, 59, 71)");
        document.getElementsByClassName("content")[0].style.color="rgb(10, 134, 93)"
        document.getElementsByClassName("content")[1].style.color="rgb(10, 134, 93)"
        document.getElementsByClassName("content")[2].style.color="rgb(10, 134, 93)"
       
        document.getElementById("blogcontainer").style.setProperty("background-color","rgba(209, 226, 226, 0.322)") 
        document.getElementsByTagName("body")[0].style.setProperty("background-color","rgba(209, 226, 226, 0.322)");
        document.getElementById('blogCard').style.setProperty("color","rgb(91, 100, 97)");

    }
})

// working on comment section
const comment=document.getElementById("comment")
const commentform=document.getElementById("commentform");
commentform.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("clicked")
    if (comment.value.trim().length>0){
        let previouscomment=document.getElementById("addedcomment").innerHTML;
        document.getElementById("addedcomment").innerHTML="";

        let p=document.createElement("p");
        p.className="commentclass";    
        p.innerText=comment.value;
        document.getElementById("addedcomment").append(p);
        document.getElementById("addedcomment").innerHTML+=previouscomment;

        comment.value="";
        // document.getElementById("addedcomment").innerText=comment.value;
    }
 
})

//show comment
const showcomment=document.getElementById("showcomment");
const hidecomment=document.getElementById("hidecomment");
var showcommentclick=0;
showcomment.addEventListener("click",()=>{
    if (showcommentclick==0){
        document.getElementById("addedcomment").style.display="";
        showcommentclick+=1;
        // showcomment.style.display="hidden";
        // hidecomment.style.display="";
        console.log("iff show 00")
    }
    
})

// hide comment


hidecomment.addEventListener("click",()=>{

    showcommentclick=0;
    console.log("else show 11")
    document.getElementById("addedcomment").style.display="none";
    showcomment.style.display="";
    // hidecomment.style.display="hidden";

})
