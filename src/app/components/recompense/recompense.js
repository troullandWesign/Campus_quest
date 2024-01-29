// components/recompenses/recompense.js
class Recompense {
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
    toString() {
      return `${this.title}: ${this.description}`;
    }
  }
  
export default Recompense;
  