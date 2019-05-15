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
},
sawmill = {
  amount: 0,
  lumberjackSlot: 1,
  cost: {
    wood: 20
  }
},
quarry = {
  amount: 0,
  minerSlot: 1,
  cost: {
    wood: 30,
    stone: 30
  }
};

var maxPop = (hut.population * hut.amount);
var clickIncrement = 1;

function updateDisplay() {
  document.getElementById("food").innerHTML = food.amount;
  document.getElementById("wood").innerHTML = wood.amount;
  document.getElementById("stone").innerHTML = stone.amount;
  document.getElementById("hut").innerHTML = hut.amount;
  document.getElementById("farm").innerHTML = farm.amount;
  document.getElementById("sawmill").innerHTML = sawmill.amount;
  document.getElementById("quarry").innerHTML = quarry.amount;
  document.getElementById("hutCost").innerHTML = hut.cost.wood;
  document.getElementById("farmCost").innerHTML = farm.cost.wood;
  document.getElementById("sawmillCost").innerHTML = sawmill.cost.wood;
  document.getElementById("quarryCost").innerHTML = quarry.cost.wood;
}

setInterval(function() {
  food.amount += farm.amount;
  wood.amount += sawmill.amount;
  stone.amount += quarry.amount;
  updateDisplay();
}, 1000)

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
    alert('Need more wood/food');
  }
};

function buySawmill() {
  if (wood.amount >= sawmill.cost.wood) {
    wood.amount = wood.amount - sawmill.cost.wood;
    sawmill.amount++;
    sawmill.cost.wood = sawmill.cost.wood * 1.2;
    sawmill.cost.stone = sawmill.cost.stone * 1.2;
    sawmill.cost.wood = sawmill.cost.wood.toFixed(0);
    sawmill.cost.stone = sawmill.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert('Need more wood');
  }
}

function buyQuarry() {
  if (wood.amount >= quarry.cost.wood && stone.amount >= quarry.cost.stone) {
    wood.amount = wood.amount - quarry.cost.wood;
    stone.amount = stone.amount - quarry.cost.stone;
    quarry.amount++;
    quarry.cost.wood = quarry.cost.wood * 1.2;
    quarry.cost.stone = quarry.cost.stone * 1.2;
    quarry.cost.wood = quarry.cost.wood.toFixed(0);
    quarry.cost.stone = quarry.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert('Need more wood/stone');
  }
}

function buyHut() {
  if (wood.amount >= hut.cost.wood) {
    wood.amount = wood.amount - hut.cost.wood;
    hut.amount++;
    hut.cost.wood = hut.cost.wood * 1.2;
    hut.cost.wood = hut.cost.wood.toFixed(0);
    updateDisplay();
  } else {
    alert('Need more wood')
  }
}
