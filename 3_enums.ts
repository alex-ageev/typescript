/*
Enum é um tipo auxiliar que nos permite estruturar
melhor o nosso código caso existam alguns elementos do mesmo tipo.
*/

enum Membership {
	Simple,   // #0
	Standard, // #1
	Premium   // #2
}

const membership = Membership.Standard
console.log(membership) // por defeito retorna o seu indice #1

const membershipReverse = Membership[2] // pouco usada
console.log(membershipReverse) // retorna Premium

enum SocialMedia {
	FACEBOOK = 'Facebook',
	INSTAGRAM = 'Instagram',
}

const social = SocialMedia.INSTAGRAM // muito mais útil

/*
Neste caso, os valores do SocialMedia são strings em vez de números,
então ao aceder SocialMedia.INSTAGRAM, o valor retornado será instagram.
*/

console.log(social)