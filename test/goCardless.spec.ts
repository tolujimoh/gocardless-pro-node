import { expect } from "chai";
import Client from "../src/Client";
import gocardless from "../src/gocardless";

describe("goCardless", () => {
  it("module exports an object", () => {
    expect(gocardless).to.be.a("Object");
  });
  describe("Client", () => {
    it("exported Object has property named 'Client'", () => {
      expect(gocardless).to.have.property("Client");
    });
    it("property is instanceOf Client Class", () => {
      expect(
        new gocardless.Client({
          access_token: "sandbox_2hcd-Pd2U1jtAmOtusu51WIgTu8IHJ96qlFD1wSh",
          environment: "sandbox",
        }),
      ).to.be.instanceOf(Client);
    });
  });
});
