import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function Ex04() {
  const students = [
    {
      id: 1,
      fullName: "Nguyễn Văn A",
      gender: `Nam`,
      dateOfBirth: "28/02/1990",
      email: "nvana@gmail.com",
      address: "Ba Đình, Hà Nội",
      status: true,
    },
    {
      id: 2,
      fullName: "Trần Thị B",
      gender: `Nu`,
      dateOfBirth: "15/07/1985",
      email: "ttb@gmail.com",
      address: "Cầu Giấy, Hà Nội",
    },
    {
      id: 3,
      fullName: "Lê Văn C",
      gender: `Nam`,
      dateOfBirth: "03/10/2000",
      email: "lvc@gmail.com",
      address: "Hai Bà Trưng, Hà Nội",
    },
    {
      id: 4,
      fullName: "Phạm Thị D",
      gender: `Nu`,
      dateOfBirth: "20/05/1995",
      email: "ptd@gmail.com",
      address: "Hoàn Kiếm, Hà Nội",
    },
    {
      id: 5,
      fullName: "Ngô Văn E",
      gender: `Nam`,
      dateOfBirth: "12/11/1988",
      email: "nve@gmail.com",
      address: "Cầu Giấy, Hà Nội",
    },
  ];
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ho va Ten</th>
              <th>Gioi Tinh</th>
              <th>Ngay Sinh</th>
              <th>Email</th>
              <th>Dia chi</th>
              <th>Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {students.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.fullName}</td>
                <td>{value.gender}</td>
                <td>{value.dateOfBirth}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
                <td
                  style={{ display: "flex", justifyContent: "center", gap: 10 }}
                >
                  <Button
                    style={{ width: 45, height: 40, textAlign: "center" }}
                    variant="warning"
                  >
                    Sua
                  </Button>
                  <Button style={{ width: 45, height: 40 }} variant="danger">
                    Xoa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
