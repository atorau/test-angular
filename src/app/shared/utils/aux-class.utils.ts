import { Animal } from '../models/animal.interface';
import { Animals } from '../models/animal.type';

export class AuxClass {

    constructor() { }

    public getAnimalsByClassName(animals: Animal[], className: string): Animal[] {
        return animals.filter(a => {
            return a.constructor.name === className;
        });
    }

    public getAnimalsName(animals: Animal[]): string[] {
        return null;
    }

}
