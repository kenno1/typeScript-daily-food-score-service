declare let hasValue: boolean;
declare let count: number;
declare let float: number;
declare let negative: number;
declare let single: string;
declare let double: string;
declare let back: string;
declare let hello: string;
declare const person: {
    name: {
        first: string;
        last: string;
    };
    age: number;
};
declare const fruits: string[];
declare const book: [string, number, boolean];
declare enum CoffeeSize {
    SHORT = 0,
    TALL = "TALL",
    GRANDE = 1,
    VENTI = 2
}
declare const coffee: {
    hot: boolean;
    size: CoffeeSize;
};
declare let anything: any;
declare let banana: string;
declare let unionType: number | string;
declare let unionTypes: (number | string)[];
declare type ClothSize = 'small' | 'medium' | 'large';
declare const apple = "apple";
declare let clothSize: ClothSize;
declare const cloth: {
    color: string;
    size: ClothSize;
};
declare function add(num1: number, num2: number): number;
declare function sayHello(): void;
declare let tmp: undefined;
declare const anotherAdd: (n1: number, n2: number) => number;
declare const doubleNumber: (num: number) => number;
declare function doubleAndHandle(num: number, cb: (num: number) => void): void;
declare let unknownInput: unknown;
declare let anyInput: any;
declare let text: string;
declare function error(message: string): void;
