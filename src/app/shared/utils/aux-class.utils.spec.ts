import { AuxClass } from './aux-class.utils';
import { Animal } from '../models/animal.interface';
import { Cat } from '../models/cat.model';
import { Dog } from '../models/dog.model';


describe('AuxClassComponent', () => {
    let auxClass: AuxClass;

    const animals: Animal[] = [
        new Cat('cat1'), new Cat('cat2'), new Cat('cat3'), new Cat('cat4'),
        new Dog('dog1'), new Dog('dog2'), new Dog('dog3'), new Dog('dog4')
    ];

    beforeEach(() => {
        auxClass = new AuxClass();
    });

    it('should ...', () => {
        expect('a').toBe('a');
    });

    it('should return cats from the array by class name', () => {
        expect(auxClass.getAnimalsByClassName(animals, 'Cat').length).toBe(4);
    });

    it('should return dogs from the array by class name', () => {
        expect(auxClass.getAnimalsByClassName(animals, 'Dog').length).toBe(4);
    });


});
