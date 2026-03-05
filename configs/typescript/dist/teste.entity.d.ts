import { AbstractDomain, type ULID } from "@karrbo/sdk";
export interface TesteProps {
    name: string;
}
export declare class Teste extends AbstractDomain<TesteProps, ULID> {
    get name(): string;
    set name(name: string);
    create(props: TesteProps, id: ULID): AbstractDomain<TesteProps, ULID>;
}
