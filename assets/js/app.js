/*
   Author: Inaamajay
   Email: support@Inaamajay.in
   Website: https://Inaamajay.in
   Version: 1.0.0
   Created: July 2022
   File Description: Main JS file of the
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Calculate            *
 *     02.  Dark & Light Mode    *
 *     03.  LTR & RTL Mode       *
 ================================*/
 
 /*********************/
/* Calculate */
/*********************/
 function appendToResult(value) {
    document.getElementById("Calculate").value += value;
}

function clearResult() {
    document.getElementById("Calculate").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("Calculate").value);
        console.log(result)
        document.getElementById("Calculate").value = result;
    } catch (error) {
        document.getElementById("Calculate").value = "Error";
    }
}

/*********************/
/* Dark & Light Mode */
/*********************/
try {
    function changeTheme(e){
        e.preventDefault()
        const htmlTag = document.getElementsByTagName("html")[0]
        
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    const switcher = document.getElementById("theme-mode")
    switcher?.addEventListener("click" ,changeTheme )
    
    const chk = document.getElementById('chk');

    chk.addEventListener('change',changeTheme);
} catch (err) {
    
}


/*********************/
/* LTR & RTL Mode */
/*********************/
try{
    const htmlTag = document.getElementsByTagName("html")[0]
    function changeLayout(e){
        e.preventDefault()
        const switcherRtl = document.getElementById("switchRtl")
        if(switcherRtl.innerText === "LTR"){
            htmlTag.dir = "ltr"
        }
        else{
            htmlTag.dir = "rtl"
        }
        
    }
    const switcherRtl = document.getElementById("switchRtl")
    switcherRtl?.addEventListener("click" ,changeLayout )
}
catch(err){}


/*********************/
/*   Feather Icons   */
/*********************/
feather.replace();
