import { connect, Global, css, styled, keyframes } from "frontity";
import React, { useEffect, useState } from "react";
import Link from "../link";
import Loading from "../loading";
import * as THREE from 'three';
import { Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from './FBXLoader.js';

const scene = new THREE.Scene();
const scene = new Scene();
