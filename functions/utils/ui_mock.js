//@ts-check
const getDenseUnits = () => {
    return 200;
};

const getLearningRate = () => {
    // Do not increase above 0.0001.
    // Doing so has produced very poor training results.
    return 0.0001;
};

const getBatchSizeFraction = () => {
    return 0.4;
};

const getEpochs = () => {
    return 10;
};

const trainStatus = status => {
    console.log(status);
};

module.exports = {
    getDenseUnits,
    getLearningRate,
    getBatchSizeFraction,
    getEpochs,
    trainStatus
};
