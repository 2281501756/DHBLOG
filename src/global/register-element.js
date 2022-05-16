import { Input, Steps, Step, Button, Message } from "element-ui";
import Vue from "vue";

Vue.use(Input)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)

Vue.prototype.$message = Message;
