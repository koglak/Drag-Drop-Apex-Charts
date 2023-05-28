import * as React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Chart } from "./Chart";
import "bootstrap/dist/css/bootstrap.min.css";

const SortableItem = SortableElement(({ value }) => (
  <div style={{ width: "48%" }} className="border rounded m-1">
    {value}
  </div>
));

const SortableList = SortableContainer(({ items }) => (
  <div style={{ display: "flex", flexWrap: "wrap", cursor: "pointer" }}>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </div>
));

export default function Example() {
  const series = [
    [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    [
      {
        name: "Desktops",
        data: [2, 15, 34, 15, 15, 23, 23, 12, 16]
      }
    ],
    [
      {
        name: "Desktops",
        data: [1, 2, 3, 3, 2, 4, 5, 12, 5]
      }
    ],
    [
      {
        name: "Desktops",
        data: [11, 12, 11, 12, 19, 21, 12, 12, 11]
      }
    ]
  ];

  const [items, setItems] = React.useState([
    <Chart title="1" series={series[0]} />,
    <Chart title="2" series={series[1]} />,
    <Chart title="3" series={series[2]} />,
    <Chart title="4" series={series[3]} />
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems((items) => {
      const newItems = [...items];
      newItems.splice(newIndex, 0, newItems.splice(oldIndex, 1)[0]);
      return newItems;
    });
  };

  return <SortableList items={items} onSortEnd={onSortEnd} axis="xy" />;
}
