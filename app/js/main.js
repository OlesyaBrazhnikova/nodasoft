var swiper = new Swiper('.swiper', {
	breakpoints: {
		320: {
		  slidesPerView: 1.25,
		  spaceBetween: 10
		},
		640: {
		  slidesPerView: 2.25,
		  spaceBetween: 20
		},
		992: {
			slidesPerView: 3.25,
		  	spaceBetween: 20
		},
		1200: {
			slidesPerView: 4.25,
		  	spaceBetween: 30
		}
	  }
});

const palindrome = (str) => {
	const string = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');
	for (let i = 0; i < string.length/2; i++) {
		if (string[i] !== string[string.length -1 -i]) {  
		return false;
		} 
	}
	return true;
}
console.log(palindrome('_level'));


const multiplyAll = arr => arr.reduce((a,b)=> a*b,1);
console.log(multiplyAll([1,2,3,4]));


const wordsToMarks = string => [...string].reduce((res, c) => res += c.charCodeAt() - 96, 0)
console.log(wordsToMarks('hello'));


const objects = [
	{id:1, name:"Test 1", object_type: 1},
	{id:2, name:"Test 2", object_type: 1},
	{id:3, name:"Test 3", object_type: 2},
	{id:4, name:"Test 4", object_type: 3},
]

const object_types = [
	{id:1, class:"Устройства"},
	{id:2, class:"Устройства"},
	{id:3, class:"Порты"},
	{id:4, class:"Кабели"},
]

// console.log(object_types)
// objects.filter(x => x.object_type === 1)

const stringName = () => {
	const arr = [];
	object_types.filter(x => x.class === 'Устройства').map(x => objects.map(y => x.id === y.object_type ? arr.push(y.name) : null))
	return arr.join(',')
}
stringName()
