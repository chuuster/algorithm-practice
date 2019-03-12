// https://leetcode.com/problems/min-stack/

class MinStack {
  constructor() {
    this.store = []; 
    this.size = 0; 
    this.min = []; 
  }

  push(x) {
    if (this.min.length !== 0) {
      if (x <= this.min[this.min.length - 1]) this.min.push(x);
    } else {
      this.min.push(x); 
    }

    this.store.push(x);
    this.size += 1;  
    return this; 
  }

  pop() {
    const popped = this.store.pop();
    if (popped === this.min[this.min.length - 1]) this.min.pop();  
    this.size -= 1; 
    return this;
  }

  top() {
    return this.store[this.size - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}