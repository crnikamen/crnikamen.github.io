            var i=0;
            var c=0;//les
            var jack=0;//gozdar
            var stil=0;//neuporabljen ?
            var cena=10;//cena gozdarja
            var cenat=10000;//cea nadgradnje gozdarja
            var gold=0.90;//cena lesa
            var dnar=0;//denar
            var polog =0;
            var krompir = 100;
            var grd=0;//zlata sekira
            var crjack=0;//crazy gozdar
            var lajack=0;//lazy gozdar
            var trjack=0;//tryhard gozdar
            var jtalent=0; //stevilo nadgradenj
            var tprob=0.001;//random upgrades for lazy gozdar
            var sktgozdar=0; //skuno število c,l,t, gozdarjev
            var lastev=0;
            var larand=0;
            var nagraa=0;
            var upcena=10000;
            var interval= setInterval(izpis,100);
            var inp = document.getElementById("nadgra");
            var upcen=document.getElementById("nadge");
            var upgrade=document.getElementById("nadgradnje");
            var kro= document.getElementById("progs");
            var krot = document.getElementById("progt");
            var tovor = document.getElementById("prv");
            var tovor2 = document.getElementById("prev");
            var tovor3 = document.getElementById("prevo");
            var mozup=0;
            var skll= 200;
            var krocena=500;
            var dvlog =0;
            var prod =0;
            var rprod=0;
            var sprod=0;
            var hprod=500;
            var shranjuj= 'false';
            var vel_bank= 100;
            var vse =0;
            var mprez=50;
            var kprez=0;
            var tprez=0;
            var pot=100;
            var prvv=0;
            var cnt= 500;
            var at= 100000;
            var auto_t=0;
            var cena_pre= 5;
    
            var dico =0;


        function izpis(){
                
                            
                 document.getElementById("izpis").innerHTML = c.toFixed(2);
                 document.getElementById("jack").innerHTML = jack;
                document.getElementById("cena").innerHTML = cena.toFixed(2);
                document.getElementById("gold").innerHTML = gold;
                document.getElementById("dnar").innerHTML = dnar.toFixed(2);
                document.getElementById("polog").innerHTML = polog.toFixed(2);
                document.getElementById("krompir").innerHTML = krompir.toFixed(2);
                document.getElementById("grd").innerHTML = grd;
                document.getElementById("cjack").innerHTML = crjack;
                document.getElementById("ljack").innerHTML = lajack;
                document.getElementById("tjack").innerHTML = trjack;
                document.getElementById("nasek").innerHTML = (((0.02*jack+(crjack*0.1)+(trjack*0.05)+(lajack*0.01))*(nagraa/100+1))*10).toFixed(2);
                document.getElementById("nadge").innerHTML = nagraa;
                document.getElementById("ucena").innerHTML = upcena.toFixed(2);
                document.getElementById("moz").innerHTML = mozup;
                document.getElementById("skladk").innerHTML= skll;
                document.getElementById("krocc").innerHTML= krocena.toFixed(2);
                document.getElementById("vloga").innerHTML= dvlog.toFixed(2);
                document.getElementById("obrest").innerHTML= (polog*0.78).toFixed(2);
                document.getElementById("ttcena").innerHTML= cenat;
                document.getElementById("bank_cena").innerHTML= (vel_bank/10);
                document.getElementById("prodaja").innerHTML =prod.toFixed(2);
                document.getElementById("vse").innerHTML =vse.toFixed(2);
                document.getElementById("prez").innerHTML =mprez.toFixed(2);
                document.getElementById("kolipr").innerHTML =kprez.toFixed(2);
                document.getElementById("prvv").innerHTML =prvv.toFixed(2);
                document.getElementById("cena_nad_truck").innerHTML =cnt.toFixed(2);
                document.getElementById("auto_truck").innerHTML =at;
                kro.style.width =((krompir/skll)*100)+"%";
                krot.innerHTML =((krompir/skll)*100).toFixed(2)+"%";
                tovor2.style.width =((tprez/pot)*100);
                tovor3.innerHTML=((tprez/pot)*100).toFixed(0);
                banka();
                lumber();
                lazy();
                gumbi();
                sell();
                time_prevoz();
                if(auto_t==1 && c>0){
                    prevoz();
                }
           
                startt();
           
                
            
                
            }

            
        function lumberjack(){
                if(dnar>=cena){
                    dnar=dnar-cena;
                    jack=jack+1;
                    cena=cena*1.125;
                }
            }
         
        function lumber(){
                if(jack>0 && krompir>=jack){
                 sktgozdar=crjack+trjack+lajack;   
                vse=vse+((0.02*jack+(crjack*0.1)+(trjack*0.05)+(lajack*0.01))*(nagraa/100+1));
                c=c+((0.02*jack+(crjack*0.1)+(trjack*0.05)+(lajack*0.01))*(nagraa/100+1));
                krompir=krompir-((0.006*jack)+(0.012*crjack)+(0.010*lajack)+(0.007*trjack));
                    
                }
            }
            
        function chop(){
                c=c+1+(10*grd);
                vse=vse+1+(10*grd); 
            }
            
        function prevoz(){
            
            if(prvv==0){
            if(c<=mprez){
                kprez=kprez+c;
                prvv=1;
                c=0;
                dnar=dnar-cena_pre;
            }
            else{
                kprez=kprez+mprez;
                prvv=1;
                c=c-mprez;
                dnar=dnar-cena_pre;
            }
            }
        }
        
        function truck_nad(){
            if(dnar>=cnt){
                mprez=mprez*10;
                cena_pre=cena_pre+10;
                dnar=dnar-cnt;
                cnt=cnt*10;
            }
        }

        function truck_auto(){
            if(dnar>=100000){
            auto_t=1;
            dnar=dnar-100000;    
            }
        }

        function time_prevoz(){
            if(prvv==1){
            
                    tprez=tprez+1;
                    if(tprez==pot){
                    prod=prod+kprez;
                        kprez=0;
                        tprez=0;    
                    prvv=0;
                }
            }
        }

       

        function sell(){
            sprod=sprod+1;
            if(sprod==hprod){
                if(prod<0){
                    prod=0;
                }
            if(prod>0){
                rprod=(Math.floor((Math.random() * prod) + 1))
                prod=prod-rprod;
                dnar=dnar+(rprod)*gold;
                
            }
            sprod=0;
                if(prod<0){
                    prod=0;
                }
            }
        }
        

        function obresti(){
            if(dnar>0){
            polog=polog+dnar;
            dvlog=dvlog+dnar;
            dnar=0;
            }
            
        }

        function banka(){
            
            if(polog<vel_bank){
            polog=polog*(1+1/(vel_bank*10));
            }
            
        }
        
        function dvig(){
            if(polog<vel_bank){
            dnar=dnar+ polog*0.78;
            polog=0;
                dvlog=0;
            }
            else if(polog>vel_bank){
                dnar=dnar+ polog;
            polog=0;
                dvlog=0;
            }
        }   

        function nadbank(){
            if(dnar>=(vel_bank/10)){
                dnar= dnar -(vel_bank/10);
                vel_bank=vel_bank*10;
                
            }
        }
        
        function krompir2(){
            if(dnar>=25){
                if(krompir+100<=skll){
                krompir=krompir+100;
                dnar=dnar-25;
                }
            }
            
        }

        function krompir1(){
            
            if(dnar>=2500){
                if(krompir+10000<=skll){
                krompir=krompir+10000;
                dnar=dnar-2500;
                }
            }
            
        } 
        
