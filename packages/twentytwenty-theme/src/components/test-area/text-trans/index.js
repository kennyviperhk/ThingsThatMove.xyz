import { connect } from "frontity";
import React, { Component, Fragment, useEffect } from "react";
import { styled, keyframes } from "frontity";
import TextLoop from "react-text-loop";
const TEXTS = [
  "Forest",
  "Building",
  "Tree",
  "Color"
];
let TextT;

const TextTrans = ({ state, actions }) => {

return (
  <h2>
                <TextLoop>
                    <span>First item</span>
                    <span>Second item</span>
                    <span>Third item</span>
                </TextLoop>{" "}
                and something else.
            </h2>
);

}

export default connect(TextTrans);
