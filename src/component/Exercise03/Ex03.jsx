import React from "react";
import { Button } from "react-bootstrap";

export default function Ex03() {
  return (
    <div flex class="flex justify-start gap-2 ...">
      <Button variant="primary">Luu</Button>
      <Button variant="secondary">Huy</Button>
      <Button variant="success">Thanh Cong</Button>
      <Button variant="warning">Canh bao</Button>
      <Button variant="danger">Bao loi</Button>
      <Button variant="info">Thong tin</Button>
      <Button variant="light">Anh sang</Button>
      <Button variant="dark">Bong dem</Button>
      <Button variant="link">Duong dan</Button>
    </div>
  );
}
