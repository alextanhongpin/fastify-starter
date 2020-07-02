const fs = require("fs");
const Rego = require("@open-policy-agent/opa-wasm");
const rego = new Rego();

// WARN: This is not working with the following error.
//[LinkError: WebAssembly.instantiate(): Import #7 module="env" function="opa_println" error: function import requires a callable]
async function main() {
  const policyWasm = fs.readFileSync("policy.wasm");
  const policy = await rego.load_policy(policyWasm);

  const input = {
    message: "world"
  };
  const result = await policy.eval_bool(input);
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
