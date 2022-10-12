import React from "react";
import Card from "./card";
import Table from "./table";
import Container from "./container";

const portfolio = () => {
  const data = [
    {
      username: "Swapnil",
      email: "swap@email.com",
      address: "Soundalga",
      first_name: "demo",
      last_name: "test",
    },
    {
      username: "Shahid",
      email: "shahid@email.com",
      address: "hukkeri",
    },
    {
      username: "ShivKumar",
      email: "shivu@email.com",
      address: "sank",
    },
    {
      username: "RamPrasad",
      email: "ram@email.com",
      address: "nid",
      first_name: "proc",
    },
  ];
  const col = ["user_=+name", "email", "address", "full-Name"];
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  const cols = col.map((data) => data.replace(regex, ""));
  // console.log("str", cols);

  // const customer = [
  //   {
  //     id: 1,
  //     clientName: "spiderMan",
  //   },
  //   { id: 2, clientName: "thor" },
  // ];
  // const col1 = ["id", "clientName"];

  // const groups = [
  //   {
  //     groupId: 1,
  //     groupName: "Avengers",
  //     groupStatus: "active",
  //     groupLead: "marvel",
  //   },
  //   {
  //     groupId: 2,
  //     groupName: "justice legue",
  //     groupStatus: "",
  //     groupLead: "DC",
  //   },
  // ];

  // const col3 = [
  //   {
  //     field: "groupId",
  //   },
  //   { field: "groupName" },
  //   { field: "groupStatus" },
  //   { field: "groupLead" },
  // ];
  return (
    <div>
      User Data
      <div>
        <Table data={data} col={cols} />
      </div>
      <div>{/* customer table <Table data={customer} col={col1} /> */}</div>
      <div>{/* Groups Table <Table data={groups} col={col3} /> */}</div>
      <div>{/* <Card data={data} /> */}</div>
    </div>
  );
};

export default portfolio;