//        function kupiles(){
//                c=c+dnar*0.95;
//                dnar=0;
//            }
        
        function talent(){
            if(dnar>cenat){
                dnar=dnar-cenat;
                jtalent=jack*tprob;
                
                for(;jtalent>0;jtalent--){
                    if(jack>1){
                    switch(Math.floor((Math.random() * 3) + 1)){
                        case 1:
                            crjack=crjack+1;
                            jack= jack -1;
                            break;
                            
                        case 2:
                            lajack=lajack+1;
                            jack= jack -1;
                            break;
                            
                        case 3:
                            trjack=trjack+1;
                            jack= jack -1;
                            break;                            
                    }
                }
                }
            }
        }

        function lazy(){
            for(lastev=0;lastev<lajack;lastev++){
                larand= Math.floor((Math.random() * 500000) + 1);
                if(larand==42){
                    mozup=mozup+1;
                }
                
            }
        }

        function nadgrad(){
            if(mozup>0){
                if(dnar>=upcena){
                dnar=dnar-upcena;
            nagraa=nagraa+10;
                upcena=upcena*1.1;
                mozup=mozup-1;
                }
            }
        }

        function krosklad(){
            if(dnar>=krocena){
                dnar=dnar-krocena;
                krocena=krocena*1.5;
                skll=skll*2;
            }
        }

        function gumbi(){
            if(upcena>dnar){
                if(mozup==0){
                document.getElementById("nadgra").style.backgroundColor = "grey";
                }
            }
                else{
                    document.getElementById("nadgra").style.backgroundColor = "darkgreen";

                }
            
            
            if(krocena>dnar){
                document.getElementById("kronad").style.backgroundColor = "grey";
            }
            
                else{
                document.getElementById("kronad").style.backgroundColor = "darkgreen";
                }
            
            
            if(cena>dnar){
                document.getElementById("gozdar").style.backgroundColor = "grey";
            }
                else{
                    document.getElementById("gozdar").style.backgroundColor = "darkgreen";
                   
                }
            
            
            if(cenat>dnar){
                document.getElementById("talev").style.backgroundColor = "grey";
            }
            
                else{
                document.getElementById("talev").style.backgroundColor = "darkgreen";
                }
        
            if(dnar<25){
                document.getElementById("krosto").style.backgroundColor = "grey";
            }
                
                else{
                    document.getElementById("krosto").style.backgroundColor = "darkgreen";
                }
            
            if(dnar<2500){
                document.getElementById("krotis").style.backgroundColor = "grey";
            }
            
                else{
                    document.getElementById("krotis").style.backgroundColor = "darkgreen";
                }
            
            if(dnar<(vel_bank/10)){
                document.getElementById("nadban").style.backgroundColor = "grey";
            }
                else{
                    document.getElementById("nadban").style.backgroundColor = "darkgreen";
                }
            
            if(dnar<(1000000)){
                document.getElementById("grad").style.backgroundColor = "grey";
            }
                else{
                    document.getElementById("grad").style.backgroundColor = "darkgreen";
                }
            
            if(dnar<cnt){
                document.getElementById("nad_truck").style.backgroundColor = "grey";
            }
                else{
                    document.getElementById("nad_truck").style.backgroundColor = "darkgreen";
                }
            
            if(dnar<100000){
                document.getElementById("auto_truck").style.backgroundColor = "grey";
            }
                else{
                    document.getElementById("auto_truck").style.backgroundColor = "darkgreen";
                }
        }
        
        function storage(){
           
            
            localStorage.setItem('c', c);
            localStorage.setItem('jack', jack);
            localStorage.setItem('stil', stil);
            localStorage.setItem('cena', cena);
            localStorage.setItem('gold', gold);
            localStorage.setItem('dnar', dnar);
            localStorage.setItem('polog', polog);
            localStorage.setItem('krompir', krompir);
            localStorage.setItem('crjack', crjack);
            localStorage.setItem('lajack', lajack);
            localStorage.setItem('trjack', trjack);
            localStorage.setItem('nagraa', nagraa);
            localStorage.setItem('mozup', mozup);
            localStorage.setItem('upcena', upcena);
            localStorage.setItem('skll', skll);
            localStorage.setItem('krocena', krocena);
            localStorage.setItem('dvlog', dvlog);
            localStorage.setItem('prod', prod);
            localStorage.setItem('vse', vse);
            localStorage.setItem('vel_bank', vel_bank);
            localStorage.setItem('cnt', cnt);
            localStorage.setItem('mprez', mprez);
            localStorage.setItem('kprez', kprez);
            localStorage.setItem('tprez', tprez);
            localStorage.setItem('pot', pot);
            localStorage.setItem('cena_pre', cena_pre);
            alert('Shranjeno');

        } 
        


