import React from "react";
import inputCss from "./Input.module.css";
function InputPort() {
  return (
    <div>
      {/* <div class={inputCss.inputbox}>
        <input type="text" required="required" />
        <span>Username</span>
        <i></i>
      </div> */}
      <form class={inputCss.form}>
        <span class={inputCss["input-span"]}>
          <label for="email" class={inputCss.label}>
            
          </label>
          <input type="email" name="email" id="email" />
        </span>
        <span class={inputCss["input-span"]}>
          <label for="password" class={inputCss.label}>
            Password
          </label>
          <input type="password" name="password" id="password" />
        </span>
        <span class={inputCss.span}>
          <a href="#">Forgot password?</a>
        </span>
        <input class={inputCss.submit} type="submit" value="Log in" />
        <span class={inputCss.span}>
          Don't have an account? <a href="#">Sign up</a>
        </span>
      </form>
    </div>
  );
}

export default InputPort;
