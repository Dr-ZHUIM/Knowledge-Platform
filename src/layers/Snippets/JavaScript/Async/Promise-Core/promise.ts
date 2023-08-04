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
      this.callbacks.map((callback) => callback.onFullfilled(value));
    }
  }
  protected reject(reason: any) {
    // status defender
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = reason;
      this.callbacks.map((callback) => callback.onRejected(reason));
    }
  }
  public then(
    onFullfilled: onFullfilledFunc<T | null> = () => {},
    onRejected: onRejectedFunc = () => {},
  ) {
    if (typeof onFullfilled !== 'function') {
      onFullfilled = () => {};
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {};
    }
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
        onFullfilled(this.value);
      });
    } else if (this.status === 'rejected') {
      setTimeout(() => {
        onRejected(this.value);
      });
    }

    function tryThen(callback: any) {
      try {
        callback();
      } catch (error) {
        onRejected(error);
      }
    }
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
