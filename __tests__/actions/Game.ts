import { Process, specHelper } from "actionhero";

describe("Action: Game", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("Game");
    expect(ok).toEqual(true);
  });
});
