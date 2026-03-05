export abstract class AbstractMapper<A, B> {
    abstract toB(a: A): B
    abstract toA(b: B): A
}