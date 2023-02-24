function myPromise(callback) {
  let state = 'pending';
  let value = null;
  let deferred = null;

  function resolve(newValue) {
    try {
      if (newValue && typeof newValue.then === 'function') {
        newValue.then(resolve, reject);
        return;
      }
      state = 'fulfilled';
      value = newValue;
      if (deferred) {
        handle(deferred);
      }
    } catch (error) {
      reject(error);
    }
  }

  function reject(reason) {
    state = 'rejected';
    value = reason;
    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (state === 'pending') {
      deferred = handler;
      return;
    }

    const callbackHandler =
      state === 'fulfilled' ? handler.onFulfilled : handler.onRejected;

    if (!callbackHandler) {
      if (state === 'fulfilled') {
        handler.resolve(value);
      } else {
        handler.reject(value);
      }
      return;
    }

    try {
      const result = callbackHandler(value);
      handler.resolve(result);
    } catch (error) {
      handler.reject(error);
    }
  }

  this.then = function (onFulfilled, onRejected) {
    return new myPromise(function (resolve, reject) {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject,
      });
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  callback(resolve, reject);
}

function getNumber() {
  return new myPromise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;;
    const resolutionTime = Math.floor(Math.random() * 5000) + 1000;

    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        reject('Number is divisible by 5');
      } else {
        resolve(randomNumber);
      }
    }, resolutionTime);
  });
}

(async () => {
  try {
    const randomNumber = await getNumber();
    console.log(`Number is ${randomNumber}`);
  } catch (error) {
    console.error(error);
  }
})();