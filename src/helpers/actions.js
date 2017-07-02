export function showBig (id) {
	return{
		type: 'SHOW_BIG',
		id
	}
}

export function addToCart(id) {
 return {
 	type: 'ADDCART',
 	id
 }
}

export function removeCart(id) {
 return {
 	type: 'REMOVECART',
 	id
 }
}