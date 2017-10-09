export default function compareTasks(prev, next) {
  // Checking for order, id, and name.

  if (prev.length < next.length) return false;

  for (var i = 0; i < prev.length; i++) {
    const prevEnt = prev[i];
    const nextEnt = prev[i];
    if (prevEnt.id !== nextEnt.id || prevEnt.name !== nextEnt.id) return false;
  }

  return true;
}
