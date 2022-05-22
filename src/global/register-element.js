import {
  Input,
  Steps,
  Step,
  Button,
  Message,
  MessageBox,
  Autocomplete
} from "element-ui";
import Vue from "vue";

Vue.use(Input)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(Autocomplete)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
