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
  worker = {
    name: "worker",
    amount: 0,
    lumberjack: {
      increment: 1,
      amount: 0
    },
    miner: {
      increment: 1,
      amount: 0
    },
    hunter: {
      increment: 1,
      amount: 0
    }
  }, // Buildings
  farm = {
    amount: 0,
    increment: 0,
    cost: {
      wood: 20,
      food: 20
    }
  },
  sawmill = {
    amount: 0,
    increment: 0,
    cost: {
      wood: 10
    }
  },
  quarry = {
    amount: 0,
    increment: 0,
    cost: {
      wood: 20,
      stone: 20
    }
  },
  hut = {
    amount: 0,
    residents: 1,
    cost: {
      wood: 30
    }
  },
  house = {
    amount: 0,
    residents: 4,
    cost: {
      wood: 75,
      stone: 25
    }
  };

var maxPop = (hut.residents * hut.amount) + (house.residents * house.amount);
var clickIncrement = 1;

function updateDisplay() {
  document.getElementById("food").innerHTML = food.amount;
  document.getElementById("wood").innerHTML = wood.amount;
  document.getElementById("stone").innerHTML = stone.amount;
  document.getElementById("farm").innerHTML = farm.amount;
  document.getElementById("sawmill").innerHTML = sawmill.amount;
  document.getElementById("quarry").innerHTML = quarry.amount;
  document.getElementById("hut").innerHTML = hut.amount;
  document.getElementById("house").innerHTML = house.amount;
  document.getElementById("farmCost").innerHTML = farm.cost.wood;
  document.getElementById("sawmillCost").innerHTML = sawmill.cost.wood;
  document.getElementById("quarryCost").innerHTML = quarry.cost.wood;
  document.getElementById("hutCost").innerHTML = hut.cost.wood;
  document.getElementById("houseCost").innerHTML = house.cost.wood;
};

function increaseFood() {
  food.amount = food.amount + clickIncrement;
  updateDisplay();
};

function increaseWood() {
  wood.amount = wood.amount + clickIncrement;
  updateDisplay();
};

function increaseStone() {
  stone.amount = stone.amount + clickIncrement;
  updateDisplay();
};

setInterval(function() {
  wood.amount = wood.amount + (sawmill.increment);
  stone.amount = stone.amount + (quarry.increment);
  food.amount = food.amount + (farm.increment);
  updateDisplay();
}, 1000);

function buildFarm() {
  if (wood.amount >= farm.cost.wood && food.amount >= farm.cost.food) {
    wood.amount = wood.amount - farm.cost.wood;
    food.amount = food.amount - farm.cost.food;
    farm.amount++;
    farm.increment++;
    farm.cost.wood = farm.cost.wood * 1.2;
    farm.cost.stone = farm.cost.stone * 1.2;
    farm.cost.wood = farm.cost.wood.toFixed(0);
    farm.cost.stone = farm.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert("Need more wood or food");
  }
};

function buildSawmill() {
  if (wood.amount >= sawmill.cost.wood) {
    wood.amount = wood.amount - sawmill.cost.wood;
    sawmill.amount++;
    sawmill.increment++;
    sawmill.cost.wood = sawmill.cost.wood * 1.2;
    sawmill.cost.stone = sawmill.cost.stone * 1.2;
    sawmill.cost.wood = sawmill.cost.wood.toFixed(0);
    sawmill.cost.stone = sawmill.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert("Need more wood");
  }
};

function buildQuarry() {
  if (wood.amount >= quarry.cost.wood && stone.amount >= quarry.cost.stone) {
    wood.amount = wood.amount - quarry.cost.wood;
    stone.amount = stone.amount - quarry.cost.stone;
    quarry.amount++;
    quarry.increment++;
    quarry.cost.wood = quarry.cost.wood * 1.2;
    quarry.cost.stone = quarry.cost.stone * 1.2;
    quarry.cost.wood = quarry.cost.wood.toFixed(0);
    quarry.cost.stone = quarry.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert("Need more wood or stone");
  }
};

function buildHut() {
  if (wood.amount >= hut.cost.wood) {
    wood.amount = wood.amount - hut.cost.wood;
    hut.amount++;
    hut.cost.wood = hut.cost.wood * 1.2;
    hut.cost.wood = hut.cost.wood.toFixed(0);
    updateDisplay();
  } else {
    alert("Need more wood");
  }
};

function buildHouse() {
  if (wood.amount >= house.cost.wood && stone.amount >= house.cost.stone) {
    wood.amount = wood.amount - house.cost.wood;
    stone.amount = stone.amount - house.cost.stone;
    house.amount++;
    house.cost.wood = house.cost.wood * 1.2;
    house.cost.stone = house.cost.stone * 1.2;
    hosue.cost.wood = house.cost.wood.toFixed(0);
    house.cost.stone = house.cost.stone.toFixed(0);
    updateDisplay();
  } else {
    alert("Need more wood or stone");
  }
};
