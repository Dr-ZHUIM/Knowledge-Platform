type PromiseType = 'pending' | 'fulfilled' | 'rejected';
type ResolveFunc<T> = (value: T) => void;
type RejectFunc = (reason: unknown) => void;
type onFullfilledFunc<T> = (value: T) => unknown;
type onRejectedFunc = (reason: unknown) => unknown;
type ExecutorType<T> = (resolve: ResolveFunc<T>, reject: RejectFunc) => void;

class MyPromise<T> {
  status: PromiseType;
  value: T | null;
  callbacks: {
    onFullfilled: onFullfilledFunc<T>;
    onRejected: onRejectedFunc;
  }[];
  constructor(executor: ExecutorType<T>) {
    this.status = 'pending';
    this.value = null;
    // to solve async callbacks
    this.callbacks = [];
    this.tryExecutor(() =>
      // class's scope is strict mode so you should bind class's this to executor's callback functions
      executor(this.resolve.bind(this), this.reject.bind(this)),
    );
  }
  protected resolve(value: T) {
    // status defender
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((callback) => callback.onFullfilled(value));
      });
    }
  }
  protected reject(reason: any) {
    // status defender
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((callback) => callback.onRejected(reason));
      });
    }
  }
  public then(
    onFullfilled: onFullfilledFunc<T | null> = () => this.value,
    onRejected: onRejectedFunc = () => this.value,
  ) {
    return new MyPromise((resolve, reject) => {
      if (this.status === 'pending') {
        this.callbacks.push({
          onFullfilled: (value) => {
            tryThen(() => onFullfilled(value));
          },
          onRejected: (reason) => {
            tryThen(() => onRejected(reason));
          },
        });
      }
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          tryThen(() => onFullfilled(this.value));
        });
      } else if (this.status === 'rejected') {
        setTimeout(() => {
          tryThen(() => onRejected(this.value));
        });
      }
      function tryThen(callback: any) {
        try {
          const result = callback();
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  protected tryExecutor(callback: (...args: unknown[]) => unknown) {
    try {
      callback();
    } catch (error) {
      this.reject(error);
    }
  }
}

export { MyPromise };
