export interface DecodedTransaction {
  selector: string;
  functionName: string;
  category: string;
  description: string;
}

const KNOWN_SELECTORS: Record<
  string,
  {
    functionName: string;
    category: string;
    description: string;
  }
> = {
  "0xa9059cbb": {
    functionName: "transfer(address,uint256)",
    category: "ERC-20",
    description: "Transfers ERC-20 tokens to another address."
  },

  "0x095ea7b3": {
    functionName: "approve(address,uint256)",
    category: "ERC-20",
    description: "Approves an address to spend ERC-20 tokens."
  },

  "0x23b872dd": {
    functionName: "transferFrom(address,address,uint256)",
    category: "ERC-20",
    description: "Transfers ERC-20 tokens using an existing allowance."
  },

  "0x70a08231": {
    functionName: "balanceOf(address)",
    category: "ERC-20",
    description: "Returns the ERC-20 token balance of an address."
  },

  "0xdd62ed3e": {
    functionName: "allowance(address,address)",
    category: "ERC-20",
    description: "Returns the remaining token allowance."
  },

  "0x18160ddd": {
    functionName: "totalSupply()",
    category: "ERC-20",
    description: "Returns the total token supply."
  }
};

export function decodeTransaction(
  input: string
): DecodedTransaction {
  const normalized = input.trim().toLowerCase();

  if (!/^0x[0-9a-f]*$/.test(normalized)) {
    throw new Error("Invalid hexadecimal input");
  }

  if (normalized.length < 10) {
    throw new Error("Transaction data is too short");
  }

  const selector = normalized.slice(0, 10);

  const known = KNOWN_SELECTORS[selector];

  if (!known) {
    return {
      selector,
      functionName: "Unknown",
      category: "Unknown",
      description: "Function selector is not in the local database."
    };
  }

  return {
    selector,
    ...known
  };
}
