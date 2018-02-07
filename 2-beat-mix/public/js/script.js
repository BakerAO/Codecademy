const makeFalse = () => new Array(16).fill(false);

let kicks = makeFalse();
let snares = makeFalse();
let hiHats = makeFalse();
let rideCymbals = makeFalse();

const getDrumArray = function (drumName) {
    switch (drumName){
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

const toggleDrum = function(drumName, index){
    const drumArray = getDrumArray(drumName);
    drumArray[index] = !drumArray[index];
};

const clear = function (drumName){
    const drumArray = getDrumArray(drumName);
    drumArray.fill(false);
};

const invert = function(drumName){
    const drumArray = getDrumArray(drumName);
    for(let i = 0; i < drumArray.length; i++){
        drumArray[i] = !drumArray[i];
    }
};
