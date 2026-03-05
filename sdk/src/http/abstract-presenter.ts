export abstract class AbstractPresenter<T, R> {
    abstract toHTTP(data: T): R;
}