/*load();*/

    
        function load(){
            c=Number(localStorage.getItem("c"));
            jack=Number(localStorage.getItem("jack"));
            stil=Number(localStorage.getItem("stil"));
            cena=Number(localStorage.getItem("cena"));
            gold=Number(localStorage.getItem("gold"));
            dnar=Number(localStorage.getItem("dnar"));
            polog=Number(localStorage.getItem("polog"));
            krompir=Number(localStorage.getItem("krompir"));
            crjack=Number(localStorage.getItem("crjack"));
            lajack=Number(localStorage.getItem("lajack"));
            trjack=Number(localStorage.getItem("trjack"));
            nagraa=Number(localStorage.getItem("nagraa"));
            mozup=Number(localStorage.getItem("mozup"));
            upcena=Number(localStorage.getItem("upcena"));
            skll=Number(localStorage.getItem("skll"));
            krocena=Number(localStorage.getItem("krocena"));
            dvlog=Number(localStorage.getItem("dvlog"));
            prod=Number(localStorage.getItem("prod"));
            vel_bank=Number(localStorage.getItem("vel_bank"));
            vse=Number(localStorage.getItem("vse"));
            cnt=Number(localStorage.getItem("cnt"));
            mprez=Number(localStorage.getItem("mprez"));
            kprez=Number(localStorage.getItem("kprez"));
            tprez=Number(localStorage.getItem("tprez"));
            pot=Number(localStorage.getItem("pot"));
            cena_pre=Number(localStorage.getItem("cena_pre"));
            alert('Nalozeno');
        }    


        function grad(){
            if(dnar>=1000000){
                dnar=dnar-1000000;
                grd=grd+1;
                alert('Lepo je biti miljonar.');
            }
        }
  
