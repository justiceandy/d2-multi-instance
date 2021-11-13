import output from "../../actions/output/globals";

export default async function(e) {
    console.log(e)
    try {
        const errorMessage = e.stdout.replace(/\r?\n|\r/g, "");
        if(errorMessage === 'No matching handles found.') {
            output.onWarning('No Active Handlers Found')
            return true;
        } 
        output.onError(e)
    } catch(e) {
        console.log(e)
    }
    return true;
}