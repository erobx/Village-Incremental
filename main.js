function toggle() {
  var x = document.getElementById("toggle");
  if (x.innerHTML === "Unactive") {
    x.innerHTML = "Active";
  } else {
    x.innerHTML = "Unactive"
  }
  return x;
}

var food = {
  name: "food",
  amount: 0,
  increment: 0
},
stone = {
  name: "stone",
  amount: 0,
  increment: 0
},
wood = {
  name: "wood",
  amount: 0,
  increment: 0
},
hut = {
  amount: 0,
  population: 1,
  cost: {
    wood: 10
  }
},
farm = {
  amount: 0,
  farmerSlot: 1,
  cost: {
    wood: 30,
    food: 30
  }
};

var maxPop = (hut.population * hut.amount);
var clickIncrement = 1;

function updateDisplay() {
  document.getElementById("food").innerHTML = food.amount;
  document.getElementById("wood").innerHTML = wood.amount;
  document.getElementById("stone").innerHTML = stone.amount;
  document.getElementById("farm").innerHTML = farm.amount;
  document.getElementById("hut").innerHTML = hut.amount;
}

function increaseFood() {
  food.amount = food.amount + clickIncrement;
  updateDisplay();
}

function increaseWood() {
  wood.amount = wood.amount + clickIncrement;
  updateDisplay();
}

function increaseStone() {
  stone.amount = stone.amount + clickIncrement;
  updateDisplay();
}

function buyFarm() {
  if (wood.amount >= farm.cost.wood && food.amount >= farm.cost.food) {
    wood.amount = wood.amount - farm.cost.wood;
    food.amount = food.amount - farm.cost.food;
    farm.amount++;
    farm.cost.wood = farm.cost.wood * 1.2;
    farm.cost.stone = farm.cost.stone * 1.2;
    farm.cost.wood = farm.cost.wood.toFixed(0);
    farm.cost.stone = farm.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert('Bitch');
  }
};
