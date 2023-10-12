// Please tidy this file up until line 43 where it says "⛔ STOP"

/* 						👀 Expected output:

							Bart
							Lisa
							Maggie
							Result: ✅ SUCCESS
*/

// Declare variables
const people = [
	{ name: 'Bart', age: 12 },
	{ name: 'Lisa', age: 10 },
	{ name: 'Maggie', age: 1 }
];

people.forEach(p => console.log(p.name));

const result = people.filter(p => p.age === getInputAge(p)).length;

// ⛔🚫 STOP TIDYING! You're done ✅

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// ⚠️ DO NOT MODIFY BELOW  ⚠️
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// PRINT SUCCESS IF EXACTLY 2 INPUTS MATCH
console.log(`Result: ${ result === 2 ? '✅ SUCCESS' : '❌ FAIL' }`);

function getInputAge(person) {
	switch (person.name) {
		case 'Bart':
			return 12;
		case 'Lisa':
			return 10;
		case 'Maggie':
			return '1'; // she's a baby, she's allowed to get this type wrong!
		default:
			return 0;
	}
}
