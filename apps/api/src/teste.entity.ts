import { AbstractDomain, type ULID } from "@karrbo/sdk";

export interface TesteProps {
    name: string;
}

export class Teste extends AbstractDomain<TesteProps, ULID> {
    get name(): string {
        return this.props.name;
    }

    set name(name: string) {
        this.props.name = name;
    }

    create(props: TesteProps, id: ULID): AbstractDomain<TesteProps, ULID> {
        return new Teste(props, id);
    }
}
