
import Icon from '@mdi/react'
import {  
    mdiCrownOutline, 
    mdiNumeric1CircleOutline, 
    mdiNumeric2CircleOutline, 
    mdiNumeric3CircleOutline, 
    mdiNumeric4CircleOutline, 
    mdiNumeric5CircleOutline, 
    mdiNumeric6CircleOutline, 
    mdiNumeric7CircleOutline, 
    mdiNumeric8CircleOutline, 
} from '@mdi/js';

const accountOrderIcon = (order:string) => {
    const icons = {
        '0': mdiNumeric1CircleOutline,
        '1': mdiNumeric2CircleOutline,
        '2': mdiNumeric3CircleOutline,
        '3': mdiNumeric4CircleOutline,
        '4': mdiNumeric5CircleOutline,
        '5': mdiNumeric6CircleOutline,
        '6': mdiNumeric7CircleOutline,
        '7': mdiNumeric8CircleOutline,
    };
     {/* @ts-expect-error */}
    const myIcon = icons[order];
    return (
        <div className="AccountIdIcon">
            <Icon className="ActiveAccount" 
                  path={myIcon}
                  title="Main Account"
                  size={1} />
        </div>
    )
}


const squadLeaderIcon = (isLeader:any) => {
    return (isLeader ? 
        <Icon className="SquadLeader" path={mdiCrownOutline}
            title="Main Account"
            size={1} />
            :
        <Icon className="NotSquadLeader" path={mdiCrownOutline}
        title="Main Account"
        size={1} />) 
}


export {
    accountOrderIcon,
    squadLeaderIcon,
}

export default {
    accountOrderIcon,
    squadLeaderIcon,
}