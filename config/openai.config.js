const { Configuration, OpenAIApi }= require("openai");
const configuration = new Configuration({
    organization: "org-LC9K3sGwjSXZDVoUrOdkU760",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();



module.exports = openai;