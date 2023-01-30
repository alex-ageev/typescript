interface Person {
	name: string
	age: number
}

/*
Keyof é um operador do TypeScript que retorna o
tipo das propriedades de uma interface ou tipo.
*/
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

// key = 'tel'

type User = {
	_id: number
	name: string
	email: string
	created: Date
}

/*
A função Exclude retorna um tipo que exclui
as propriedades especificadas de um tipo.
*/
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
/*
A função Pick retorna um novo tipo com
as propriedades especificadas de um tipo.
*/
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'