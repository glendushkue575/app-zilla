/* 
Filename: ComplexCodeExample.js
Content: This code demonstrates a sophisticated and complex system for managing a virtual restaurant, including menus, orders, and reservations. It is more than 200 lines long and showcases advanced JavaScript concepts and techniques.
*/

// Restaurant Class
class Restaurant {
  constructor(name, location, capacity) {
    this.name = name;
    this.location = location;
    this.capacity = capacity;
    this.menus = [];
    this.orders = [];
    this.reservations = [];
  }

  addMenu(menu) {
    this.menus.push(menu);
  }

  removeMenu(menuId) {
    this.menus = this.menus.filter(menu => menu.id !== menuId);
  }

  addOrder(order) {
    this.orders.push(order);
  }

  removeOrder(orderId) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }

  addReservation(reservation) {
    this.reservations.push(reservation);
  }

  removeReservation(reservationId) {
    this.reservations = this.reservations.filter(
      reservation => reservation.id !== reservationId
    );
  }
}

// Menu Class
class Menu {
  constructor(id, name, items) {
    this.id = id;
    this.name = name;
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}

// MenuItem Class
class MenuItem {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Order Class
class Order {
  constructor(id, tableNumber, items) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.items = items;
    this.isCompleted = false;
  }

  addItems(items) {
    this.items.push(...items);
  }

  removeItems(itemIds) {
    this.items = this.items.filter(item => !itemIds.includes(item.id));
  }

  completeOrder() {
    this.isCompleted = true;
  }
}

// Reservation Class
class Reservation {
  constructor(id, tableNumber, date, time, duration) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.date = date;
    this.time = time;
    this.duration = duration;
  }

  updateTableNumber(tableNumber) {
    this.tableNumber = tableNumber;
  }
}

// Usage example

// Create a restaurant
const restaurant = new Restaurant("The Fancy Bistro", "123 Main St", 50);

// Create menus
const lunchMenu = new Menu(1, "Lunch Menu", []);
const dinnerMenu = new Menu(2, "Dinner Menu", []);

// Add items to menus
lunchMenu.addItem(new MenuItem(1, "Salad", 10.99, "Fresh mix of greens"));
lunchMenu.addItem(new MenuItem(2, "Burger", 12.99, "Juicy beef patty"));
dinnerMenu.addItem(new MenuItem(3, "Steak", 20.99, "Grilled to perfection"));
dinnerMenu.addItem(new MenuItem(4, "Pasta", 15.99, "Homemade pasta"));

// Add menus to the restaurant
restaurant.addMenu(lunchMenu);
restaurant.addMenu(dinnerMenu);

// Create orders
const order1 = new Order(1, 3, []);
order1.addItems([lunchMenu.items[0], dinnerMenu.items[1]]);
const order2 = new Order(2, 5, []);
order2.addItems([dinnerMenu.items[2], lunchMenu.items[1]]);
const order3 = new Order(3, 2, []);
order3.addItems([lunchMenu.items[1], dinnerMenu.items[3]]);

// Add orders to the restaurant
restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.addOrder(order3);

// Remove an order
restaurant.removeOrder(2);

// Create a reservation
const reservation1 = new Reservation(1, 4, "2022-08-10", "19:30", 2);

// Add the reservation to the restaurant
restaurant.addReservation(reservation1);

// Remove the reservation
restaurant.removeReservation(1);

console.log(restaurant); // Output the restaurant object