export const mapNumber = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const getTruckCapacityInPercentage = (
  availableCapacity,
  totalCapacity
) => {
  return Math.floor(mapNumber(availableCapacity, 0, totalCapacity, 0, 100));
};
