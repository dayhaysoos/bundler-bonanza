/// <reference types="vitest/globals" />
import { Web5 } from "@tbd54566975/web5";

let did;

beforeEach(async () => {
  const result = await createDid();
  did = result.did;
});

async function createDid() {
  const { web5, did } = await Web5.createDid();
  return { web5, did };
}

test("create a did", async () => {
  const { did } = await createDid();
  expect(did).toBeDefined();
});

test("adds 1+1 to equal 2", () => {
  expect(1 + 1).toBe(2);
});
