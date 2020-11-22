declare function copy<T extends {
    name: string;
}, U extends keyof T>(value: T, key: U): T;
declare class LightDatabase<T extends string | number | boolean> {
    private data;
    add(item: T): void;
    remove(item: T): void;
    get(): T[];
}
declare const stringLightDatabase: LightDatabase<string | number | boolean>;
interface Todo {
    title: string;
    text: string;
}
declare type Todoable = Partial<Todo>;
declare type ReadTodo = Readonly<Todo>;
declare const fetchData: Promise<string>;
declare const vegetables: Array<string>;
