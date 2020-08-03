import LeftArmImage from '../assets/svg/simplemech arm 1.svg';
import RightArmImage from '../assets/svg/simplemech arm 2.svg';
import HeadImage from '../assets/svg/simplemech-head.svg';
import ChestImage from '../assets/svg/simplemech-chest.svg';
import LeftLegImage from '../assets/svg/simplemech-leg1.svg';
import RightLegImage from '../assets/svg/simplemech-leg2.svg';
import HairBow from '../assets/svg/hair-bow.svg'
import Skirt from '../assets/svg/skirt.svg'
import Boots from '../assets/svg/boots.svg'
import Shirt from '../assets/svg/shirt.svg'

// MEGAZORD IS THE ONLY POSSIBLE NAME FOR THIS FILE
// Constants would also be a good idea.


const ItemTypes = {
  LEFTARM: 'leftArm',
  RIGHTARM: 'rightArm',
  TORSO: 'torso',
  HEAD: 'head',
  CHEST: 'chest',
  LEFTLEG: 'leftLeg',
  RIGHTLEG: 'rightLeg',
  HAIRBOW: 'hairBow',
  SKIRT: 'skirt',
  BOOTS: 'boots',
  SHIRT: 'shirt'
};

const ExtraDraggables = [
  {
    name: 'Hair bow',
    type: ItemTypes.HAIRBOW,
    url: HairBow,
    xPos: 1028,
    yPos: 685,
    height: 67,
    width: 79,
    target: {
      accepts: [ItemTypes.HAIRBOW],
      lastDroppedItem: null,
      xPos: 608,
      yPos: 105,
    }
  },
  {
    name: 'Skirt',
    type: ItemTypes.SKIRT,
    url: Skirt,
    xPos: 1214,
    yPos: 274,
    height: 322,
    width: 322,
    target: {
      accepts: [ItemTypes.SKIRT],
      lastDroppedItem: null,
      xPos: 515,
      yPos: 360,
    }
  },
  {
    name: 'Boots',
    type: ItemTypes.BOOTS,
    url: Boots,
    xPos: 1100,
    yPos: 540,
    height: 217,
    width: 378,
    target: {
      accepts: [ItemTypes.BOOTS],
      lastDroppedItem: null,
      xPos: 474,
      yPos: 636,
    }
  },
  {
    name: 'Shirt',
    type: ItemTypes.SHIRT,
    url: Shirt,
    xPos: 1496,
    yPos: 297,
    height: 208,
    width: 272,
    target: {
      accepts: [ItemTypes.SHIRT],
      lastDroppedItem: null,
      xPos: 532,
      yPos: 261,
    }
  },
]

const BodyParts = [
  {
    name: 'Left arm',
    type: ItemTypes.LEFTARM,
    url: LeftArmImage,
    xPos: 1501,
    yPos: 278,
    height: 355,
    width: 127,
    target: {
      accepts: [ItemTypes.LEFTARM],
      lastDroppedItem: null,
      xPos: 437,
      yPos: 213,
    },
  },
  {
    name: 'Right arm',
    type: ItemTypes.RIGHTARM,
    url: RightArmImage,
    xPos: 1633,
    yPos: 278,
    height: 388,
    width: 126,
    target: {
      accepts: [ItemTypes.RIGHTARM],
      lastDroppedItem: null,
      xPos: 770,
      yPos: 214,
    },
  },
  {
    name: 'Left leg',
    type: ItemTypes.LEFTLEG,
    url: LeftLegImage,
    xPos: 984,
    yPos: 362,
    height: 382,
    width: 120,
    target: {
      accepts: [ItemTypes.LEFTLEG],
      lastDroppedItem: null,
      xPos: 527,
      yPos: 473,
    },
  },
  {
    name: 'Right leg',
    type: ItemTypes.RIGHTLEG,
    url: RightLegImage,
    xPos: 1129,
    yPos: 364,
    height: 382,
    width: 119,
    target: {
      accepts: [ItemTypes.RIGHTLEG],
      lastDroppedItem: null,
      xPos: 693,
      yPos: 473,
    },
  },
  {
    name: 'Head',
    type: ItemTypes.HEAD,
    url: HeadImage,
    xPos: 1285,
    yPos: 569,
    height: 169,
    width: 120,
    target: {
      accepts: [ItemTypes.HEAD],
      lastDroppedItem: null,
      xPos: 613,
      yPos: 101,
    },
  },
  {
    name: 'Chest',
    type: ItemTypes.CHEST,
    url: ChestImage,
    xPos: 1214,
    yPos: 316,
    height: 179,
    width: 293,
    target: {
      accepts: [ItemTypes.CHEST],
      lastDroppedItem: null,
      xPos: 526,
      yPos: 214,
    },
  },
];
export default {
  ItemTypes,
  BodyParts,
  ExtraDraggables
};
