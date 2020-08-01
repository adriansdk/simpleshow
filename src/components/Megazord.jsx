import LeftArmImage from '../assets/svg/simplemech arm 1.svg';
import RightArmImage from '../assets/svg/simplemech arm 2.svg';
import TorsoImage from '../assets/svg/simplemech-torso.svg';
import HeadImage from '../assets/svg/simplemech-head.svg';
import ChestImage from '../assets/svg/simplemech-chest.svg';
import LeftLegImage from '../assets/svg/simplemech-leg1.svg';
import RightLegImage from '../assets/svg/simplemech-leg2.svg';

const ItemTypes = {
  LEFTARM: 'leftArm',
  RIGHTARM: 'rightArm',
  TORSO: 'torso',
  HEAD: 'head',
  CHEST: 'chest',
  LEFTLEG: 'leftLeg',
  RIGHTLEG: 'rightLeg',
};

const BodyParts = [
  {
    name: 'Left arm',
    type: ItemTypes.LEFTARM,
    url: LeftArmImage,
    xPos: 1544,
    yPos: 276,
    height: 251,
    width: 89,
    target: {
      accepts: [ItemTypes.LEFTARM],
      lastDroppedItem: null,
      //   xPos:,
      //   yPos;,
    },
  },
  {
    name: 'Right arm',
    type: ItemTypes.RIGHTARM,
    url: RightArmImage,
    xPos: 1697,
    yPos: 276,
    height: 274,
    width: 89,
    target: {
      accepts: [ItemTypes.RIGHTARM],
      lastDroppedItem: null,
      //   xPos:,
      //   yPos;,
    },
  },
  {
    name: 'Left leg',
    type: ItemTypes.LEFTLEG,
    url: LeftLegImage,
    xPos: 1000,
    yPos: 356,
    height: 270,
    width: 84,
    target: {
      accepts: [ItemTypes.LEFTLEG],
      lastDroppedItem: null,
      xPos: 330,
      yPos: 470,
    },
  },
  {
    name: 'Right leg',
    type: ItemTypes.RIGHTLEG,
    url: RightLegImage,
    xPos: 1108,
    yPos: 365,
    height: 270,
    width: 84,
    target: {
      accepts: [ItemTypes.RIGHTLEG],
      lastDroppedItem: null,
      //   xPos:,
      //   yPos;,
    },
  },
  {
    name: 'Head',
    type: ItemTypes.HEAD,
    url: HeadImage,
    xPos: 1285,
    yPos: 569,
    height: 120,
    width: 84,
    target: {
      accepts: [ItemTypes.HEAD],
      lastDroppedItem: null,
      //   xPos:,
      //   yPos;,
    },
  },
  {
    name: 'Chest',
    type: ItemTypes.CHEST,
    url: ChestImage,
    xPos: 1214,
    yPos: 316,
    height: 126,
    width: 207,
    target: {
      accepts: [ItemTypes.CHEST],
      lastDroppedItem: null,
      //   xPos:,
      //   yPos;,
    },
  },
];
export default {
  ItemTypes,
  BodyParts,
};
