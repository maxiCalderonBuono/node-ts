import { yarg as argvs } from "./config/plugins/argvadapter-plugins";
import { ServerApp } from "./presentation/server-app";


(async () => {
  await main()
})()


async function main() {

  const { b: base, l: limit, s: showTable, n: name, d: dir } = argvs

  console.log(argvs)

  ServerApp.run({ base, limit, showTable, name, dir })
}