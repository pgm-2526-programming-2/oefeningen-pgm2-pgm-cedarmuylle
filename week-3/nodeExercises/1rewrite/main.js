const { generateRandomData } = require("./data.js");
const { getDataProperties, countImportance, calculateComplexity } = require("./processing.js");
const { logProcessingReport, logStatisticsReport, logComplexitySummary } = require("./reporting.js");

const data = generateRandomData();
getDataProperties(data);
logProcessingReport(data);
const dataImportance = countImportance(data);
logStatisticsReport(data, dataImportance);
const dataComplexity = calculateComplexity(data);
logComplexitySummary(data, dataComplexity);
