// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

solution

function combat(health, damage) {
    // Write your code here
    const newHealth = health-damage
    
    if (newHealth >= 0){
      return newHealth
    }else {
      return 0
    }
}

// or 

function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage;
}

  or 

  function combat(health, damage) {
    return Math.max(health - damage, 0);
  }

// test 
// combat(100, 5), 95);
// combat(92, 8), 84);
// combat(20, 30), 0, "Health cannot go below 0");