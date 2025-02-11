// Function to swap position of elements inside the array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffleArray(array: any[]) {
    // Traversing array in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      // Generating a random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swapping values at the indexes
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }