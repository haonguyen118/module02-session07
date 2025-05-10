import React from "react";
import { Button, Form } from "react-bootstrap";
import image from "./image.jpg";
export default function Ex05() {
  return (
    <div flex class="flex justify-center gap-2 ...">
      <img src={image} alt="" style={{ width: "50%", height: 350 }} />
      <table>
        <tr>
          <td>
            <h1 className="text-[40px] text-blue-500">Login</h1>
            <p style={{ textAlign: "left" }}>Email</p>
            <Form.Control
              type="email"
              id="inputEmail"
              aria-describedby="passwordHelpBlock"
              placeholder="Moi nhap email..."
              style={{ width: 400, height: 40 }}
            />
            <p style={{ textAlign: "left" }}>Password</p>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Moi nhap password..."
              style={{ width: 400, height: 40 }}
            />
            <br />
            <br />
            <Button
              variant="primary"
              style={{ width: 400, textAlign: "center" }}
            >
              Login
            </Button>
            <br />
            <br />
            <Button
              variant="outline-secondary"
              style={{ width: 400, height: 40 }}
            >
              Register now
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
