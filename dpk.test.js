const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey", () => {
    const partitionKey = "9865e2d4";
    const key = deterministicPartitionKey({
      partitionKey
    });
    expect(key).toBe(partitionKey);
  });
});
