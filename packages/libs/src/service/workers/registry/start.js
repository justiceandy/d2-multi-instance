import battleNet from "../../../registry/battle-net";
import regmon from 'regmon';

export default function () {
    console.log('Worker 2:', 'Registry Watch')
    const keys = battleNet.keys;
    Object.keys(keys).map(i => regmon(keys[i].type, keys[i].name, keys[i].callback));
}