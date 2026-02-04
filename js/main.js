const dolls =["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]

function grabDoll(dolls){
	  var bag=[];
	  //coding here
	for(let i = 0; i < dolls.length; i++) {
		if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
			bag.push(dolls[i])
		} else {

			continue
		}

	}
	  
	    return bag;
}
console.log(grabDoll(dolls))
