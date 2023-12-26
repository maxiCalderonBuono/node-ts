import { emailTemplate } from '../../src/js-foundation/01-template';


describe("js-foundation/01-template.ts", () => {
  test("emailTemplate should contain a greeting", () => {


    expect(emailTemplate).toContain("<h1>")
  });

  test("emailTemplate should contain a {{name}}", () => {

    expect(emailTemplate).toContain("{{name}}")
    expect(emailTemplate).toMatch("{{name}}")
  })
})