import { Input, Steps, Step, Button, Message, MessageBox } from "element-ui";
import Vue from "vue";

Vue.use(Input)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
