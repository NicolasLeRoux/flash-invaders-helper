import { IInvaders } from './invaders.interface';
import { ICities } from './cities.interface';

export interface IFlashes {
    code: number;
    invaders: IInvaders;
    cities: ICities;
    message: string;
}
