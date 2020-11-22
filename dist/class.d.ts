declare abstract class Person {
    readonly name: string;
    protected age: number;
    static species: string;
    static isAdult(age: number): boolean;
    constructor(name: string, age: number);
    incrementAge(): void;
    greeting(this: Person): void;
    abstract explainJob(): void;
}
declare class Teacher extends Person {
    private _subject;
    private static instance;
    explainJob(): void;
    get subject(): string;
    set subject(value: string);
    private constructor();
    static getInstance(): Teacher;
}
declare const teacher: Teacher;
declare const teacher2: Teacher;
