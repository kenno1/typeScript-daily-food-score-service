declare function Logging(message: string): (constructor: Function) => void;
declare function Component(template: string, selector: string): <T extends new (...args: any[]) => {
    name: string;
}>(constructor: T) => {
    new (...args: any[]): {
        name: string;
    };
} & T;
declare function PropertyLogging(target: any, propertyKey: string): void;
declare function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function enumerable(isEnumerable: boolean): (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) => {
    enumerable: boolean;
};
declare function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function ParameterLogging(target: any, propertyKey: string, parameterIndex: number): void;
declare class User {
    private _age;
    name: string;
    constructor(_age: number);
    get age(): number;
    set age(value: number);
    greeting(message: string): void;
}
declare const user1: User;
declare const user2: User;
declare const user3: User;
