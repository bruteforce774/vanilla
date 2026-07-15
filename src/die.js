export function setupDie(element) {
  let die = 0
  const setDie = (dieValue) => {
    die = dieValue
    element.innerHTML = die ? `Rolled: ${die}` : `Die not rolled.`
  }
}

