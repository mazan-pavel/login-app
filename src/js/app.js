import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
const { form, inputEmail, inputPassword } = UI;
import { showInputError, removeInputErorr } from "./views/form";
import { login } from "./services/auth.service";
import { notify } from "./views/notifications";
import { getNews } from "./services/news.service";

const inputs = [inputEmail, inputPassword];
//events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach((el) =>
  el.addEventListener("focus", () => removeInputErorr(el))
);
//handlers

async function onSubmit() {
  const isValideForm = inputs.every((el) => {
    const isValideInput = validate(el);
    if (!isValideInput) {
      showInputError(el);
    }
    return isValideInput;
  });
  if (!isValideForm) return;
  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    //вывод уведомления успешного входа
    notify({ msg: "Login success", className: "alert-success" });
  } catch (error) {
    // вывод уведомления об ошибке
    notify({ msg: "Login faild", className: "alert-danger" });
  }
}
