# Practice Exercise #6 – ATM Machine 💳

## Description

In this exercise, you’ll create a simple ATM (bank machine) using React. The app will allow users to **view their balance**, **deposit money**, and **withdraw money**, while also demonstrating component rendering, state management, and side effects.

---

## Requirements

### 1. Toggle the ATM Component

Create an `<ATM />` component that can be **shown or hidden** using a button in `App.jsx`.
Use **`useState`** to manage its visibility.

### 2. Lifecycle Messages

When the `<ATM />` component is **rendered**, log a message to the console:

> `"ATM is now ready to use"`

When the component is **hidden**, log:

> `"ATM shutting down."`

Use **`useEffect`** to handle these lifecycle messages.

### 3. Account Balance

Create a **state variable** to store the user’s account balance.
Display the current balance in the UI so the user can see how much money is available.
(`useState`)

### 4. Deposits

Allow the user to **deposit money** by selecting an amount and clicking a deposit button.
When the user makes a deposit:

* Increase the balance by the chosen amount.
* Log a message to the console:

  > `"Saldo has been updated! New saldo is {saldo} SEK"`

(`useState`, event handling, `useEffect`)

### 5. Withdrawals

Allow the user to **withdraw money** by entering an amount and clicking a withdraw button.

* The withdrawal amount **cannot exceed the current balance**.
* If no amount is entered, display a message such as:

  > `"Please select amount"`
* On a successful withdrawal, log to the console:

  > `"Saldo has been updated! New saldo is {saldo} SEK"`

(`useState`, event handling, `useEffect`)

---

## Learning Goals

* React component structure
* Conditional rendering
* State management with `useState`
* Side effects with `useEffect`
* Event handling
# ATM-Machine