//--------------------------------------------------------------------disco

r=255;
g=255;
b=255;
flag=0;
t=new Array;
o=new Array;
d=new Array;

function hex(a,c)
{
t[a]=Math.floor(c/16)
o[a]=c%16
switch (t[a])
{
case 10:
t[a]='A';
break;
case 11:
t[a]='B';
break;
case 12:
t[a]='C';
break;
case 13:
t[a]='D';
break;
case 14:
t[a]='E';
break;
case 15:
t[a]='F';
break;
default:
break;
}
switch (o[a])
{
case 10:
o[a]='A';
break;
case 11:
o[a]='B';
break;
case 12:
o[a]='C';
break;
case 13:
o[a]='D';
break;
case 14:
o[a]='E';
break;
case 15:
o[a]='F';
break;
default:
break;
}
}

function ran(a,c)
{
if ((Math.random()>2/3||c==0)&&c<255)
{
c++
d[a]=2;
}
else
{
if ((Math.random()<=1/2||c==255)&&c>0)
{
c--
d[a]=1;
}
else d[a]=0;
}
return c
}
function do_it(a,c)
{
if ((d[a]==2&&c<255)||c==0)
{
c++
d[a]=2
}
else
if ((d[a]==1&&c>0)||c==255)
{
c--;
d[a]=1;
}
if (a==3)
{
if (d[1]==0&&d[2]==0&&d[3]==0)
flag=1
}
return c
}
function disco()
{
if (flag==0)
{
r=ran(1, r);
g=ran(2, g);
b=ran(3, b);
hex(1,r)
hex(2,g)
hex(3,b)
document.getElementById("haha").style.background="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3]
flag=50
}
else
{
r=do_it(1, r)
g=do_it(2,g)
b=do_it(3,b)
hex(1,r)
hex(2,g)
hex(3,b)
document.getElementById("haha").style.background="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3]
flag--
}

setTimeout('disco()',5)
}

//-----------------------------------------------------------------------------------------


function RandomObjectMover(obj, container) {
	this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 250;
  this.current_position = { x: 0, y: 0 };
  this.is_running = false;
}

// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
	this.pixels_per_second = pxPerSec;
}

RandomObjectMover.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
}

RandomObjectMover.prototype._generateNewPosition = function() {

	// Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
	var availableHeight = 360;
  var availableWidth = 690;
    
  // Pick a random place in the space
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);
    
  return { x: x, y: y };    
}

RandomObjectMover.prototype._calcDelta = function(a, b) {
	var dx   = a.x - b.x;         
  var dy   = a.y - b.y;         
  var dist = Math.sqrt( dx*dx + dy*dy ); 
  return dist;
}

RandomObjectMover.prototype._moveOnce = function() {
		// Pick a new spot on the page
    var next = this._generateNewPosition();
    
    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);
    
		// Speed of this transition, rounded to 2DP
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;
    
    //console.log(this.current_position, next, delta, speed);
          
    this.$object.style.transition='transform '+speed+'s linear';
    this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';
    
    // Save this new position ready for the next call.
    this.current_position = next;
  
};

RandomObjectMover.prototype.start = function() {

	if (this.is_running) {
  	return;
  }

	// Make sure our object has the right css set
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
	
  this.boundEvent = this._moveOnce.bind(this)
  
  // Bind callback to keep things moving
  this.$object.addEventListener('transitionend', this.boundEvent);
  
  // Start it moving
  this._moveOnce();
  
  this.is_running = true;
}

RandomObjectMover.prototype.stop = function() {

	if (!this.is_running) {
  	return;
  }
  
  this.$object.removeEventListener('transitionend', this.boundEvent);
  
	this.is_running = false;
}


// Init it
var x = new RandomObjectMover(document.getElementById('sl1'), window);
var x1 = new RandomObjectMover(document.getElementById('sl2'), window);
var x2 = new RandomObjectMover(document.getElementById('sl3'), window);


// Toolbar stuff
document.getElementById('start').addEventListener('click', function(){
	x.start();
	x1.start();
	x2.start();
});
document.getElementById('stop').addEventListener('click', function(){
	x.stop();
	x1.stop();
	x2.stop();
});
document.getElementById('speed').addEventListener('keyup', function(){
  if (parseInt(this.value) > 3000 ) {
 		alert('Don\'t be stupid, stupid');
    this.value = 250;
  }
	x.setSpeed(parseInt(this.value));
	x1.setSpeed(parseInt(this.value));
	x2.setSpeed(parseInt(this.value));
});


// Start it off


function startt(){
    x.stop();
	x1.stop();
	x2.stop();
    
    x.start();
x1.start();
x2.start();
}




