(async function () {
  /**
   * You will not need to change the "Observable" function here.
   * The part of the code that you need to change is below.
   */

  const Observable = () => {
    /**
     * List of observers
     */
    const listeners = new Set([]); // Set mandates that each listener is unique
    return {
      /**
       * Adds an observer to the list
       * @param function listener
       */
      subscribe: (listener) => {
        listeners.add(listener);
      },
      /**
       * Removes an observer from the list
       * @param function listener
       */
      unsubscribe: (listener) => {
        listeners.delete(listener);
      },
      /**
       * Broadcasts the update to each item in the list
       * @param * arguments can be anything
       */
      notify: (...args) => {
        listeners.forEach((listener) => listener(...args));
      },
    };
  };

  /**
   * You will make a currency change tool.
   * When the user has filled out both currencies, you will call on an API
   * to convert a monetary amount from one currency to another.
   *
   * It should work like this:
   * @see exercises/25-observer-pattern/currency-converter.gif
   *
   * You will need to refactor the solution below. It should:
   * 1. Use the observer pattern
   * 2. Work for both dropdown boxes. The example code below is only partially complete.
   * It will only make an AJAX request after the user selects a currency from the right dropdown.
   * You will want to convert the currency when the user selects a value from the left dropdown too.
   *
   * Note that you will only want to make an AJAX call if the user has filled out both currencies.
   *
   * For an example with the observer pattern,
   * @see https://codesandbox.io/s/observer-pattern-no-bundler-n2ukw?file=/src/index.js
   */
  const currencyDropdown1 = document.querySelector("#currency1");
  const currencyDropdown2 = document.querySelector("#currency2");
  const amount = document.querySelector("#amount");

  const currencyObserver = Observable();
  const updateAmount = async () => {
    const currency1 = currencyDropdown1.value;
    const currency2 = currencyDropdown2.value;
    if (currency1 && currency2) {
      const response = await fakeAxios({
        url: "http://pretendsite.com/currency",
        method: "POST",
        data: JSON.stringify({
          currency1: currency1,
          currency2: currency2,
          amount: 1,
        }),
      });
      amount.value = response.amount;
    }
  };
  currencyObserver.subscribe(updateAmount);
  currencyDropdown1.addEventListener("change", (e) => {
    const newCurrency = e.target.value;
    currencyObserver.notify(newCurrency);
  });
  currencyDropdown2.addEventListener("change", (e) => {
    const newCurrency = e.target.value;
    currencyObserver.notify(newCurrency);
  });
})();
