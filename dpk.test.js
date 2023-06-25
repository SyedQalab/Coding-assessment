const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the correct partition key when given an event with partitionKey", () => {
    const event = { partitionKey: "customKey" };
    const customKey = deterministicPartitionKey(event);
    expect(customKey).toBe("customKey");
  });

  it("Returns the correct partition key when given an event without partitionKey", () => {
    const event = { someData: "example" };
    const hashedKey = deterministicPartitionKey(event);
    expect(hashedKey).toMatch(/[0-9a-f]{64}/); // Expecting a 64-character hex string
  });
});
