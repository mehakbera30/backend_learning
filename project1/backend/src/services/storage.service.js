const Imagekit = require("@imagekit/nodejs");

const imagekit = new Imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
});     

async function uploadfile(buffer){
    const result = await imagekit.files.upload({
        file : buffer.toString('base64'),
        fileName : "image.jpg"
})
     return result;
}

module.exports = uploadfile;

// privatekey : jiska bhi pass hogi woh harma server pe kuch bhi upload kr sakta hai
// agr usna upload kr di toh hume ussa pay krna padega