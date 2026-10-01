import { decodeTransaction } from "../src/decoder";

describe("EVM Transaction Decoder", () => {
  test("decodes ERC-20 transfer", () => {
    const result = decodeTransaction("0xa9059cbb");

    expect(result.selector).toBe("0xa9059cbb");
    expect(result.functionName).toBe(
      "transfer(address,uint256)"
    );
    expect(result.category).toBe("ERC-20");
  });

  test("decodes ERC-20 approve", () => {
    const result = decodeTransaction("0x095ea7b3");

    expect(result.functionName).toBe(
      "approve(address,uint256)"
    );
  });

  test("handles unknown selector", () => {
    const result = decodeTransaction("0x12345678");

    expect(result.functionName).toBe("Unknown");
    expect(result.category).toBe("Unknown");
  });

  test("rejects invalid input", () => {
    expect(() => {
      decodeTransaction("not-a-transaction");
    }).toThrow("Invalid hexadecimal input");
  });

  test("rejects short input", () => {
    expect(() => {
      decodeTransaction("0x1234");
    }).toThrow("Transaction data is too short");
  });
});
