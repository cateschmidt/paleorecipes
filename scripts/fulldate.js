const datefield = document.querySelector(".date");
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
console.log(fulldateUK);
datefield.innerHTML = 
`<em>${fulldateUK}</em>`;