type Title = "Employee" | "Employer";
interface Username {
    name: string;
    readonly title: Title;
    age?: number;
}
declare var x: number;
declare var username: string | undefined;
declare let user: Username;
declare let students: (string | number)[];
declare let test: unknown;
declare let testInput: HTMLInputElement;
declare function myFun(value: string): number;
declare function testFun(): void;
declare function myFun2<T>(value: T): T;
