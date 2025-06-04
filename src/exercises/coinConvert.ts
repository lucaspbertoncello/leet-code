class ConvertReal {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue: number) {
    this.value = newValue;
  }

  convertToDolar() {
    return (this.value / 5.69).toFixed(2);
  }

  convertToEur() {
    return (this.value / 6.43).toFixed(2);
  }
}

const toDolar = new ConvertReal(32).convertToDolar();

console.log(toDolar);
