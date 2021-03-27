//------------------------------------------------interval
var interval= setInterval(izpis,100);
//------------------------------------------------spremenljivke Acc
var know = 0;
var understand = 0;
var cas = 0;
//------------------------------------------------spremenljivke kamen
var kamen = 1;
var klik = 1;

var d_enr = 0;
var d_enr_sec = 0;
var skp_d_enr = 0;

var d_matter = 0.01;
var p_matter = 0.01;
var h_matter = 0.0001;

var d_obeli = 0;
var build_obeli = 10;//price
//------------------------------------------------idea var
var ideas= ['nothing', 'Obelisk',]

var ideaa = document.getElementById("idea").value;

//------------------------------------------------convert var
var d_convert = 0;
var d_enre_coning = 0;
var d_enrm_coning = 0;
var d_enr_mat_rate = 0.1;
var d_enr_enrm_rate = 0.01;

//------------------------------------------------funkcije izpis


function izpis(){
    document.getElementById("d_enr").innerHTML = d_enr.toFixed(2);
    document.getElementById("d_enre").innerHTML = d_enre_coning.toFixed(2);
    document.getElementById("d_enrm").innerHTML = d_enrm_coning.toFixed(2);
    
    document.getElementById("d_enr_sec").innerHTML ="("+ d_enr_sec.toFixed(2) + "/sec)";
    
    document.getElementById("skp_d_enr").innerHTML = skp_d_enr.toFixed(2);
    document.getElementById("d_mat").innerHTML = d_matter.toFixed(2);
    document.getElementById("d_ob").innerHTML = d_obeli.toFixed(0);
    document.getElementById("t_znanje").innerHTML = know.toFixed(0);
    document.getElementById("t_razumevanje").innerHTML = understand.toFixed(0);
    document.getElementById("t_cas").innerHTML = cas.toFixed(0) +"sec";
    
    
    
    
    
    document.getElementById("test").innerHTML = ideaa;
    
    cas1();
    converttt();
    pas_mat()
    hlap_mat()
}
//----------------------------------osnova
function cas1(){
    cas=cas+1/10;
}

function prah(){
    d_enr = d_enr + klik;
    skp_d_enr = skp_d_enr +klik;
}

function pas_mat(){
    if(d_matter>0){
        d_enr = d_enr + (d_matter* p_matter);
        skp_d_enr = skp_d_enr + (d_matter* p_matter);
        d_enr_sec =(d_matter* p_matter)*10;
    }
}

function hlap_mat(){
    if(d_matter>0){
        d_matter = d_matter - (d_matter* h_matter);
    }
}


//---------------------------------converting stuff
function converttt(){
    if(d_enre_coning>0){
        d_enre_coning = d_enre_coning - d_enr_enrm_rate;
        d_enrm_coning = d_enrm_coning + (d_enr_enrm_rate* d_enr_mat_rate);
        document.getElementById("trn_enr_c").style.animation ="converting 1s infinite";
    }
    else{
        document.getElementById("trn_enr_c").style.animation ="paused";
        return;
    }
    
    if(d_enre_coning<=0 && d_enrm_coning>0){
        d_matter = d_matter + d_enrm_coning;
        d_enrm_coning = 0;
        d_enre_coning = 0;
    }
}

function convert_enr(){
    d_convert = document.getElementById("con_enr").value;
    if(d_enr>0){
        if(d_convert<=d_enr){
            d_enre_coning = d_enre_coning + +d_convert;
            d_enr = d_enr - d_convert;
            
        }
        else if(d_convert>d_enr){
            d_enre_coning = d_enre_coning + d_enr;
            d_enr = 0;
        }
        else{
            return;
        }
    }
}
function convert_enr_all(){
    if(d_enr>0){
        d_enre_coning = d_enre_coning + d_enr;
        d_enr = 0;
    }
    else{
        retun;
    }
}


//------------------------------------------------------------ideas
function idea_f(){
    ideaa = document.getElementById("idea").value;
    document.getElementById("test").innerHTML = ideaa;
    
    for(i=0;i<=ideas.length; i++){
        if(ideas[i]==ideaa){
            
            switch(ideaa){
                case "nothing":
                    alert("You had an productive thought! And have unlocked conversion between Dark energy and dark matter.");
                    document.getElementById("create_mat").style.display = "block";
                    break;
            }
                
            
        }
    }
    
}

//------------------------------------------------gumbi
