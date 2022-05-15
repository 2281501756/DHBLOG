import { Input, Button, Message } from "element-ui";
import Vue from "vue";

Vue.use(Input)
Vue.use(Button)

Vue.prototype.$message = Message;
