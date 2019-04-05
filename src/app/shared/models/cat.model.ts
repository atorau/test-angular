import { Animal } from './animal.interface';

export class Cat implements Animal {
    constructor(public name: string) { }

    sonido = () => {
        return 'miau';
    }
}
