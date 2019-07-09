/* Sass Document */
var line1 = document.getElementById('line10');
var line2 = document.getElementById('line11');
var line3 = document.getElementById('line12');
var line4 = document.getElementById('line13');
var line5 = document.getElementById('line14');
var line6 = document.getElementById('line15');
var line7 = document.getElementById('line16');
var line8 = document.getElementById('line17');
var line9 = document.getElementById('line18');


var load = document.getElementById('loadId');
var score = 0;


var victoryKre = document.getElementById('victoryKre');
var victoryNol = document.getElementById('victoryNol');


console.log(load);
var array2 = [];// массив до начала игры изменяющийся


for (var i = 0; i < 9; i++){
	
		array2[i] = {
		kre: true,
		nol: true
		
	};
	

}


//Проверка  пользователем элемента array2 на занятость
var test1 = function (a){
	
		
		if(a.kre && a.nol) {
			
			a.kre = false;
			
			if(a === array2[0]){
				activeKre(line1);}
			if(a === array2[1]){
				activeKre(line2);}
			if(a === array2[2]){
				activeKre(line3);}
			if(a === array2[3]){
				activeKre(line4);}
			if(a === array2[4]){
				activeKre(line5);}
			if(a === array2[5]){
				activeKre(line6);}
			if(a === array2[6]){
				activeKre(line7);}
			if(a === array2[7]){
				activeKre(line8);}
			if(a === array2[8]){
				activeKre(line9);}
			
				victory1();
			
			setTimeout(loadMess, 200);		
		setTimeout(time1, 2000);
			
			
			
		}
		
		
	
		
	
};

var victory1 = function () {
	
		
	for(var i = 0; i <= array2.length; i++){
		
		if(!array2[0].kre && !array2[1].kre && !array2[2].kre || !array2[3].kre && !array2[4].kre && !array2[5].kre || !array2[6].kre && !array2[7].kre && !array2[8].kre || !array2[0].kre && !array2[3].kre && !array2[6].kre || !array2[1].kre && !array2[4].kre && !array2[7].kre || !array2[2].kre && !array2[5].kre && !array2[8].kre || !array2[0].kre && !array2[4].kre && !array2[8].kre || !array2[2].kre && !array2[4].kre && !array2[6].kre) 
		
		{
			
	setTimeout(	function() {
			var victoryKre = 	document.getElementById('victoryKre');
		victoryKre.classList.add('load_active');}, 300);	
			
			console.log("Победитель найден! крестик!");}
		
		
	}
}


var victory2 =function (){
	
	for(var i = 0; i <= array2.length; i++){
		
		if(!array2[0].nol && !array2[1].nol && !array2[2].nol || !array2[3].nol && !array2[4].nol && !array2[5].nol || !array2[6].nol && !array2[7].nol && !array2[8].nol || !array2[0].nol && !array2[3].nol && !array2[6].nol || !array2[1].nol && !array2[4].nol && !array2[7].nol || !array2[2].nol && !array2[5].nol && !array2[8].nol || !array2[0].nol && !array2[4].nol && !array2[8].nol || !array2[2].nol && !array2[4].nol && !array2[6].nol) 
			{
								
setTimeout(	function() {
			var victoryNol = 	document.getElementById('victoryNol');
		victoryNol.classList.add('load_active');}, 300);
				
				console.log("Победитель найден! нолик!");}
		
		
		
	}
	
	
}


//вывод вообщения ДУМАЮ...
var loadMess = function () {
	
	load.classList.add('load_active');
	
setTimeout( function(){load.classList.remove('load_active')}, 1700)
}




//функция задержки по времени появления крестика
var time1 = function (){
	test2(array2[gen1(0, 8)]);}

