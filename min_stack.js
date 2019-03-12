// https://leetcode.com/problems/min-stack/

class MinStack {
  constructor(store = []) {
    this.store = store; 
    this.size = store.length; 
    (this.size === 0) ? this.min = null : this.min = Math.min(...store);
  }

  push(x) {
    if (x < this.min) this.min = x; 
    this.store.push(x);
    this.size += 1;  
    return this; 
  }

  pop() {
    const popped = this.store.pop();
    if (popped === this.min) this.min = Math.min(...this.store); 
    this.size -= 1; 
    return this;
  }

  top() {
    return this.store[this.size - 1];
  }

  getMin() {
    return this.min; 
  }
}