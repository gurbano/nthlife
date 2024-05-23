import { Process, specHelper } from "actionhero";

describe("Action: game", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("game");
    expect(ok).toEqual(true);
  });
});
