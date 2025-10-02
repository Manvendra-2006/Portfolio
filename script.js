var tablinks = document.getElementsByClassName("teb-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active");
}
var tablinks2 = document.getElementsByClassName("tab-links");
var tabcontents2 = document.getElementsByClassName("tab-contents2");
function opentab1(tabname1){
        for(tablink2 of tablinks2){
            tablink2.classList.remove("active-links2");
        }
        for(tabcontent2 of tabcontents2){
            tabcontent2.classList.remove("active2");
        }
        event.currentTarget.classList.add("active-links2");
        document.getElementById(tabname1).classList.add("active2")
}
