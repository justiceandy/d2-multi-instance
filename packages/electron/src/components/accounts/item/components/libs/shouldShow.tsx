
    const shouldShowLaunchButtons = ({ state, qState, id }:any) => {
        if(qState.context.que.length && qState.context.selected !== id) return false;
        if(state.value === 'starting') return true;
        if(state.value === 'authenticating') return true;
        return false;
    }

    const shouldShowRunningButtons = ({ state }:any) => {
        if(state.value === 'running') return true;
        return false
    }
    const shouldShowAuthButtons = ({ state }:any) => {
        if(state.value === 'authenticate') return true;
        return false
    }

    const shouldShowIdleButtons = ({ state, qState, id }:any) => {
        if(qState.context.que.length
            && qState.context.selected !== id) return false
        if(state.value === 'idle') return true;
        return false;
    }

    const shouldShowQueButtons = ({  id, qState }:any) => {
        if(qState.context.que.length && qState.context.selected !== id) return true
        return false;
    }

    const shouldShowTermButtons = ({ state }:any) => {
        if(state.value === 'terminating') return true;
        if(state.value === 'killed') return true;
        return false;
    }


    export {
        shouldShowIdleButtons,
        shouldShowRunningButtons,
        shouldShowLaunchButtons,
        shouldShowAuthButtons,
        shouldShowQueButtons,
        shouldShowTermButtons,
    }