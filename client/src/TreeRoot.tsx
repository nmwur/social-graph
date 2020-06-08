import React, { useState } from "react";
import { Tree } from "antd";

const x = 3;
const y = 2;
const z = 1;

const generateData = (_level: any, _preKey?: any, _tns?: any): any[] => {
  const preKey = _preKey || "0";
  const tns = _tns || [];

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });

  return [...tns];
};

export const TreeRoot = () => {
  const [treeData, setTreeData] = useState<any[]>(generateData(z));

  // const [expandedKeys] = useState<string[]>([]);

  const onDrop = (info: any) => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data: any, key: string, callback: any) => {
      data.forEach((item: any, index: number, arr: any[]) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj: any;
    loop(data, dragKey, (item: any, index: number, arr: any[]) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item: any) => {
        item.children = item.children || [];
        // where to insert
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item: any) => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
      });
    } else {
      let ar: any;
      let i: any;
      loop(data, dropKey, (item: any, index: number, arr: any[]) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i! + 1, 0, dragObj);
      }
    }

    setTreeData(data);
  };

  return (
    <Tree
      className="draggable-tree"
      // expandedKeys={expandedKeys}
      draggable
      blockNode
      onDrop={onDrop}
      treeData={treeData}
    />
  );
};
