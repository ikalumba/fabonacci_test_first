// ---TEAM MEMBERS---
// Winifred Nakawunde
// Isaac Kalumba

// The function returns upto the first 30 numbers in the fibonacci sequence
export function fibonacci(n) {
  
  try {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n < 0 || n > 30) {
      throw new Error("Number is out of range. Please provide a number from 0 to 30.");
    } else {
      let sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