//проверка компьютером элемента array2 на занятость
var test2 = function (a){
	
		
		if(a.kre && a.nol) {
			
						
			a.nol = false;
			
	if(a === array2[0])	{
		passive(line1);	
	}
	if(a === array2[1])	{
		passive(line2);	
	}			
	if(a === array2[2])	{
		passive(line3);	
	}			
	if(a === array2[3])	{
		passive(line4);	
	}			
	if(a === array2[4])	{
		passive(line5);	
	}			
	if(a === array2[5])	{
		passive(line6);	
	}	
	if(a === array2[6])	{
		passive(line7);	
	}
	if(a === array2[7])	{
		passive(line8);	
	}
	if(a === array2[8])	{
		passive(line9);	
	}
		victory2();	
			
 }
	 else {
		 
		 if(score <= 8){
		 
			 test2(array2[gen1(0, 8)]);
		 }
		 
		 
	 }	
			
};


//функция добавления крестика
	var activeKre = function (d){
	
		score++;
	var active1 = d.querySelector('.active1_1');
			active1.classList.add('active_0');
};

//функция добавления нолика
	var passive = function (c) {
		
		score++;
		var passive1 = c.querySelector('.active1_2');
		passive1.classList.add('active_0');
};


//Функция генерации случайного часла
var gen1 = function generateRandomInteger(min, max) {
		 return Math.floor(min + Math.random()*(max+1 - min));}

	
	



line1.addEventListener('click', function(){
	
	test1(array2[0]);

		
});

line2.addEventListener('click', function(){
	
	test1(array2[1]);
	
	
});

line3.addEventListener('click', function(){
	
	test1(array2[2]);
	
	
});

line4.addEventListener('click', function(){
	
	test1(array2[3]);
	
	
});

line5.addEventListener('click', function(){
	
	test1(array2[4]);
	
	console.log("array2[4]");
});
line6.addEventListener('click', function(){
	
	test1(array2[5]);
	
	
});
line7.addEventListener('click', function(){
	
	test1(array2[6]);
	
	
});
line8.addEventListener('click', function(){
	
	test1(array2[7]);
	
	
});
line9.addEventListener('click', function(){
	
	test1(array2[8]);
	
	
});











/*//функция добавления крестика  
 var active = function(a) {
	 
	var active1 = a.querySelector('.active1_1');
	active1.classList.add('active_0');
	 
};

//функция случайного числа
 var gen1 = function generateRandomInteger(min, max) {
		 return Math.floor(min + Math.random()*(max+1 - min));
 }
//функция добавления нолика
	var passive = function (c) {
		var passive1 = c.querySelector('.active1_2');
		passive1.classList.add('active_0');
	}
	
	
//ход компьютера	
 var comp1 = function(gen(1, 3)) {
	 if(array1[gen1].vol){
		
	 }
 }
	 
;

 
 line0.addEventListener('click', function(){
	
	 if(array1[0].vol) {
	
		passive(this);}
	 
	 array1[0].vol = false;
	 console.log(array1[0].vol);
	 generateRandomInteger(1, 3);
});


line1.addEventListener('click', function(){
	 
		if(array1[1].vol) {
	
		active(this);}
	 
	 array1[1].vol = false;
	console.log(array1[1].vol); 
});


line2.addEventListener('click', function(){
	 
		if(array1[2].vol) {
	
		active(this);}
	 
	array1[2].vol = false;
	console.log(array1[2].vol); 
});


 console.log(gen1(1, 3));	 

/*ф-ция проверки массива
var test1 = function (b){
	
	for(var i = 0; i < b.length; i++){
		if(b[i].vol == true) {
			console.log([i] + " удален!");
			line[i].removeEventListener('click', function(){})
		}
	}
};






line1.addEventListener('click', function(){
	active(array1);
});

line2.addEventListener('click', function(){
	active(this);
	a = 3;
});
line3.addEventListener('click', function(){
	active(this);
	a = 4;
});
line4.addEventListener('click', function(){
	active(this);
});
line5.addEventListener('click', function(){
	active(this);
});
line6.addEventListener('click', function(){
	active(this);
});
line7.addEventListener('click', function(){
	active(this);
});
line8.addEventListener('click', function(){
	active(this);
});*/