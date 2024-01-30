import twopeice from "@/public/twopeiece.jpg";
import twoPiece from "@/public/twoPiece.png";
import twoPieceb from "@/public/twopieceb.jpg";
import ddD from "@/public/ddD.jpg";
import ddS from "@/public/ddS.jpg";
import ddF from "@/public/ddF.jpg";
import blueTP from "@/public/blueTP.jpg";
import blueTPF from "@/public/blueTPF.jpg";
import blueTPS from "@/public/blueTPS.jpg";
import saphireC from "@/public/saphireC.jpg";
import saphireF from "@/public/saphireF.jpg";
import saphireS from "@/public/saphireS.jpg";
import turkishS from "@/public/turkishS.jpg";
import turkishSI from "@/public/turkishSI.jpg";
import turkishSt from "@/public/turkishSt.jpg";
import osloC from "@/public/osloC.jpg";
import osloF from "@/public/osloF.jpg";
import osloL from "@/public/osloL.jpg";
import osloSM from "../public/osloSM.jpg";
// import osloSM from "@/public/osloSM.jpg";
import osloK from "@/public/osloK.jpg";
import osloKS from "@/public/osloKS.jpg";
import osloKB from "@/public/osloKB.jpeg";
import amber from "@/public/amber.jpg";
import amberF from "@/public/amberF.jpg";
import amberS from "@/public/amberS.jpg";
import nevada from "@/public/nevada.jpg";
import nevadaP from "@/public/nevadaP.jpg";
import nevadaS from "@/public/nevadaS.jpg";

// import twoPieceb from "@/public/twoPieceb.png";
import { StaticImageData } from "next/image";
export interface InventoryType {
  id: string;
  name: string;
  image: string | StaticImageData;
  images: string[] | StaticImageData[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  description: string;
  sku: string;
}

export const inventory: InventoryType[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "OSLO_SET_1",
    name: "OSLO SET",
    description: `The OSLO SET consists of oiur signature kimono jacket in a patterened and well defined fabric. A not too simple but cheey dress for every lady. Fabric Type: 100% CREPE `,
    price: 15000,
    image: osloC,
    images: [osloC, osloF, osloSM],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["kimono"],
    colors: ["brown", "Purple", "Lilac"],
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "khaki_tote_bag_1",
    name: "OSLO KIMONO",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 14500,
    image: osloKS,
    images: [osloKB, osloKS, osloK],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["kimono"],
    colors: ["blue", "beige", "Royal Yellow"],
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "two_peice_dress_1",
    name: "ZOE SET",
    description: `Comprises of our signature two piece look with signature flowery fabric depicting that you can shine without many colors. Fabric: 100% CREPE`,
    price: 35000,
    image: require("../public/twopeiece.jpg").default,
    images: [twoPieceb, twoPiece, twopeice],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["brown", "biege", "black", "gold"],
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "zircon_set_1",
    name: "THE ZIRCON SET",
    description: `THE ZIRCON dress unlocks the ability of a plain apparel to become more dazzling with stones embelishments exuding the rich vibe. Fabric: 100% silk`,
    price: 30000,
    image: require("../public/ddS.jpg").default,
    images: [ddD, ddF, ddS],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["blue", "black", "yellow", "gray"],
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "drop_down_1",
    name: "AMBER SET",
    description: `The AMBER SET reveals a classy plain shirt and trouser two peice designed with a flowered fabric with easy going pockets. Fabric:100% silk`,
    price: 35000,
    image: blueTP,
    images: [blueTP, blueTPF, blueTPS],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["green", "white"],
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "SAPHIRE SETS",
    description: `The SAPHIRE SET is a classy shirt and trouser piece that is embelished with rocky stones designs to give you that perfect and distinguished look making you stand out in any occasion, think of the SAPHIRE SET to give you look. Fabric: 100% silk`,
    price: 40000,
    image: saphireC,
    images: [saphireC, saphireF, saphireS],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["brown", "blue"],
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "down_mittens_1",
    name: "TURKISH SET",
    description: `The TURKISH SET is a lined suit and trouser outfit perfect for the working class lady. fabric: 100% SILK`,
    price: 45000,
    image: turkishS,
    images: [turkishS, turkishSt, turkishSt],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["black", "Green"],
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "amber_sets_1",
    name: "AMBER SETS",
    description: `This sets reveals a classy patterened Shirt and Trouser designed with a plain vel;vet with easy going pockets.Fabric:100% silk`,
    price: 40000,
    image: amberF,
    images: [amberF, amberS, amber],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["yellow", "green"],
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "dock_sunglasses_1",
    name: "THE NEVADA SET",
    description: `The NEVADA SET reveals our signature pant and trousers but this timein a unique design paired with a free size matching shirt laced with a black apparel to display not so regular signature two piece. Fabric Type:100% silk`,
    price: 35000,
    image: nevadaP,
    images: [nevadaS, nevadaP, nevada],
    sizes: ["6", "8", "10", "12", "14", "16", "18", "20", "22"],
    categories: ["twopiece"],
    colors: ["black"],
  },
];
